const phantomcss = require('phantomcss');
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

casper.test.begin( 'Line chart visual tests', function ( test ) {
  phantomcss.init({
    rebase: casper.cli.get('rebase'),
    screenshotRoot: fs.absolute( fs.workingDirectory + '/spec/visual-regression/screenshots' ),
    failedComparisonsRoot: fs.absolute( fs.workingDirectory + '/spec/visual-regression/failures' ),
    addLabelToFailedImage: false,
    cleanupComparisonImages: true,
  });

  casper.start('http://localhost:8080').then(function () {
    phantomcss.screenshot('body', 'overview screenshot');
    phantomcss.screenshot('#launch-button', 'launch button screenshot');
  });
  casper.then(function () {
    this.click('#launch-button');
    phantomcss.screenshot('#main', 'chart screenshot');
    phantomcss.screenshot('#title', 'title screenshot');
    phantomcss.screenshot('#chart-line', 'line screenshot');
    phantomcss.screenshot('#footer', 'footer  screenshot');
  });
  casper.then(function () {
    this.click('#launch-button');
    this.mouseEvent('mouseover', '#chart-line');
    phantomcss.screenshot('#main', 'chart screenshot');
    phantomcss.screenshot('#title', 'title screenshot');
    phantomcss.screenshot('#chart-line', 'line screenshot');
    phantomcss.screenshot('#footer', 'footer screenshot');
  });

  casper.then(function () {
    phantomcss.compareAll();
  });

  casper.run(function () {
    casper.test.done();
  });
});
