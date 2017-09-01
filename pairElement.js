function pairElement(str) {
  var arrayDNA=str.split('');
  var lArray=arrayDNA.length;
  var newArray=[2];
  for(var i=0;i<lArray;i++)
    {
      switch(arrayDNA[i]){
        case "C":
          newArray.push(["C","G"]);
          break;
        case "G":
          newArray.push(["G","C"]);
          break;
        case "A":
          newArray.push(["A","T"]);
          break;
        case "T":
          newArray.push(["T","A"]);
      }
    }
  var shifted=newArray.shift();
  return newArray;
}

pairElement("GCG");
