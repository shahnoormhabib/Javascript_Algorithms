function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
 var lArr1=arr1.length;
 var lArr2=arr2.length;
 var contains=[]; 
 for(var i=0;i<lArr2;i++){
   for(var j=0;j<lArr1;j++)
     if(arr2[i][1]==arr1[j][1]){
       arr1[j][0]+=arr2[i][0];
       contains.push(i);}     
 } 
  var lc=contains.length;
  var index=false;
  var curr=lArr1;
  for(var k=0;k<lArr2;k++)
  { 
    index=false;
    for(var l=0;l<lc;l++)
    if(k==contains[l]){
      index=true;
      break;
    }  
    if(index===false){arr1[curr]=arr2[k];curr++;}
  }
  arr1.sort(compareSecondColumn);
  
function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);