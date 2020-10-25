const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;
const path = require('path')


var bodyParser = require("body-parser");






var fs = require("fs");
var file =  "calendar\\calender.db";
var exists = fs.existsSync(file);
if(!exists) {
	console.log("No DB Found.");
}

// var sqlite3 = require("sqlite3").verbose();

// var __dirname = "C:\\Users\\CJLin\\Desktop\\Calendar\\"

app.use(bodyParser.urlencoded({extended:true}))




const resolve = (page) => path.join(__dirname, 'calendar', `${page}.html`)

app.get('/', (req, res) => {
	console.log('enter home page, redirect to calendar')
	res.redirect('/calendar')
})
app.use(express.static('public'));

app.get('/calendar', function(req, res) {
	
	// var Name = "Peter"
	// var data = {'row':[]}

 //    var db = new sqlite3.Database(file);
	// db.serialize(() => {
	// 	db.each(`SELECT V.name, V.id 
 //            FROM V, P
 //            WHERE V.id=P.id AND P.participant=(?)`,[Name], function(err, row) {
	    		
	//     		if (err) {
	//     			return console.error(err.message);
	//     		}
	//     		data['row'].push( {'name':row.name, 'id':row.id} )
	//     		//data['row'].push( {"name":'漢堡', "id":'100'} );
	//     		console.log("name: "+row.name+" id: "+row.id);

	//     });
	// });
	// db.close();
	
	//var data = {row:[{"name":'漢堡', "id":'100'}, {"name":'西瓜', "id":'300'}]}
    //res.render("calendar", data);
    res.sendFile(resolve('calendar'));
});

app.get('/create', function(req, res) {
    res.sendFile(resolve('create'));
});

app.get('/bill', function(req, res) {
	/*
    var Name = "Peter"
    var date = "10/"+req.query.date+"/2020"

    var data = {"participant":Name, "row":[]}

    var id;

    var db = new sqlite3.Database(file);
	db.serialize(() => {
		db.each(`SELECT V.name, V.id 
            FROM V, P
            WHERE V.id=P.id AND P.participant=(?) AND P.id LIKE '(?)%'`,[Name, date], function(err, row) => {
	    		if (err) {
	    			return console.error(err.message);
	    		}
	    		//console.log(row.id + "\t" + row.name);
	    		data["name"] = row.name
	    		id = row.id
	    	}
	    );

		db.each(`SELECT M.matter, M.money 
            FROM M
            WHERE M.id=(?) AND M.participant=(?)`,[id, Name], function(err, row) => {
    			if (err) {
    				return console.error(err.message);
    			}
    			//console.log(row.id + "\t" + row.name);
    			data.append( {"matter":row.matter, "money":row.money} )
    		}
	    );
	});
	db.close();
	*/

	//var data = {name:"西子灣", row:[ {"matter":'漢堡', "price":'100'}, {"matter":'西瓜', "price":'300'} ]}
    //res.render("bill", data);
    res.sendFile(resolve(bill));
});


app.post('/vote', function(req, res) {
	var Datapicker = req.body.Datapicker;
    var Time = req.body.Time;
	var AMPM = req.body.AMPM;
	/*
	var Activity = req.body.Activity;
	var Place = req.body.Place;
	*/
	var Name = "Peter"
	
	if( !(Datapicker && Time && AMPM && Activity && Place) ){
		res.redirect('/calendar')
		//res.send(Time+' '+Activity+' '+Place+' '+Datapicker+' '+AMPM)
	}
	/*
	var db = new sqlite3.Database(file);
	
	db.run("INSERT INTO P(id, participant) VALUES(?,?)",[Datapicker+Time+AMPM, Name], function(err, row) {
		if (err) {
			return console.log(err.message);
		}
    });
	
	db.close();
	*/
	res.redirect('/calendar')
	
});


app.post('/regist', function(req, res) {
	var Datapicker = req.body.Datapicker;
    var Time = req.body.Time;
	var AMPM = req.body.AMPM;
	var Activity = req.body.Activity;
	var Place = req.body.Place;
	//res.send(Time+' '+Activity+' '+Place+' '+Datapicker+' '+AMPM)
	var Name = "Peter"
	
	if( !(Datapicker && Time && AMPM && Activity && Place) ){
		//res.send(Time+' '+Activity+' '+Place+' '+Datapicker+' '+AMPM)
		res.redirect('/calendar')
	}
	/*
	var db = new sqlite3.Database(file);
    db.run("INSERT INTO V(id, name, location) VALUES(?,?,?)",[Datapicker+Time+AMPM, Activity, Place], function(err, row) {
		if (err) {
			return console.log(err.message);
		}
    });
	db.run("INSERT INTO P(id, participant) VALUES(?,?)",[Datapicker+Time+AMPM, Name], function(err, row) {
		if (err) {
			return console.log(err.message);
		}
    });
	
	db.close();
	*/
	res.redirect('/calendar')
	
});








app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});


app.listen(port, () => console.log(`app listening on port ${port}!`));