
public class TomFrog1 
{

public void getJumps (int distance){
int totalJumps;
if(distance<=5){
totalJumps = 1;
}
else{
totalJumps = distance/3 ; 
}


System.out.println("Total Jumps:"+totalJumps  );   

}

public void getTime (float distance){
float totalTime=0;
if(distance<=5){
totalTime =0; 
}
else{
totalTime = (8*distance)/9 ; 
}


System.out.println("Total time:"+totalTime  );   

}

public static void main(String[] args) 
{
TomFrog1 tf = new TomFrog1();

Scanner scan = new Scanner (System.in);       

System.out.println("Enter distance in number and meters:");     
float distance = scan.nextFloat();


if(distance<=0){
System.out.println("Distance can not be 0 or negative number");
}

tf.getJumps((int) distance);
tf.getTime(distance);

    }

    
}
