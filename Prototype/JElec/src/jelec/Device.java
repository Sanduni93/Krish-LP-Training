package jelec;
public class Device {

    private int pId;// product id
    private String pName;//productname
     
    //implement all getters and setters
    public int getPId(){
    return pId;
    }
    public void setPId(int pId){
    this.pId = pId;
    }
    public String getPName(){
    return pName;
    }
    public void setPName(String pName){
    this.pName = pName;
    }
     
    //to print the object
    
    @Override
    public String toString(){
    return "Device details: [pId = "+pId+", pName = "+pName+"]";
    }
}
