package subject_memento;

public class Subject_memento {

    public static void main(String[] args) {
      MarksHistory marksHistory = new MarksHistory();
      Mark mark = new Mark();
      
      mark.addMarks(new MarksDetails(12));
      mark.addMarks(new MarksDetails(13));
      
      marksHistory.save(mark);
      System.out.println(mark);
      
      mark.addMarks(new MarksDetails(44));
      marksHistory.save(mark);
      System.out.println(mark);
         
      mark.addMarks(new MarksDetails(85));
      marksHistory.save(mark);
      System.out.println(mark);
       
      mark.addMarks(new MarksDetails(52));
      marksHistory.save(mark);
      System.out.println(mark);
      
      mark.addMarks(new MarksDetails(69));
      marksHistory.save(mark);
      System.out.println(mark);
      
      
      //call revert method
      marksHistory.revert(mark);
      System.out.println(mark);
      
       marksHistory.revert(mark);
      System.out.println(mark);
      
       marksHistory.revert(mark);
      System.out.println(mark);
      
       marksHistory.revert(mark);
      System.out.println(mark);
      
       marksHistory.revert(mark);
      System.out.println(mark);
      
       marksHistory.revert(mark);
      System.out.println(mark);
       
    }
    
}
