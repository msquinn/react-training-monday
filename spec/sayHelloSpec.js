var sayHello = require("../src/sayHello.js");

describe('Greet',function(){
    it('concats Hello and a name',function(){
      var actual = sayHello.greet('Matt');
      var expected = "Hello, Matt";
      expect(actual).toEqual(expected);
  }),
  it('says Hello World when given no name',function(){
     var actual = sayHello.greet();
     var expected = "Hello, World!"
     expect(actual).toEqual(expected);
  });
});
