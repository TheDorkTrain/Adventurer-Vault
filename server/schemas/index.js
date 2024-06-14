const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post ('/api/image', upload.single('image'),(req, res) => {
    console.log(req.file);
    if(!req.file){
        res.send({ code : 400, message : 'No file uploaded' });
    }else{
        res.send({ code : 200, message : 'File uploaded successfully' });
    }
    
});

app.listen(3001, () => {
  console.log(`API server running on port 3001!`);
});

module.exports = { typeDefs, resolvers };
