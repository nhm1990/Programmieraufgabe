const expect = require('chai').expect;
const assert = require('chai').assert;
const { executeMain } = require('../src/main.js');

describe( "Function Main Caller", () => {
    it('run functions', () => {
        executeMain();
    })
});

