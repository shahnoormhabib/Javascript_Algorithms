function checkNumber (input) {
  return typeof input === 'number';
}

function addTogether(num1, num2) {
  var sum;
  if(arguments.length == 1 && checkNumber(arguments[0])){
   return function (num2) {
     if (checkNumber(num2)){
        return num1 + num2;
     }
    };

  }
  else if (arguments.length==2) {
    if(checkNumber(arguments[1]) && checkNumber(arguments[0])){
      sum=arguments[0]+arguments[1];
      return sum;
    }
    else return;
  }//lenght == 2
  else return;
}
addTogether("http://bit.ly/IqT6zt");
//addTogether(2,"3"); 