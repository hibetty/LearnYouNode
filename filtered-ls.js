var fs = require('fs');
var path = require('path');

var pathname = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(pathname, function(err, list){
  list.forEach(function(item){
    var itemExt = path.extname(item);
    if(itemExt === extension){
      console.log(item);
    }
  });
});