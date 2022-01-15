// MODULES
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const path = require('path');

const app = require('./app');

// DATABASE CONECTION
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Conection successfull!'));


// HEROKU server static assets if in production
// if(process.env.NODE_ENV === 'production'){    
//   app.use(express.static('client/build'))  // set static folder 
//   //returning frontend for any route other than api 
//   app.get('*',(req,res)=>{     
//       res.sendFile (path.resolve(__dirname,'client','build',         
//                     'index.html' ));    
//   });
// }


// SERVER
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
