package java63.web03.control;

import java.util.HashMap;
import java63.web03.dao.BoardDao;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("/board/blist.do")
public class BoardListControl {
  static final int PAGE_DEFAULT_SIZE = 3;

  @Autowired
  BoardDao boardDao;
  
  public String execute(HttpServletRequest request) throws Exception {
    
    int pageNo = 0;
    int pageSize = 0;
    
    if (request.getParameter("pageNo") != null) {
      pageNo = Integer.parseInt(request.getParameter("pageNo"));
      pageSize = PAGE_DEFAULT_SIZE;
    }
    
    if (request.getParameter("pageSize") != null) {
      pageSize = Integer.parseInt(request.getParameter("pageSize"));
    }
    
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("startIndex", ((pageNo - 1) * pageSize));
    paramMap.put("pageSize", pageSize);
    
    request.setAttribute("boards", 
        boardDao.selectList(paramMap));
    
    return "/board/BoardList.jsp";
  }
  
}












