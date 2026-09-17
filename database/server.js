const sqlite3 = require("sqlite3").verbose();
let sql;

//connecting to database
const db = new sqlite3.Database("./database/levels.db", sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message); 
});

//create a table
//sql = `CREATE TABLE levels(id STRING PRIMARY KEY, name, position, publisher, verifier, description, youtubeUrl, points)`;
//db.run(sql);

/*
sql = `INSERT INTO levels(id, name, position, publisher, verifier, description, youtubeUrl, points) VALUES (?,?,?,?,?,?,?,?)`;
db.run(sql, ["artemis13","Artemis 13",2,"Mvngo","Zoink","To all of you down there on Earth... We love you from the moon. // Verified by Zoink", "https://youtu.be/FgjOM0ef1N8", 9], (err) => {
    if (err) return console.error(err.message);
});
*/


sql = `SELECT * FROM levels`;
db.all(sql, [], (err, rows) => {
    if(err) return console.error(err.message);
    rows.forEach((row)=>{
        console.log(row);
    });
}); 
