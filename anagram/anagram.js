
function anagram( firstWord, secondWord) {
   let len1 = firstWord.length;
   let len2 = secondWord.length;

   // if(len1 !== len2){

   //    console.log('Can not be an anagram..!');
     
   // }

   let first = firstWord.split('').sort().join('');
   let second = secondWord.split('').sort().join('');

   if(first === second){

      console.log("The words are anagrams..");
   } 
   else { 

      console.log("The words are not anagrams..");
   }
}

console.log(anagram("liste","silent"));
