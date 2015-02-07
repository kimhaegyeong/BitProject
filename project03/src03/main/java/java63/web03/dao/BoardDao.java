package java63.web03.dao;

import java.util.List;
import java.util.Map;
import java63.web03.domain.Board;

public interface BoardDao {
  Board selectOne(int no);
  void update(Board board);
  void delete(int no);
  List<?> selectList(Map<String,Object> params);
  void insert(Board board);  
}
