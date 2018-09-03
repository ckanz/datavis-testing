import renderLine from './lineChart';

const renderApp = () => {

  const dataArray = [];
  for (let i=0; i<25; i+= .1) {
    dataArray.push(Math.sin(i) + 1);
  }

  renderLine(
    document.getElementById('chart-container'),
    dataArray
  );
};

renderApp();
export default renderApp;
