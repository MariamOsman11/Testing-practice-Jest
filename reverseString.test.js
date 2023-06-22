const reverseString  = require('./reverseString.js');

test('String',() => {
   expect((reverseString("ABC"))).toBe("CBA");
   expect(reverseString("Binyam")).toBe("mayniB");

});

