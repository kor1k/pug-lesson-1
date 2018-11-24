let express = require('expess');
const app = express();

app.set('views','/views');
app.set('view engine', 'pug');

app.get("/", (req, res) => {

});

app.listen(3000);