const capitalize = require('./Capitalize.js');

describe('Check Capitalize...', () => {

    test('case_1', () => {
        expect(capitalize("mariam") ).toBe("Mariam");
    });

    test('case_1', () => {
        expect(() => {capitalize(12345);}).toThrow("The Value must be an alphabet");
    });

});