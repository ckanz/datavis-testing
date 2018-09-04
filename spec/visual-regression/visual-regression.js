const phantomcss = require('phantomcss');
const fs = require('fs');

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
