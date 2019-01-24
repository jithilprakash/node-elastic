const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json({type:'*/*'}))


require('./routes/issues.routes')(app);

app.listen(3123);
