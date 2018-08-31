import renderLine, { dataIsValid } from '../src/lineChart';

describe('dataIsValid', () => {
  it('recognises correct data', () => {
    expect(dataIsValid([1, 2, 5])).toBeTruthy();
  });
  it('recognises missing data', () => {
    expect(dataIsValid()).toBeFalsy();
  });
  it('recognises empty data', () => {
    expect(dataIsValid([])).toBeFalsy();
  });
});

describe('renderLine', () => {
  beforeEach(() => {
    const myDiv = document.createElement('div');
    myDiv.id = 'chart-container';
    document.body.appendChild(myDiv);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('imports function', () => {
    expect(renderLine).toBeTruthy();
  });
  it('does not render anything when data is missing', () => {
    renderLine();
    const chartContainer = document.getElementById('chart-container');
    expect(chartContainer.childNodes.length).toBe(0);
  });
  it('does not render anything when data is empty', () => {
    renderLine([]);
    const chartContainer = document.getElementById('chart-container');
    expect(chartContainer.childNodes.length).toBe(0);
  });
  it('does render expected line' ,() => {
    renderLine([1, 2, 5]);

    const chartContainer = document.getElementById('chart-container');
    expect(chartContainer.childNodes.length).toBe(1);

    expect(document.getElementById('chart-svg')).toBeDefined();
    expect(document.getElementById('chart-line')).toBeDefined();

    expect(document.getElementById('chart-line').getAttribute('d').length)
       .toBeGreaterThan(0);
  });
});
