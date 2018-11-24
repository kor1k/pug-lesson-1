let express = require('express');
const app = express();

app.set('views','./views');
app.set('view engine','pug');

app.get('/',(req,res)=>{
    res.render('index', {title: 'Homepage', message:'Hello world!'})
});

app.listen(3000);