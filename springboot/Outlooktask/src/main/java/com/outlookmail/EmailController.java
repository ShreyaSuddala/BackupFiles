package com.outlookmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/emails")
public class EmailController {

    @Autowired
    private EmailRead emailRead;

    @Autowired
    private ReadEmailref readEmailref;

//    @Autowired
//    private EmailService emailService;

    @GetMapping("/read")
    public String readEmails() {
        emailRead.readEmails();
        return "Emails read successfully";
    }

    @GetMapping("/readsub")
    public  String readsubEmails(){
        readEmailref.readEmails();
        return "subject emails read successfully";
    }
}
