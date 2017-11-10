import { AngularSettingPage } from './app.po';

describe('angular-setting App', () => {
  let page: AngularSettingPage;

  beforeEach(() => {
    page = new AngularSettingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
