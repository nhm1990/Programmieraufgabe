const expect = require('chai').expect;
const assert = require('chai').assert;
const { executeMain, getCustomer } = require('../src/main.js');

var foo = 'bar';

describe( "Function Tests", () => {
    it('execute all functions without errors', () => {
        //executeMain();
        getCustomer();
    });

    it('expect true', () => {
        expect(true).to.be.true;
    })

    it('expect true', () => {
        expect(foo).to.be.a('string');
        assert.equal(foo, 'bar', 'foo equal `bar`');
    })
});

