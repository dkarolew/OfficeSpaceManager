package agh.osm.api.report;

import com.lowagie.text.DocumentException;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


@RestController
@RequestMapping(path = "api/v1/reports")
@CrossOrigin(origins = "http://localhost:3000")
public class ReportController {

    @Setter(onMethod_ = @Autowired)
    private ReportGeneratorService reportGeneratorService;


    @GetMapping("/generate")
    public void generatePDF(HttpServletResponse response) throws IOException, DocumentException {
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
        String startDate = dateFormatter.format(new Date());
        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.DAY_OF_MONTH, 5);
        String finishDate = dateFormatter.format(c.getTime());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=reservation_report_" + startDate + "_" + finishDate + ".pdf";
        response.setContentType("application/pdf");
        response.setHeader(headerKey, headerValue);

        reportGeneratorService.export(response);
    }
}

