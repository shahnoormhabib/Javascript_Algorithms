var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var result = $.grep(collection, function(e){ return e.id == id; });
  if(prop!=="tracks" ){
    if(value!=="")collection[id][prop]=value;
    else delete collection[id][prop];
  }
  else if(prop==="tracks"){
    if(!collection[id].hasOwnProperty(prop)){
      collection[id][prop]=[value];
    }
    if(value!=="")collection[id][prop].push(value);
    if(value==="")delete collection[id][prop];
  }
  return collection;
}

updateRecords(2548, "artist", "");

