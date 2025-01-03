package com.outlookmail;

import org.springframework.stereotype.Service;
import jakarta.mail.*;
import jakarta.mail.internet.MimeMultipart;
import org.jsoup.Jsoup;

import java.util.Properties;

@Service
public class EmailService {

    public void readEmails() {
        try {
            Properties properties = new Properties();
            properties.put("mail.store.protocol", "pop3s");
            properties.put("mail.pop3s.host", "outlook.office365.com");
            properties.put("mail.pop3s.port", "995");
            properties.put("mail.pop3s.ssl.enable", "true");

            Session session = Session.getDefaultInstance(properties);
            Store store = session.getStore("pop3s");
            store.connect("outlook.office365.com", "narendrapallaki2607@outlook.com", "mkxedepjfneqlonu");

            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);

            Message[] messages = inbox.getMessages();
            for (Message message : messages) {
                System.out.println("Subject: " + message.getSubject());
                System.out.println("From: " + message.getFrom()[0]);
                System.out.println("Body: ");
                System.out.println(getTextFromMessage(message));
            }

            inbox.close(false);
            store.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String getTextFromMessage(Message message) throws Exception {
        if (message.isMimeType("text/plain")) {
            return message.getContent().toString();
        } else if (message.isMimeType("text/html")) {
            return Jsoup.parse(message.getContent().toString()).text();
        } else if (message.isMimeType("multipart/*")) {
            MimeMultipart mimeMultipart = (MimeMultipart) message.getContent();
            return getTextFromMimeMultipart(mimeMultipart);
        }
        return "No content";
    }

    private String getTextFromMimeMultipart(MimeMultipart mimeMultipart) throws Exception {
        StringBuilder result = new StringBuilder();
        int count = mimeMultipart.getCount();
        boolean hasTextPart = false;

        for (int i = 0; i < count; i++) {
            BodyPart bodyPart = mimeMultipart.getBodyPart(i);

            if (bodyPart.isMimeType("text/plain")) {
                hasTextPart = true;
                result.append(bodyPart.getContent().toString()).append("\n");
            } else if (bodyPart.isMimeType("text/html")) {
                result.append(Jsoup.parse(bodyPart.getContent().toString()).text()).append("\n");
            } else if (bodyPart.getContent() instanceof MimeMultipart) {
                result.append(getTextFromMimeMultipart((MimeMultipart) bodyPart.getContent())).append("\n");
            }
        }

        if (hasTextPart) {
            return result.toString().replace("\n", " ").trim();
        }

        return  result.toString().trim();
    }
}
