import renderLine from './lineChart';
import data from './data';
import './style.css';

const renderApp = () => {

  renderLine(
    document.getElementById('chart-container'),
    data
  );
};

console.log(data.length);

renderApp();
export default renderApp;
