var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) thro(err);
    const dbo = db.db("mydb");
    const studentData = [
        {
            name: 'John',
            class: 10,
            subject: "English",
            marks: '80',
            grades: 'A-'
        },
        {
            name: 'Rohit',
            class: 10,
            subject: "Maths",
            marks: '72',
            grades: 'B+'
        },
        {
            name: 'Varun',
            class: 10,
            subject: "Science",
            marks: '68',
            grades: 'C+'
        },
        {
            name: 'Akash',
            class: 10,
            subject: "Hindi",
            marks: '97',
            grades: 'A+'
        },
        {
            name: 'Aaryan',
            class: 10,
            subject: "Punjabi",
            marks: '91',
            grades: 'A+'
        },

    ];

    // dbo.createCollection("students", (err, res) => {
    //     if (err) throw err;
    //     console.log("Collection successfully created!");
    //     db.close();
    //   });
    dbo.collection("students").insertMany(studentData, (err, res) => {
        if (err) throw err;
        console.log("Inserted " + res.insertedCount + " number of documents successfully");
        db.close();
    })
});