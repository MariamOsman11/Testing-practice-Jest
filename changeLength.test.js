const stringLength= require('./changeLength.js');

test('String Length', () => {
   expect(typeof(stringLength("ABC"))).toBe("number");
   expect(stringLength("Binyam")).toBe(6);
   expect(() => {stringLength("");}).toThrow("The String Length is short");
   expect(() => {stringLength("ABCDEFGHIJK");}).toThrow("The String Length is long");
});

