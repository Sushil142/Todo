
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const md5 = require("md5")

const app = express();

var corsOptions = {
  origin: 'http://localhost:4000'
}
app.use(cors(bodyOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})));'


const db = require('./db/server.js');
db.mongoose
  .connect(db.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
  })
  .then(() => {
     console.log("Connected to the database!");
  })
  .catch(err => {
     console.log("Cannot connect to the database!", err);
     process.exit();
  });

app.use('/api', './routes/api');



app.get('/', (req, res) => {
  res.json({""});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server running on port on 4000");
});
