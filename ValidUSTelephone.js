function telephoneCheck(str) {
   var n=str.search(/[A-Za-z]/g);
   if(n>0)return false; 
   var newStr="";
   if(str[0]==='-')return false;
   newStr=str.replace(/-/g,''); 
   n=newStr.search(/^0-9/g);
   if(n>0)return false;
   newStr=newStr.replace(/\s+/g,''); 
   if(newStr.length<10)return false;
   
   if(newStr.search(/\(/g)>=0 || newStr.search(/\)/g)>0){
      if(newStr.search(/\)/)<0)return false;
      if(newStr.search(/\(/)<0)return false;
      }
   if(newStr.search(/\)/g)>5)return false;
   newStr=newStr.replace(/[()]/g,''); 
   if(newStr.length===10) return true;
   if(newStr.length===11){
    if(newStr[0]==='1')
      return true;
     else 
       return false;   
     }
 return newStr; 
}
telephoneCheck("(555)-555-5555");