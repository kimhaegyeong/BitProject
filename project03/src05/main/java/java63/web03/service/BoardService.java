package java63.web03.service;

import java.util.HashMap;
import java.util.List;

import java63.web03.dao.BoardDao;
import java63.web03.domain.Board;
import java63.web03.domain.Board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/* Service 컴포넌트의 역할
 * => 비즈니스 로직 수행
 * => 트랜잭션 관리
 */

@Service
public class BoardService {
  @Autowired
  BoardDao boardDao;
  
  public List<?> getList(int pageNo, int pageSize) {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("startIndex", ((pageNo - 1) * pageSize));
    paramMap.put("pageSize", pageSize);
    
    return boardDao.selectList(paramMap);
  }
  
  public int getMaxPageNo(int pageSize) {
    int totalSize = boardDao.totalSize();
    int maxPageNo = totalSize / pageSize;
    if ((totalSize % pageSize) > 0) maxPageNo++;
    
    return maxPageNo;
  }
  
  /* @Transactional 선언
   * => 메서드 안의 입력/변경/삭제(manipluation) 작업을 하나의 작업을 묶는다.
   * => 모든 작업이 성공했을 때만 서버에 반영한다. 
   */  
  @Transactional(
      rollbackFor=Exception.class, 
      propagation=Propagation.REQUIRED)
  public void add(Board board) {
    boardDao.insert(board); 
    
  }
  
  @Transactional(
      rollbackFor=Exception.class, 
      propagation=Propagation.REQUIRED)
  public void update(Board board) {
    boardDao.update(board);
  }
  
  @Transactional(
      rollbackFor=Exception.class, 
      propagation=Propagation.REQUIRED)
  public void delete(int boardNo) {
    boardDao.delete(boardNo);
  }
  
  public Board get(int boardNo) {
    Board board = boardDao.selectOne(boardNo);
    return board;
  }
}
















