package jelec;
import java.util.ArrayList;
import java.util.List;

public class ShopDevices implements Cloneable{
    //shop address intended to get the city where shop is located
    private String shopAddress;
    List<Device> devices = new ArrayList<>();
    
    public String getShopAddress(){
    return shopAddress;
    }
    public void setShopAddress(String shopAddress){
    this.shopAddress = shopAddress;
    }
    
    public List<Device> getDevice(){
    return devices;
    }
    public void setDevice(List<Device> device){
    this.devices = devices;
    }
    //Add devices to the shop
    public void addDeviceDetails(){
    
        for(int i = 1; i<=10; i++){
        Device device = new Device();
        device.setPId(i);
        device.setPName("Product "+i+"\n");
        getDevice().add(device);
        }
    }
    
    public String toString(){
    return "Shop Details and Available Products: [shopAddress = "+ shopAddress +",devices = "+ devices +"]";
    }
    /*for shallow clonning
    @Override
    protected Object clone() throws CloneNotSupportedException{
    
        return super.clone();
    }*/
    
    //for deep cloning
    @Override
    protected ShopDevices clone() throws CloneNotSupportedException{
    
        ShopDevices sd = new ShopDevices();
        for(Device d : getDevice()){
        
            sd.getDevice().add(d);
        
        }
     return sd;
    }
}
