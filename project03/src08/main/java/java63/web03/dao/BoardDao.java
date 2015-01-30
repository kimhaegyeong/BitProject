package java63.web03.dao;

import java.util.List;
import java.util.Map;
import java63.web03.domain.Board;

/* myBatis에서 DAO 클래스를 만들 때 
 * 다음 인터페이스에 선언된 규칙에 따라 만들 것이다.
 * 따라서 인터페이스 선언시 약간의 규칙을 따라야 한다.
 * 
 * 규칙:
 * => 파라미터는 하나여야 한다. 또한 맵퍼 파일의 파라미터 타입과 일치해야 한다.
 * => 메서드 이름은 SQL 아이디와 같아야 한다.
 * => 인터페이스 패키지도 SQL 맵퍼 파일의 네임스페이스와 같아야 한다. 
 */
public interface BoardDao {
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

  
  
  void insert(Board board);
  /*void insertPhoto(Board board);
  List<?> selectPhoto(int boardNo);
  void deletePhoto(int boardNo);*/
  int totalSize();
  int goodSize();
  int badSize();

}


















