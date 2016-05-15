describe('App', () => {

  beforeEach( () => {
      browser.get('');
  });

  it('should have a title', () => {
      expect(browser.getTitle()).toEqual('My Angular2 App');
  });

  it('should have <nav>', () => {
      expect(element(by.css('sd-app sd-navbar nav')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Products', () => {
      expect(element(by.css('sd-app sd-navbar nav a:first-child')).getText()).toEqual('PRODUCTS');
  });

});
