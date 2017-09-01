function truthCheck(collection, pre) {
  // Is everyone being true?
  var lC=collection.length;
  var x;
  for(var i=0;i<lC;i++){
    if(collection[i].hasOwnProperty(pre)){
      x=collection[i][pre];
    if(x===null || x===undefined || x==="" || x===0 || x!==x)return false;
    }
    else return false;
  }
    return true; 
}

//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"single": "yes"}], "single");