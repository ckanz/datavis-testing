import renderLine from './lineChart';
import data from './data';

const renderApp = () => {

  renderLine(
    document.getElementById('chart-container'),
    data
  );
};

renderApp();
export default renderApp;
