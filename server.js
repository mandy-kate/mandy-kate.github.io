var path = require('path')
var express = require('express')


var app = express()

app.use(express.static(path.join(__dirname, './')))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))

// app.get('/', function (req, res) {
//   console.log("getting here")
//   res.sendFile('./index.html')
// })

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server is running on 3000')
})