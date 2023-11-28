const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();
const siteData = {
    title: "nodeAPP",
    message: "test"
}


app.use(express.static(path.join(__dirname, 'assets')))

// view template set
app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(require('express-ejs-layouts'))
    .set('layout', 'layouts/layout') 

app.listen(port, function() {
  console.log('Listening on http://localhost:%s/', port);
});

// route rendering
app.get('/', function(req, res) {
    app.locals.styleNo = 0;
    res.render('pages/index', {
            title: "HOME | " + siteData.title
        } 
    )
});

app.get('/about', function(req, res) {
    app.locals.styleNo = 1;
    res.render('pages/index', {
            title: "About | " + siteData.title,
            message : siteData.message
        } 
    )
});
