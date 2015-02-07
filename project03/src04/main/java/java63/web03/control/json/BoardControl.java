package java63.web03.control.json;

import java.io.File;
import java.util.HashMap;

import java63.web03.domain.Board;
import java63.web03.domain.Board;
import java63.web03.service.BoardService;
import java63.web03.service.MakerService;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller("json.boardControl")
@RequestMapping("/json/board")
public class BoardControl {
  static Logger log = Logger.getLogger(BoardControl.class);
  static final int PAGE_DEFAULT_SIZE = 5;
  
  @Autowired MakerService       makerService;
  @Autowired BoardService     boardService;
  @Autowired ServletContext servletContext;
   
  @RequestMapping(value="/add", method=RequestMethod.POST)
  public Object add(Board board) throws Exception {  
    
   /* if (board.getPhotofile() != null
        && !board.getPhotofile().isEmpty()) {

      String fileuploadRealPath = 
        servletContext.getRealPath("/fileupload");
      String filename = System.currentTimeMillis() + "_"; 
      File file = new File(fileuploadRealPath + "/" + filename);
    
      board.getPhotofile().transferTo(file);
      board.setPhoto(filename);
    }*/
    
    boardService.add(board);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    
    return resultMap;
  }
  
  @RequestMapping("/delete")
  public Object delete(int no) throws Exception {
    boardService.delete(no);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    
    return resultMap;
  }
  
  @RequestMapping("/list")
  public Object list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int pageSize) throws Exception {
    
    if (pageSize <= 0)
      pageSize = PAGE_DEFAULT_SIZE;
    
    int maxPageNo = boardService.getMaxPageNo(pageSize);
    
    if (pageNo <= 0) pageNo = 1;
    if (pageNo > maxPageNo) pageNo = maxPageNo;
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    resultMap.put("currPageNo", pageNo);
    resultMap.put("maxPageNo", maxPageNo);
    resultMap.put("boards", 
        boardService.getList(pageNo, pageSize));
    
    return resultMap;
  }
  
  @RequestMapping("/update")
  public Object update(Board board) throws Exception {
    boardService.update(board);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    return resultMap;
  }
  
  @RequestMapping("/updateForm")
  public Object updateForm(int no, Model model) throws Exception {
    Board board = boardService.get(no);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    resultMap.put("board", board);
    return resultMap;
  }
  
  @RequestMapping("/view")
  public Object view(int no, Model model) throws Exception {
    Board board = boardService.get(no);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    resultMap.put("board", board);
    return resultMap;
  }
}












