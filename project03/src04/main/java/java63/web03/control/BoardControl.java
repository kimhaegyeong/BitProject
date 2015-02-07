package java63.web03.control;

import java.io.File;
import java.util.HashMap;

import java63.web03.domain.Board;
import java63.web03.domain.Board;
import java63.web03.domain.Board;
import java63.web03.service.MakerService;
import java63.web03.service.BoardService;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/board")
public class BoardControl {
  static Logger log = Logger.getLogger(BoardControl.class);
  static final int PAGE_DEFAULT_SIZE = 5;
  
  @Autowired BoardService     boardService;
  @Autowired MakerService       makerService;
  
  @Autowired ServletContext servletContext;

  @RequestMapping(value="/add", method=RequestMethod.GET)
  public ModelAndView form() throws Exception {
    ModelAndView mv = new ModelAndView();
/*    mv.addObject("makers", makerService.getList());
*/    mv.setViewName("board/BoardForm");
    return mv;
  }  
  
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
    }
    */
    boardService.add(board);
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("status", "success");
    
    return resultMap;
  }
 
  @RequestMapping("/delete")
  public String delete(int no) throws Exception {
    boardService.delete(no);
    return "redirect:list.do";
  }
  
  @RequestMapping("/list")
  public String list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int pageSize,
      Model model) throws Exception {
    
    if (pageSize <= 0)
      pageSize = PAGE_DEFAULT_SIZE;
    
    int maxPageNo = boardService.getMaxPageNo(pageSize);
    
    if (pageNo <= 0) pageNo = 1;
    if (pageNo > maxPageNo) pageNo = maxPageNo;
    
    model.addAttribute("boards", 
        boardService.getList(pageNo, pageSize));
    
    model.addAttribute("currPageNo", pageNo);
    
    if (pageNo > 1) {
      model.addAttribute("prevPageNo", (pageNo - 1));
    }
    
    if (pageNo < maxPageNo) {
      model.addAttribute("nextPageNo", (pageNo + 1));
    }
    
    return "board/BoardList";
  }
  
  @RequestMapping("/update")
  public String update(Board board) throws Exception {
    System.out.println("업데이트 출력");
    boardService.update(board);
    return "redirect:list.do";
  }
  
  @RequestMapping("/view")
  public String view(int no, Model model) throws Exception {
    Board board = boardService.get(no);
    model.addAttribute("board", board);
/*    model.addAttribute("makers", makerService.getList());
*/    return "board/BoardView";
  }
  
  @RequestMapping("/updateForm")
  public String updateForm(int no, Model model) throws Exception {
    Board board = boardService.get(no);
    model.addAttribute("board", board);
/*    model.addAttribute("makers", makerService.getList());
*/    return "board/BoardUpdateForm";
  }
}












