describe('App', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Nile');
  });

  it('should have a heading', () => {
    expect(element(by.css('sd-app sd-toolbar h1')).getText()).toEqual('Nile');
  });

  it('should have <nav>', () => {
    expect(element(by.css('sd-app sd-navbar nav')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Products', () => {
    expect(element(by.css('sd-app sd-navbar nav a:first-child')).getText()).toEqual('PRODUCTS');
  });

});
