const phantomcss = require('phantomcss');
const fs = require('fs');

casper.test.begin( 'Coffee machine visual tests', function ( test ) {
  phantomcss.init( {
    rebase: casper.cli.get( 'rebase' ),
    casper: casper,
    libraryRoot: fs.absolute( fs.workingDirectory + '/node_modules/phantomcss' ),
    screenshotRoot: fs.absolute( fs.workingDirectory + '/screenshots' ),
    failedComparisonsRoot: fs.absolute( fs.workingDirectory + '/failures' ),
    addLabelToFailedImage: false,
  });

  casper.start('http://localhost:8080').then(function () {
    phantomcss.screenshot('#chart-svg', 'svg screenshot');
    phantomcss.screenshot('#chart-line', 'line screenshot');
  });

  casper.then( function now_check_the_screenshots() {
    phantomcss.compareAll();
  });

  casper.run( function () {
    casper.test.done();
  });
});
