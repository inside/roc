import expect from 'expect';

import addPadding from '../../../src/documentation/helpers/addPadding';

describe('documentation', () => {
    describe('helpers', () => {
        describe('addPadding', () => {
            it('should add correct spacing', () => {
                expect(addPadding('Hello', 6)).toBe('Hello ');
            });
        });
    });
});
