
function repeatedChars(input){
	
 //get individual chars via split(''), sort then and join to have string
 var str1= input.split('').sort().join('');

//convert all the letters in to lowercase
    var str2 = str1.toLowerCase();

//search and count individual chars 
    for(let x=0; x<str2.length;x++){
     let count=1;
     while(str2.charAt(x)==str2.charAt(x+1)){
         count++;
         x++;
     }
     console.log("The letter "+str2.charAt(x)+ " is counted on " + count+ "times ");
    }
}
console.log(repeatedChars("This is the place where we count number of characters.."));