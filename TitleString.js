function titleCase(str) {
  var newStr=str.toLowerCase();
  var Array=newStr.split('');
  var lengthArray=Array.length;
  
  Array[0]=Array[0].toUpperCase();
  for(var i=1;i<lengthArray;i++){
    if(Array[i]==' ')Array[i+1]=Array[i+1].toUpperCase();
  }
  str=Array.join('');
  console.log(str);
  return str;
}