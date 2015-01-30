package java63.web03.domain;

import java.io.Serializable;

public class Board  implements Serializable {
  private static final long serialVersionUID = 1L;

  protected int       boardNo;
  protected int       userNo;
  protected int       productNo;
  protected int       ifLike;
  protected int       title;
  protected int       content;
  protected int       date;
  protected int       count;
  protected int       recommend;
  protected int       imgUrl;
  
  
  
  @Override
  public String toString() {
    return "Board [boardNo=" + boardNo + ", userNo=" + userNo + ", productNo="
        + productNo + ", ifLike=" + ifLike + ", title=" + title + ", content="
        + content + ", date=" + date + ", count=" + count + ", recommend="
        + recommend + ", imgUrl=" + imgUrl + "]";
  }  

  public int getBoardNo() {
    return boardNo;
  }
  public void setBoardNo(int boardNo) {
    this.boardNo = boardNo;
  }
  public int getUserNo() {
    return userNo;
  }
  public void setUserNo(int userNo) {
    this.userNo = userNo;
  }
  public int getProductNo() {
    return productNo;
  }
  public void setProductNo(int productNo) {
    this.productNo = productNo;
  }
  public int getIfLike() {
    return ifLike;
  }
  public void setIfLike(int ifLike) {
    this.ifLike = ifLike;
  }
  public int getTitle() {
    return title;
  }
  public void setTitle(int title) {
    this.title = title;
  }
  public int getContent() {
    return content;
  }
  public void setContent(int content) {
    this.content = content;
  }
  public int getDate() {
    return date;
  }
  public void setDate(int date) {
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
  public int getImgUrl() {
    return imgUrl;
  }
  public void setImgUrl(int imgUrl) {
    this.imgUrl = imgUrl;
  }

  
}
