var fs = require("fs");

var file =  "calender.db";
var exists = fs.existsSync(file);


if(!exists) {
    console.log("Creating DB file.");
    fs.openSync(file, "w");
}

 
 
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
 db.each("SELECT  * FROM M where participant = 309554036", function(err, row) {
        console.log(row.id +' '+row.money);
    });
return;
 
db.close();