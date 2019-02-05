const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('./public'));

app.get('/', function(req, res) {
   res.render('index');
});

app.listen(PORT, function(){
   console.log(`App is running on port ${PORT}`)
});
