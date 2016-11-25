import { LouiswalkerPage } from './app.po';

describe('louiswalker App', function() {
  let page: LouiswalkerPage;

  beforeEach(() => {
    page = new LouiswalkerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
