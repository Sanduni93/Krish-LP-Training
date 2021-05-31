package factoryimplementation;
public class FactoryImplementation {

    public static void main(String[] args) {
    
        Employee emp1 = GKGarmentFactory.checkArea(4, Areas.Production);
        emp1.showDetails();
        
        Employee emp2 = GKGarmentFactory.checkArea(5, Areas.Transportation);
        emp2.showDetails();
    
    }   
}