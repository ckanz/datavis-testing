import renderLine from './lineChart';

const renderApp = () => {

  const dataArray = [];
  for (let i=0; i<50; i++) {
    dataArray.push(Math.random(0,1000));
  }

  renderLine(
    document.getElementById('chart-container'),
    dataArray
  );
};

renderApp();
export default renderApp;
