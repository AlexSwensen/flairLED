import { FlairLEDPage } from './app.po';

describe('flair-led App', () => {
  let page: FlairLEDPage;

  beforeEach(() => {
    page = new FlairLEDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
