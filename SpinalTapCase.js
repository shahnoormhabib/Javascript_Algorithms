function spinalCase(str) {
  var newStr=str.replace(/([A-Z])/g,' $1');
  newStr=newStr.replace(/[^A-Za-z0-9]/g,' ');
  newStr=newStr.replace(/\s{1,}/g,"-"); 
  newStr=newStr.replace(/^\-|[\-]$/g,'');
  newStr=newStr.toLowerCase();
  return newStr;
}
//spinalCase("The_Andy_Griffith_Show");
//spinalCase("AllThe-small Things");
spinalCase("AllThe");