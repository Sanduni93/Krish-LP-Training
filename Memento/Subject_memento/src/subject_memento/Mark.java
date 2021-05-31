//Originator class
package subject_memento;

import java.util.ArrayList;

public class Mark {

    ArrayList<MarksDetails> marks  = new ArrayList<>();
  
  //implement methods to get marks
  
    public void addMarks(MarksDetails marksDetails){
        
        marks.add(marksDetails);
    
    }
    
    public  ArrayList<MarksDetails> getMarks(){
    
        return  (ArrayList)marks.clone();
    }
    //save items
    public MarkMemento save(){
    return new MarkMemento(getMarks());
    }
    
    //revert items
    public void revert(MarkMemento markMemento){
    marks = markMemento.getMarks();
    }
     @Override
    public String toString() {
        return "Student marks of English: {" + marks + '}';
    }
  
    static class MarkMemento{
        
        ArrayList<MarksDetails> marks;
        
        public MarkMemento(ArrayList<MarksDetails> marks){
        this.marks = marks;
        }
        
        public ArrayList<MarksDetails> getMarks (){
        return marks;
        }
             
        
    
    
    }
}
