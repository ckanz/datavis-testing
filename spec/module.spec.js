import renderApp from '../src/module';

describe('renderApp', () => {
  beforeEach(() => {
    const myDiv = document.createElement('div');
    myDiv.id = 'js-div';
    document.body.appendChild(myDiv);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('imports function', () => {
    expect(renderApp).toBeTruthy();
  });
  it('renders text expectedly', () => {
    renderApp();
    expect(document.getElementById('js-div').innerHTML).toBe('Hello JavaScript!');
  });
});
