function translatePigLatin(str) {
  var char=str[0];
  var isVowel=false;
  var newArray=str.split('');
  var shifted;
  if(char==='a'|| char==='e'|| char==='o' || char==='u')isVowel=true;
  if(isVowel) {
    str+="way";
    return str;
  }
  else
    {
      var consArray=[char];
      
      for(var i=0;i<10;i++){
      if(checkConsonant(str[i])){
         newArray.push(str[i]);
         shifted=newArray.shift();
        }
        else break;
      }
      var newStr=newArray.join('');
      newStr+="ay";
      return newStr;
    }//else clause
}
function checkConsonant(c){
  var isConsonant=true;
  if(c==='a' || c==='e' || c==='o' || c==='u')isConsonant=false;
  return isConsonant;
}
translatePigLatin("glove");
