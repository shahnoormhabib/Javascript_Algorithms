function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArray=arr.splice(0,howMany);// newArray contains removed items
  return arr;//arr is now changed array
}

slasher([1, 2, 3], 2);