/** 
 * @author Ahmed Ryan <bsse1011@iit.du.ac.bd>
*/

const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/add/:a/:b', (req, res) => {
    // parse int
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var sum = Number(a+b);
    res.send("Result: " + Number(sum));
});

app.get('/subtract/:a/:b', (req, res) => {
    // parse int
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var sum = Number(a-b);
    res.send("Result: " + Number(sum));
});

app.listen(port, () => {console.log("Our app is up and running...");});
module.exports = app