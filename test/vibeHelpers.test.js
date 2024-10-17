import { expect } from 'chai';
import {
	positiveNegativeContribution,
	zeroVibe,
	decimalVibe,
	primeVibe,
	divisibilityVibe,
	oddEvenVibe,
	perfectSquareVibe,
	palindromeVibe,
	smallPositiveVibe,
	magicNumberVibe,
	repeatingDigitsVibe,
	nearZeroVibe,
	fibonacciVibe,
	luckyNumberVibe,
	unluckyNumberVibe,
	powerOfTwoVibe,
	errorVibe,
	hackerVibe,
	memeVibe,
	quirkyVibe,
	secretAgentVibe,
	harmonicBoost,
	waveInfluence,
	stabilityAdjustment
} from '../vibeHelpers.js';

describe('vibeHelpers', () => {
	describe('positiveNegativeContribution', () => {
		it('should return the positive value for positive input', () => {
			expect(positiveNegativeContribution(100)).to.equal(100);
		});

		it('should return the negative value for negative input', () => {
			expect(positiveNegativeContribution(-100)).to.equal(-100);
		});
	});

	describe('zeroVibe', () => {
		it('should return -20 for zero', () => {
			expect(zeroVibe(0)).to.equal(-20);
		});

		it('should return 0 for non-zero input', () => {
			expect(zeroVibe(10)).to.equal(0);
		});
	});

	describe('decimalVibe', () => {
		it('should return 5 for a decimal number', () => {
			expect(decimalVibe(3.14)).to.equal(5);
		});

		it('should return 0 for a whole number', () => {
			expect(decimalVibe(7)).to.equal(0);
		});
	});

	describe('primeVibe', () => {
		it('should return 15 for a prime number', () => {
			expect(primeVibe(7)).to.equal(15);
		});

		it('should return 0 for a non-prime number', () => {
			expect(primeVibe(8)).to.equal(0);
		});
	});

	describe('divisibilityVibe', () => {
		it('should return 10 for a number divisible by 10', () => {
			expect(divisibilityVibe(20)).to.equal(10);
		});

		it('should return 7 for a number divisible by 7', () => {
			expect(divisibilityVibe(14)).to.equal(7);
		});

		it('should return 3 for a number divisible by 3', () => {
			expect(divisibilityVibe(9)).to.equal(3);
		});

		it('should return the sum for numbers divisible by multiple factors', () => {
			expect(divisibilityVibe(210)).to.equal(10 + 7 + 3);
		});
	});

	describe('oddEvenVibe', () => {
		it('should return 4 for an odd positive number', () => {
			expect(oddEvenVibe(5)).to.equal(4);
		});

		it('should return -5 for a negative even number', () => {
			expect(oddEvenVibe(-8)).to.equal(-5);
		});

		it('should return -1 for a negative odd number', () => {
			expect(oddEvenVibe(-7)).to.equal(-1);
		});
	});

	describe('perfectSquareVibe', () => {
		it('should return 8 for a perfect square', () => {
			expect(perfectSquareVibe(16)).to.equal(8);
		});

		it('should return 0 for a non-perfect square', () => {
			expect(perfectSquareVibe(15)).to.equal(0);
		});
	});

	describe('palindromeVibe', () => {
		it('should return 12 for a palindrome number', () => {
			expect(palindromeVibe(121)).to.equal(12);
		});

		it('should return 0 for a non-palindrome number', () => {
			expect(palindromeVibe(123)).to.equal(0);
		});
	});

	describe('smallPositiveVibe', () => {
		it('should return 6 for a positive number less than 1', () => {
			expect(smallPositiveVibe(0.5)).to.equal(6);
		});

		it('should return 0 for a number greater than or equal to 1', () => {
			expect(smallPositiveVibe(1)).to.equal(0);
		});
	});

	describe('magicNumberVibe', () => {
		it('should return 20 for the magic number 42', () => {
			expect(magicNumberVibe(42)).to.equal(20);
		});

		it('should return 0 for other numbers', () => {
			expect(magicNumberVibe(43)).to.equal(0);
		});
	});

	describe('repeatingDigitsVibe', () => {
		it('should return 10 for a number with repeating digits', () => {
			expect(repeatingDigitsVibe(111)).to.equal(10);
		});

		it('should return 0 for a number without repeating digits', () => {
			expect(repeatingDigitsVibe(123)).to.equal(0);
		});
	});

	describe('nearZeroVibe', () => {
		it('should return 3 for a number near zero but not zero', () => {
			expect(nearZeroVibe(0.1)).to.equal(3);
		});

		it('should return 0 for zero or a number not near zero', () => {
			expect(nearZeroVibe(0)).to.equal(0);
		});
	});

	describe('fibonacciVibe', () => {
		it('should return 13 for a Fibonacci number', () => {
			expect(fibonacciVibe(21)).to.equal(13);
		});

		it('should return 0 for a non-Fibonacci number', () => {
			expect(fibonacciVibe(22)).to.equal(0);
		});
	});

	describe('luckyNumberVibe', () => {
		it('should return 8 for the lucky number 8', () => {
			expect(luckyNumberVibe(8)).to.equal(8);
		});

		it('should return 0 for other numbers', () => {
			expect(luckyNumberVibe(9)).to.equal(0);
		});
	});

	describe('unluckyNumberVibe', () => {
		it('should return -13 for the unlucky number 13', () => {
			expect(unluckyNumberVibe(13)).to.equal(-13);
		});

		it('should return 0 for other numbers', () => {
			expect(unluckyNumberVibe(14)).to.equal(0);
		});
	});

	describe('powerOfTwoVibe', () => {
		it('should return 9 for a power of two', () => {
			expect(powerOfTwoVibe(8)).to.equal(9);
		});

		it('should return 0 for a non-power of two', () => {
			expect(powerOfTwoVibe(10)).to.equal(0);
		});
	});

	describe('errorVibe', () => {
		it('should return -20 for number 404', () => {
			expect(errorVibe(404)).to.equal(-20);
		});

		it('should return 0 for other numbers', () => {
			expect(errorVibe(405)).to.equal(0);
		});
	});

	describe('hackerVibe', () => {
		it('should return 25 for a number divisible by 1337', () => {
			expect(hackerVibe(2674)).to.equal(25);
		});

		it('should return 0 for other numbers', () => {
			expect(hackerVibe(1338)).to.equal(0);
		});
	});

	describe('memeVibe', () => {
		it('should return 15 for a number ending in 69', () => {
			expect(memeVibe(69)).to.equal(15);
		});

		it('should return 0 for other numbers', () => {
			expect(memeVibe(68)).to.equal(0);
		});
	});

	describe('quirkyVibe', () => {
		it('should return -10 for the number 1234', () => {
			expect(quirkyVibe(1234)).to.equal(-10);
		});

		it('should return 0 for other numbers', () => {
			expect(quirkyVibe(1235)).to.equal(0);
		});
	});

	describe('secretAgentVibe', () => {
		it('should return 30 for a number ending in 007', () => {
			expect(secretAgentVibe(1007)).to.equal(30);
		});

		it('should return 0 for other numbers', () => {
			expect(secretAgentVibe(1008)).to.equal(0);
		});
	});
});
