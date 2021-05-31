
package singletondesignpattern;

import java.util.Scanner;

public class ApplySingleton {
  
    //create a static private instance
  
    private static ApplySingleton getEmail;    
    
    //create default constructor as private
    private ApplySingleton()
    {}
    
    public static ApplySingleton getInstance(){
        
      
        if (getEmail == null){
              synchronized (ApplySingleton.class){
              if(getEmail == null){
              getEmail = new ApplySingleton();
              }
              
              }
      
        }
        
    return getEmail;
    }
    
    public void getEmail(){
       System.out.println("Go back and fill the email field to continue reading!!!");

    }
}
