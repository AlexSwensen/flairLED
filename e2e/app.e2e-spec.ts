import {FlairLEDPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('flair-led App', () => {
  let page: FlairLEDPage;

  beforeEach(() => {
    page = new FlairLEDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });

  it('should see a button on that page', () => {
    const button = element(by.buttonText('Hello'));
    expect(button.isPresent()).toBeTruthy();
  });
});
