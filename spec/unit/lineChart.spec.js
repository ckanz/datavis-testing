import renderLine, { dataIsValid } from '../../src/lineChart';

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
  it('does not render anything when data and container is missing', () => {
    const resultContainer = renderLine(undefined, undefined);
    expect(resultContainer).toBeUndefined();
  });
  it('does show message when data is empty', () => {
    const resultContainer = renderLine(document.createElement('div'), []);
    expect(resultContainer.innerHTML).toBe('Missing or invalid data');
  });
  it('does not render anything when container is missing', () => {
    const resultContainer = renderLine(undefined, [1, 2, 5]);
    expect(resultContainer).toBeUndefined();
  });
  it('does render expected line', () => {
    const chartContainer = document.createElement('div');
    const resultContainer = renderLine(chartContainer, [1, 2, 5]);

    const resultSvg = resultContainer.childNodes[0];
    expect(resultSvg.id).toBe('chart-svg');
    expect(resultSvg.getAttribute('width')).toBe('800');
    expect(resultSvg.getAttribute('height')).toBe('200');

    const resultLine = resultSvg.childNodes[0];
    expect(resultLine.id).toBe('chart-line');
    expect(resultLine.getAttribute('d').length).toBeGreaterThan(0);
    expect(resultLine.getAttribute('fill')).toBe('none');
    expect(resultLine.getAttribute('stroke')).toBe('#b6c630');
    expect(resultLine.getAttribute('stroke-width')).toBe('3');
  });
});
