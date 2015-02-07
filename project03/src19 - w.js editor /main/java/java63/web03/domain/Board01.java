/*package java63.web03.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class Board01 implements Serializable {
  private static final long serialVersionUID = 1L;

  protected int no;
  protected int userNo;
  protected String userName;
  protected String productNo;
  protected boolean ifLike;
  protected String title;
  protected String content;
  protected Date date;
  protected int count;
  protected int recommend;
  protected String img;
  protected MultipartFile imgFile;
  protected List<?>         imgList;

  protected int rcount;   

  public int getRcount() {
    return rcount;
  }

  public void setRcount(int rcount) {
    this.rcount = rcount;
  }

  public int getNo() {
    return no;
  }

  public void setNo(int no) {
    this.no = no;
  }

  public int getUserNo() {
    return userNo;
  }

  public void setUserNo(int userNo) {
    this.userNo = userNo;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getProductNo() {
    return productNo;
  }

  public void setProductNo(String productNo) {
    this.productNo = productNo;
  }

  public boolean isIfLike() {
    return ifLike;
  }

  public void setIfLike(boolean ifLike) {
    this.ifLike = ifLike;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  } 
  
 
  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public int getCount() {
    return count;
  }

  public void setCount(int count) {
    this.count = count;
  }

  public int getRecommend() {
    return recommend;
  }

  public void setRecommend(int recommend) {
    this.recommend = recommend;
  }
  
 

  public String getImg() {
    return img;
  }

  public void setImg(String img) {
    this.img = img;
  }

  public MultipartFile getImgFile() {
    return imgFile;
  }

  public void setImgFile(MultipartFile imgFile) {
    this.imgFile = imgFile;
  }

  public List<?> getImgList() {
    return imgList;
  }
  public void setImgList(List<?> imgList) {
    this.imgList = imgList;
  }

  public static long getSerialversionuid() {
    return serialVersionUID;
  }

  @Override
  public String toString() {
    return "Board [no=" + no + ", userNo=" + userNo + ", userName=" + userName
        + ", productNo=" + productNo + ", ifLike=" + ifLike + ", title="
        + title + ", content=" + content + ", date=" + date + ", count="
        + count + ", recommend=" + recommend + ", img=" + img + ", rcount="
        + rcount + "]";
  }

 
}*/