package agh.osm.api.report;

import agh.osm.api.place.Place;
import agh.osm.api.place.PlaceService;
import agh.osm.api.place.PlaceState;
import agh.osm.api.place.PlaceType;
import org.springframework.stereotype.Service;

import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfWriter;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


@Service
public class ReportGeneratorService {

    private static final Integer REPORT_DAYS = 7;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    private final PlaceService placeService;

    public ReportGeneratorService(PlaceService placeService) {
        this.placeService = placeService;
    }

    public void export(HttpServletResponse response) throws DocumentException, IOException {
        LocalDate startDate = LocalDate.now();

        List<String> dates = IntStream.iterate(0, i -> i + 1)
                .limit(REPORT_DAYS)
                .mapToObj(startDate::plusDays)
                .collect(Collectors.toList())
                .stream()
                .map(date -> date.format(formatter))
                .collect(Collectors.toList());

        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();
        Font fontTitle = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fontTitle.setSize(18);

        Paragraph paragraph = new Paragraph("==========RESERVATION STATUS REPORT==========\n\n", fontTitle);
        paragraph.setAlignment(Paragraph.ALIGN_CENTER);

        Font fontParagraph = FontFactory.getFont(FontFactory.HELVETICA);
        fontParagraph.setSize(12);

        StringBuilder builder = new StringBuilder();

        for (String date : dates) {
            List<Place> places = placeService.getPlacesInDate(date);
            List<Place> desks = places.stream()
                    .filter(p -> p.getType().equals(PlaceType.DESK))
                    .collect(Collectors.toList());
            List<Place> rooms = places.stream()
                    .filter(p -> p.getType().equals(PlaceType.ROOM))
                    .collect(Collectors.toList());

            long freeDesks = desks.stream()
                    .filter(r -> r.getState().equals(PlaceState.FREE))
                    .count();
            long allDesks = desks.size();
            long freeRooms = rooms.stream()
                    .filter(r -> r.getState().equals(PlaceState.FREE))
                    .count();
            long allRooms = rooms.size();

            builder.append("----------------------------------------\n");
            builder.append("Date: ").append(date).append("\n");
            builder.append("Free desks: ").append(freeDesks).append("/").append(allDesks).append("\n");
            builder.append("Free rooms: ").append(freeRooms).append("/").append(allRooms).append("\n");;
        }

        Paragraph paragraph2 = new Paragraph(builder.toString(), fontParagraph);
        paragraph2.setAlignment(Paragraph.ALIGN_LEFT);

        document.add(paragraph);
        document.add(paragraph2);
        document.close();
    }
}
