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

casper.test.begin('The heading exists', 1, function suite(test) {
  casper.start('http://localhost:8080', function() {
    test.assertTitle('Chart Testing Example', 'title is the one expected');
  }).run(function() {
    test.done();
  });
});

casper.test.begin('All elements are displayed', 3, function suite(test) {
  casper.start('http://localhost:8080', function() {
    test.assertAllVisible('#chart-container', 'chart container is visible');
    test.assertAllVisible('#chart-svg', 'chart svg is visible');
    test.assertAllVisible('#chart-line', 'chart line is visible');
  }).run(function() {
    test.done();
  });
});
