package singletondesignpattern;
public class SingletonDesignPattern {

    public static void main(String[] args) {
        // TODO code application logic here
        ApplySingleton as= ApplySingleton.getInstance();
        ApplySingleton as1= ApplySingleton.getInstance();
     
        
  as.getEmail();
  
  as1.getEmail();
       
        
    }
}



