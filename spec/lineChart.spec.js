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
  it('does not render anything when data and container is missing', () => {
    const resultContainer = renderLine(undefined, undefined);
    expect(resultContainer).toBeUndefined();
  });
  it('does not render anything when data is empty', () => {
    const resultContainer = renderLine(document.getElementById('chart-container'), []);
    expect(resultContainer).toBeUndefined();
  });
  it('does not render anything when container is missing', () => {
    const resultContainer = renderLine(undefined, [1, 2, 5]);
    expect(resultContainer).toBeUndefined();
  });
  it('does render expected line', () => {
    const chartContainer = document.getElementById('chart-container');
    const resultContainer = renderLine(chartContainer, [1, 2, 5]);

    const resultSvg = resultContainer.childNodes[0];
    expect(resultSvg).toBeDefined();
    expect(resultSvg.id).toBe('chart-svg');
    expect(resultSvg.getAttribute('width')).toBe('800');
    expect(resultSvg.getAttribute('height')).toBe('200');

    const resultLine = resultSvg.childNodes[0];
    expect(resultLine).toBeDefined();
    expect(resultLine.id).toBe('chart-line');
    expect(resultLine.getAttribute('d').length).toBeGreaterThan(0);
    expect(resultLine.getAttribute('fill')).toBe('none');
    expect(resultLine.getAttribute('stroke')).toBe('blue');
    expect(resultLine.getAttribute('stroke-width')).toBe('3');
  });
});
