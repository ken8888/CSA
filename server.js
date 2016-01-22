var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname + "/public"));

app.get('/officers', function(req, res){
    res.sendFile(path.join(__dirname + '/public/officers.html'));
});

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

/*app.get('/officers', function(req, res){
    console.log("I received a GET request")
    
    officer1 = {
        img: 'http://placehold.it/400x300'
    };
    officer2 = {
        img: 'http://placehold.it/400x300'
    };
    officer3 = {
        img: 'http://placehold.it/400x300'
    };
    
    var officers = [officer1, officer2, officer3];
    
    res.json(officers);
    
});
*/
app.listen(3000);
console.log("Calling from server 3000!!!!");