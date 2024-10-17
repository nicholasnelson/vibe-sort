import { expect } from 'chai';
import { vibeScore, orderByVibe } from '../index.js';


describe('vibeScore', () => {
	it('should return 1000 for positive Infinity', () => {
		expect(vibeScore(Infinity)).to.equal(1000);
	});

	it('should return -1000 for negative Infinity', () => {
		expect(vibeScore(-Infinity)).to.equal(-1000);
	});
});

describe('orderByVibe', () => {
	it('should sort numbers by their vibe score in descending order', () => {
		const numbers = [42, 13, 69, 8, 1007, -7];
		const sorted = orderByVibe(numbers);
		expect(sorted[0]).to.equal(1007); // Secret agent boost should make 1007 the highest
		expect(sorted[sorted.length - 1]).to.equal(-7); // Negative number should have the lowest vibe score
	});

	it('should handle an array with a single element', () => {
		const numbers = [42];
		const sorted = orderByVibe(numbers);
		expect(sorted).to.deep.equal([42]);
	});

	it('should handle an empty array', () => {
		const numbers = [];
		const sorted = orderByVibe(numbers);
		expect(sorted).to.deep.equal([]);
	});
});
