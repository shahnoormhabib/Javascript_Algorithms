function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var x;
  var publish=[]; // Only change code below this line Object.keys(obj).length
  var lO=Object.keys(source).length;
  var prop=Object.keys(source);
  var propValue=Object.values(source);
  var y=propValue[0];
  var lC=collection.length;
  for(var i=0;i<lC;i++){
    for(j=0;j<lO;j++){
    if(collection[i].hasOwnProperty(prop[j])) {
      x=collection[i][prop[j]];
      if(x===propValue[j]){
        if(lO==1 || j==lO-1) 
          arr.push(collection[i]);
        
        }//x===propValue
      }//has property
    }
  }  
  // Only change code above this line
  return arr;
}
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
