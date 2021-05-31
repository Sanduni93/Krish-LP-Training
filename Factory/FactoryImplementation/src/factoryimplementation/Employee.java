package factoryimplementation;
public abstract class Employee {
    //specify all the variables which are used by subclasses
    int id;
    Areas area;
    String workingDates;
    //implement abstract method which can be invoked by sub class(provide encapsulation)
    protected  abstract void displayDates();
    
    //default constructor with 2 parameters. By based on id working days are displaying
    public Employee(int id, Areas area){
       
       this.id = id;
       this.area = area;
    }
    
    //to show final output
    void showDetails(){
   
       System.out.println("Your ID:"+this.id);
       System.out.println("Your area:"+this.area);
       System.out.println("Your working daya:"+this.workingDates);
       
    }    
}