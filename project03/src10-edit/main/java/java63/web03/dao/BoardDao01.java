package java63.web03.dao;

import java.util.List;
import java.util.Map;
import java63.web03.domain.Board;

public interface BoardDao01 {
  Board selectOne(int no);
  void update(Board board);
  void plusCount(Board board);

  void delete(int no);
  
  List<?> selectList(Map<String,Object> params);  
  List<?> selectListCount(Map<String,Object> params);
  List<?> selectListReco(Map<String,Object> params);
  
  List<?> selectGoodList(Map<String,Object> params);
  List<?> selectGoodListCount(Map<String,Object> params);
  List<?> selectGoodListReco(Map<String,Object> params);
  
  List<?> selectBadList(Map<String,Object> params);
  List<?> selectBadListCount(Map<String,Object> params);
  List<?> selectBadListReco(Map<String,Object> params);

  Integer prevBoard(Board board);
  Integer nextBoard(Board board);
  
  void insert(Board board);
  /*void insertPhoto(Board board);
  List<?> selectPhoto(int boardNo);
  void deletePhoto(int boardNo);*/
  int totalSize();
  int goodSize();
  int badSize();

}


















