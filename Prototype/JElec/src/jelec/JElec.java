package jelec;
public class JElec {

    public static void main(String[] args) throws CloneNotSupportedException{
      
        ShopDevices sd = new ShopDevices();
        
        sd.setShopAddress("City A");
        sd.addDeviceDetails();
    
        //Let's see power of prototype pattern
        ShopDevices sd1 = sd.clone();
        //remove product after cloning
        sd.getDevice().remove(2);
        sd1.setShopAddress("City B");
       
        System.out.println(sd);
        System.out.println(sd1);
    }
}