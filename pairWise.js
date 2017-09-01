function pairwise(arr, arg) {
  var Array=[];
  var index=0;
  var used=[];
  var takeIt=false;
  if(arr.length===0)return 0;
  for(var k=0;k<arr.length;k++)
    used[k]=false;
  for(i=0;i<arr.length;i++)
    {     
      for(var j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===arg && used[j]===false && used[i]===false){
             //takeIt=takeit(Array, [arr[i],arr[j]]);
             Array.push([arr[i],arr[j]]);
             used[j]=true;
             index+=i+j;
             break;
         }//test
       }//j loop
    }//i loop   
  return index;
}

pairwise([1, 1, 1], 2);