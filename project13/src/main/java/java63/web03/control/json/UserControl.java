package java63.web03.control.json;

import java.util.HashMap;
import java.util.Properties;

import java63.web03.domain.User;
import java63.web03.service.UserService;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller("json.userControl")
@RequestMapping("/json/user")
public class UserControl {
  static Logger log = Logger.getLogger(UserControl.class);
  static final int PAGE_DEFAULT_SIZE = 5;
  static String userSet;

  @Autowired UserService     userService;
  @Autowired ServletContext servletContext;

  @RequestMapping(value="/add", method=RequestMethod.POST)
  public Object add(User user) throws Exception {  
    userService.add(user);
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");

    return resultMap;
  }
  
  @RequestMapping(value="/update", method=RequestMethod.POST)
  public Object update(User user) throws Exception {
    
    System.out.println("UserControl Update 시작" + user);
    
    userService.update(user);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    
    System.out.println("UserControl Update 끝" + user);
    
    return resultMap;
  }
  
  @RequestMapping(value="/changePwd", method=RequestMethod.POST)
  public Object changePwd(User user) throws Exception {
    System.out.println("userSet = " + userSet);
    
    user.setEmail(userSet);
    //user.setPwd(user.getNewPwd()); 
    
    System.out.println("user = " + user);
    
    userService.changePwd(user);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    resultMap.put("email", userSet);
    
    //resultMap.put("pwd",user.getPwd());

    
    return resultMap;
  }
  
  @RequestMapping(value="/email", method=RequestMethod.POST)
  public Object findEmail(User user) throws Exception {
    
    System.out.println("user" + user);
    //System.out.println("email" + user.getEmail());
    //System.out.println("\"" + user.getEmail() +"\"");
    
    int random = (int) ((Math.random()+1) * 10000); //인증번호 랜덤발생
    System.out.println("" + random);
    
    
      // 메일 관련 정보
      String host = "smtp.naver.com";
      final String username = "wkdeogur0677@naver.com"; //사용할 이메일주소
      final String password = "wkd98520677"; //비번
      int port=465;
      
      // 메일 내용
      String recipient = user.getEmail(); //받는사람
      String subject = "인증번호 메일발송";
      String body = "인증번호는 " + random + " 입니다. 번호를 입력하세요.";
       
      Properties props = System.getProperties();
       
       
      props.put("mail.smtp.host", host);
      props.put("mail.smtp.port", port);
      props.put("mail.smtp.auth", "true");
      props.put("mail.smtp.ssl.enable", "true");
      props.put("mail.smtp.ssl.trust", host);
        
      Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
          String un=username;
          String pw=password;
          protected PasswordAuthentication getPasswordAuthentication() {
              return new PasswordAuthentication(un, pw);
          }
      });
      session.setDebug(true); //for debug
      
      Message mimeMessage = new MimeMessage(session);
      mimeMessage.setFrom(new InternetAddress("wkdeogur0677@naver.com")); //발신자 정보
      mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
      mimeMessage.setSubject(subject);
      mimeMessage.setText(body);

      Transport.send(mimeMessage);

    System.out.println("UserControl email 시작" + user);
    
    //userService.update(user);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    resultMap.put("vcode", random);
    resultMap.put("email", user.getEmail());
    
    System.out.println("UserControl email 끝" + user);
    
    userSet = user.getEmail();
    
    return resultMap;
  }


}












