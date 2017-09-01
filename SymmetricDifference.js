function sym(args) {
  var lArgs=arguments.length;
  var Array=[], found=false;
  var array=Symmetric(arguments[1],arguments[0]);
  for(var i=2;i<lArgs;i++){ 
      array=Symmetric(array,arguments[i]);}
    
$.each(array, function(i, el){
    if($.inArray(el, Array) === -1) Array.push(el);
});
  return Array;
}
function Symmetric(arr1,arr2){
  var lA1=arr1.length;
  var lA2=arr2.length;
  var Array=[];
  var found=false;
  for(var i=0;i<lA1;i++){
    found=false;
    for(var j=0;j<lA2;j++){
      if(arr1[i]===arr2[j]){
        found=true;
        break;
      }
      else found=false;
        }//loop j
    if(!found)Array.push(arr1[i]);
      }//loop i
    //switch the order
    for(i=0;i<lA2;i++){
      found=false;
    for(var k=0;k<lA1;k++){
      if(arr2[i]===arr1[k]){
        found=true;
        break;
      }
      else found=false;
        }//loop j
    if(!found)Array.push(arr2[i]);
      }//loop i
    return Array.sort();
   }
//sym([1, 2, 3], [5, 2, 1, 4]);