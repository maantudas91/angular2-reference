describe('Products', () => {

  beforeEach( () => {
    browser.get('');
  });

  it('should explain the view', () => {
    expect(element(by.css('sd-app sd-products p')).isPresent()).toEqual(true);
  });

  // it('should have a list of computer scientists', () => {
  //   expect(element(by.css('sd-app sd-home ul')).getText())
  //     .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  // });
  //
  // it('should add a name to the list using the form', () => {
  //   element(by.css('sd-app sd-home form input')).sendKeys('Tim Berners-Lee');
  //   element(by.css('sd-app sd-home form button')).click();
  //   expect(element(by.css('sd-app sd-home ul')).getText())
  //     .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  // });
});
