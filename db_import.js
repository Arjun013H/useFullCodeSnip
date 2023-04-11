const db = require('./db.js')

sql = 'show tables;'
db.query(sql,(err,res)=>{
  if(err) throw err;
  console.log(res);
});
