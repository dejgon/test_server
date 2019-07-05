const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    console.log('GET  request');
    res.send('Hello World!')}
    );

app.get('/crash', function(req, res){
    console.log('Crashed!');
    var filesArr = [];

    fs.readdir(path.join(__dirname, 'public'), (err, files) => {
        files.forEach(file => {
            filesArr.push(file.toString());
            console.log(file);
        })
        console.log('First elem: ' + filesArr[0]);
        res.json({ Files: filesArr });
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))