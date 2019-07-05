const fs = require('fs');
const server = require('webserver').create();

const html = fs.read('./dist/index.html');
const bundle = fs.read('./dist/bundle.js');

server.listen(8080, function(req, res) {
  console.log(req.url);
  res.statusCode = 200;
  if (req.url === '/bundle.js') {
    res.write(bundle);
  } else {
    res.write(html);
  }
  res.close();
});

casper.test.begin('button is displayed', 1, function suite(test) {
  casper.start('http://localhost:8080', function() {
    test.assertAllVisible('#launch-button', 'launch button is visible');
  }).run(function() {
    test.done();
  });
});

casper.test.begin('Chart is launched on click of button', 3, function suite(test) {
  casper.start('http://localhost:8080', function() {
    this.click('#launch-button');
    test.assertAllVisible('#chart-container', 'chart container is visible');
    test.assertAllVisible('#chart-svg', 'chart svg is visible');
    test.assertAllVisible('#chart-line', 'chart line is visible');
  }).run(function() {
    test.done();
  });
});

casper.test.begin('Footer displayed on line interaction', 1, function suite(test) {
  casper.start('http://localhost:8080', function() {
    this.click('#launch-button');
    this.mouseEvent('mouseover', '#chart-line');
    test.assertAllVisible('#footer', 'footer is visible');
  }).run(function() {
    test.done();
  });
});
