import renderLine from './lineChart';
import data from './data';
import './style.css';

const launchButton = document.getElementById('launch-button');
const chartContainer = document.getElementById('chart-container');

const renderApp = () => {
  renderLine(
    chartContainer,
    data
  );
};

if (launchButton) {
  launchButton.addEventListener('click', event => {
    renderApp();
    document.getElementById('main').style.display = 'block';
    event.currentTarget.style.display = 'none';
  });
}
export default renderApp;
