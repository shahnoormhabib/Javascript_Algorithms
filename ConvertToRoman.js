function convertToRoman(num) {  
  var quotient, remainder;
  var baseKey=[];
  var base=[1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var keys=["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var romanNumeral="";
  
  quotient=num;
  
  while(quotient>0){
    baseKey=findBaseValue(base,keys,num);
    quotient=Math.floor(num/baseKey[0]);//to make it the lowest integer
    for(var k=0;k<quotient;k++)
      romanNumeral+=baseKey[1];
    
  remainder=num%baseKey[0];
   num=remainder;
   if(quotient===0 || quotient<0)break;
    
  }
  return romanNumeral;
}
function findBaseValue(base,keys,num){  
  var keyBasePair=[];
  var lB=base.length;
  for(var i=lB-1;i>=0;i--){
    if(num==base[i]){
      keyBasePair[0]=base[i];
      keyBasePair[1]=keys[i];
      return keyBasePair;
    }
    else if(num>base[i]){
      keyBasePair[0]=base[i];
      keyBasePair[1]=keys[i];
      return keyBasePair;
    }
  }
  return keyBasePair;
}

convertToRoman(36);
