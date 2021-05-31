package factoryimplementation;
public class Transportation extends Employee {

    Transportation(int id,Areas area) {
        
        super(id, area);
        this.id = id;
        this.area = area;
       
    }

    @Override
     protected void displayDates() {
        
        if(id % 2 == 0){
            workingDates = "Monday, Wednesday, Friday";
        }
        else{
          workingDates = "Tuesday, Thursday, Friday";
        }
     }    
}