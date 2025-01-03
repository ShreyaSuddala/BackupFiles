package com.outlookmail;

import jakarta.mail.*;
import jakarta.mail.internet.MimeMultipart;
import org.jsoup.Jsoup;
import org.springframework.stereotype.Service;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ReadEmailref {

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
                if (matchesSubjectPattern(message.getSubject())) {
                    String content = getTextFromMessage(message);
                    System.out.println("Subject: " + message.getSubject());
                    System.out.println("From: " + message.getFrom()[0]);
                    System.out.println("Body: ");
                    System.out.println(content);
                }
            }

            inbox.close(false);
            store.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private boolean matchesSubjectPattern(String subject) {
        if (subject == null) {
            return false;
        }

        Pattern pattern = Pattern.compile("033\\w*");
        Matcher matcher = pattern.matcher(subject);
        return matcher.find();
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

        for (int i = 0; i < count; i++) {
            BodyPart bodyPart = mimeMultipart.getBodyPart(i);

            if (bodyPart.isMimeType("text/plain")) {
                result.append(bodyPart.getContent().toString()).append("\n");
            } else if (bodyPart.isMimeType("text/html")) {
                result.append(Jsoup.parse(bodyPart.getContent().toString()).text()).append("\n");
            } else if (bodyPart.getContent() instanceof MimeMultipart) {
                result.append(getTextFromMimeMultipart((MimeMultipart) bodyPart.getContent())).append("\n");
            }
        }

        return result.toString().replace("\n", " ").trim();
    }
}
