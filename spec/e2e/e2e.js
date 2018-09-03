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
