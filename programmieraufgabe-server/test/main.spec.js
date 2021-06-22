const expect = require('chai').expect;
const assert = require('chai').assert;
const { executeMain,    
        sumNumber,
        numberHasMaxLength,
        checkIsPalindrom,
        reverseNumber,
        palindrome  } = require('../src/main.js');

var foo = 'bar';

describe( "Function Tests", () => {
    it('execute all functions without errors', () => {
        executeMain();
    });

    it('returns 7 when adding 3 + 4', () => {
        expect(sumNumber(3,4)).to.eq(7);
    });

    it('returns 81 when passing 18', () => {
        expect(reverseNumber(18)*1).to.eq(81);
    });

    it('returns 3661 when passing 1663', () => {
        expect(reverseNumber(1663)*1).to.eq(3661);
    });

    it('returns true when number 1000000001 has max length', () => {
        expect(numberHasMaxLength(1000000001)).to.be.true;
    });

    it('returns false when number 10000000 has max length', () => {
        expect(numberHasMaxLength(10000000)).to.be.false;
    });

    it('checkIsPalindrom(282) = true', () => {
        expect(checkIsPalindrom(282)).to.be.true;
    });

    it('checkIsPalindrom(281) = false', () => {
        expect(checkIsPalindrom(281)).to.be.false;
    });

    it('returns 81 when passing 18', () => {
        expect(checkIsPalindrom(281)).to.be.false;
    }); 

    it('palindrom 28 eq 121', () => {
        expect(palindrome(28)).to.eq(121);
    }); 

    it('palindrom 51 eq 66', () => {
        expect(palindrome(51)).to.eq(66);
    }); 
    
    it('palindrom 11 eq 11', () => {
        expect(palindrome(11)).to.eq(11);
    }); 

    it('palindrom 607 eq 4444', () => {
        expect(palindrome(607)).to.eq(4444);
    }); 

    it('palindrom 196 eq -1', () => {
        expect(palindrome(196)).to.eq(-1);
    }); 
});

