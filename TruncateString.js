function truncateString(str, num) {
  // Clear out that junk in your trunk
  var lStr=str.length;
  if(lStr>num && num>3)
  return str.slice(0,num-3)+"...";
  else if(lStr>num && num<3)
    return str.slice(0,num)+"...";
  return str;
}