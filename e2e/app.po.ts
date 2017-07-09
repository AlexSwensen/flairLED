import { browser, by, element } from 'protractor';

export class FlairLEDPage {
  navigateTo(location?: string) {
    return browser.get(location || '/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
