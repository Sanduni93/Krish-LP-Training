
package subject_memento;
//Care Taker

import java.util.ArrayList;
import java.util.Stack;

public class MarksHistory {
    
    Stack<Mark.MarkMemento> previous = new Stack<>();
    
    public void save(Mark mark){
        
        previous.push(mark.save());
    
    }
  
     public void revert(Mark mark){
        
        if(!previous.isEmpty()){
        mark.revert(previous.pop());
        
        }
        else{
            System.out.println("You can not undo further...");
        }
    }
    
}
