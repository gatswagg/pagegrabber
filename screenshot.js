var page = require('webpage').create();
page.open('https://stackoverflow.com/', function() {
  page.render('out.png');
  phantom.exit();
});