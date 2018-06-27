import Express from 'express';
import bodyParser from 'body-parser'; 
// var Express = require('express')

let app = Express();
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => {
    console.log(req.query)
    res.send(`GET!${JSON.stringify(req.query)}`);
});
app.post('/',function(req,res){
    console.log(req.body)
    res.send(`POST${JSON.stringify(req.body)}`)
})

app.listen(4321, () => {
    console.log('server running http://localhost:4321');
});