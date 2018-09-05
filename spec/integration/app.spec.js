import renderApp from '../../src/app';

describe('renderApp', () => {
  beforeEach(() => {
    const myDiv = document.createElement('div');
    myDiv.id = 'chart-container';
    document.body.appendChild(myDiv);
    const myButton = document.createElement('button');
    myButton.id = 'launch-button';
    document.body.appendChild(myButton);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('does render chart expectedly' ,() => {
    renderApp();

    const chartContainer = document.getElementById('chart-container');
    expect(chartContainer.childNodes.length).toBe(1);

    const resultSvg = document.getElementById('chart-svg');
    const resultLine = document.getElementById('chart-line');

    expect(resultSvg).toBeDefined();
    expect(resultSvg.id).toBe('chart-svg');
    expect(resultSvg.getAttribute('width')).toBe('800');
    expect(resultSvg.getAttribute('height')).toBe('200');

    expect(resultLine).toBeDefined();
    expect(resultLine.id).toBe('chart-line');
    expect(resultLine.getAttribute('d').length).toBeGreaterThan(0);
    expect(resultLine.getAttribute('fill')).toBe('none');
    expect(resultLine.getAttribute('stroke')).toBe('#b6c630');
    expect(resultLine.getAttribute('stroke-width')).toBe('3');
  });
});
