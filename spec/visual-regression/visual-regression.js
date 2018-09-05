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
    phantomcss.screenshot('#main', 'overview screenshot');
    phantomcss.screenshot('#title', 'title screenshot');
    phantomcss.screenshot('#footer', 'footer screenshot');
    phantomcss.screenshot('#chart-line', 'line screenshot');
  });

  casper.then( function now_check_the_screenshots() {
    phantomcss.compareAll();
  });

  casper.run( function () {
    casper.test.done();
  });
});
