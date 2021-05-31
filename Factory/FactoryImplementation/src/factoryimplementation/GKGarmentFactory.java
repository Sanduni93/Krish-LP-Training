package factoryimplementation;
public class GKGarmentFactory {

    public static Employee checkArea(int id, Areas area){
        switch (area) {
            case Production : 
                return new Production(id,area);
            
            case Transportation:
                return new Transportation(id,area);
                
            default:
                return null;
            }
    }
}