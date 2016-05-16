describe('Products', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should explain the view', () => {
    expect(element(by.css('sd-app sd-products p')).isPresent()).toEqual(true);
  });

  it('should have a list of products', () => {
    expect(element.all(by.css('sd-app sd-products li')).count())
      .toEqual(5);

    expect(element.all(by.css('sd-products li')).first().getText())
      .toEqual('BLACK+DECKER LST136W 40V Max Lithium String Trimmer');
  });
  //
  // it('should add a name to the list using the form', () => {
  //   element(by.css('sd-app sd-home form input')).sendKeys('Tim Berners-Lee');
  //   element(by.css('sd-app sd-home form button')).click();
  //   expect(element(by.css('sd-app sd-home ul')).getText())
  //     .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  // });
});
