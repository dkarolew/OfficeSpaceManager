package agh.osm.api.report;

import org.springframework.stereotype.Service;

import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfWriter;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Service
public class ReportGeneratorService {


    public void export(HttpServletResponse response) throws DocumentException, IOException {
        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();
        Font fontTitle = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fontTitle.setSize(18);

        Paragraph paragraph = new Paragraph("==========RESERVATION STATUS REPORT==========\n\n", fontTitle);
        paragraph.setAlignment(Paragraph.ALIGN_CENTER);

        Font fontParagraph = FontFactory.getFont(FontFactory.HELVETICA);
        fontParagraph.setSize(12);

        Paragraph paragraph2 = new Paragraph(
                "----------------------------------------\n" +
                "Date: 07-04-2020\n" +
                "Free desks: 10/30\n" +
                "Free rooms: 1/4\n" +
                "Additional equipment: \n" +
                "- 4 x MONITOR \n" +
                "- 1 x KEYBOARD\n" +
                "----------------------------------------\n" +
                "Date: 08-04-2020\n" +
                "Free desks: 15/30\n" +
                "Free rooms: 2/4\n" +
                "Additional equipment: \n" +
                "- 5 x MONITOR \n" +
                "- 1 x KEYBOARD\n" +
                "- 2 x MOUSE\n" +
                "----------------------------------------\n" +
                "Date: 09-04-2020\n" +
                "Free desks: 11/30\n" +
                "Free rooms: 0/4\n" +
                "----------------------------------------\n" +
                "Date: 10-04-2020\n" +
                "Free desks: 6/30\n" +
                "Free rooms: 3/4\n" +
                "Additional equipment: \n" +
                "- 1 x KEYBOARD\n" +
                "- 2 x MOUSE\n" +
                "----------------------------------------\n" +
                "Date: 11-04-2020\n" +
                "Free desks: 0/30\n" +
                "Free rooms: 4/4\n" +
                "Additional equipment: \n" +
                "- 3 x MOUSE\n", fontParagraph);
        paragraph2.setAlignment(Paragraph.ALIGN_LEFT);

        document.add(paragraph);
        document.add(paragraph2);
        document.close();
    }
}
