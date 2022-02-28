var PouchDB = require("PouchDB");
// var db = new PouchDB("mydb");

//READ THE DATABASE

// db.info().then((info)=>{
//     console.log(info);
// })

//INSERT A DOCUMENT INTO THE DATABASE

// doc1 = {
//   _id: new Date().toISOString(),
//   name: "Mayank",
//   Role: "Intern",
// };

// db.put(doc, function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Doc inserted");
//   }
// });

//INSERT MULTIPLE DOCUMENTS
// doc1 = {
//   _id: '011',
//   name: "Mayank",
//   Role: "Intern",
// };
// doc2 = {
//   _id: '012',
//   name: "Abhinav",
//   Role: "Intern",
// };
// doc3 = {
//   _id: '013',
//   name: "Akaash",
//   Role: "Intern",
// };
// doc4 = {
//   _id: '014',
//   name: "Nitin",
//   Role: "Intern",
// };

// docs = [doc1,doc2,doc3,doc4]

// db.bulkDocs(docs,function(err,res){
//     if(err){
//         console.log("error occuered",err);
//     }else{
//         console.log("Bulk doc inserted");
//     }
// })

//to get an object in db througn id

// db.get('014',function(err,doc){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(doc);
//     }
// })

//to update the record in pouchdb we need to get the revision id through
//the above mentioned command and then perform the following steps

// doc={
//     _id:'014',
//     name:'Revised name of nitin',
//     Role : 'Intern',
//     _rev:'1-3bdec2f9d91ff763892e9f1ddb82d4bb'
// }

// db.put(doc)

// db.get('014',function(err,doc){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(doc);
//     }
// })

//reading bunch of documents in couchdb

// db.allDocs(function(err,doc){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(doc.rows);
//     }
// })


//GOING THROUGH ALL THE DOCS IN THE DATABASE BY INCLUDING DOCS WE CAN GET THE ENTIRE DATABASE

// db.allDocs({include_docs: true},function(err,doc){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(doc);
//     }
// })

//DELETE A PARTICULAR DOCUMENT ON THE DATABASE

// db.remove('014','2-1a79acf5938d804c71cac1d8943ac37e',function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Document Deleted");
//     }
// })

//DELETE MULTIPLE DOCUMENTS

// docs=[
//     {_id:'some id',_rec:'some rev id',_delete:true},
//     {_id:'some id',_rec:'some rev id',_delete:true},
//     {_id:'some id',_rec:'some rev id',_delete:true},
// ]

// db.bulkDocs(docs,function(err,res){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Documents deleted");
//     }
// })

//DELETE A DATABASE

// var db = new PouchDB('testDb');

// db.destroy(function(err,res){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("DB deleted!");
//     }
// })