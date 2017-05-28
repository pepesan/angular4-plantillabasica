import { Angular4EjemplosPage } from './app.po';

describe('angular4-ejemplos App', () => {
  let page: Angular4EjemplosPage;

  beforeEach(() => {
    page = new Angular4EjemplosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
