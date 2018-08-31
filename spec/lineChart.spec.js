import renderLine from '../src/lineChart';

describe('renderApp', () => {
  beforeEach(() => {
    const myDiv = document.createElement('div');
    myDiv.id = 'chart-container';
    document.body.appendChild(myDiv);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('imports function', () => {
    expect(renderApp).toBeTruthy();
  });
});
