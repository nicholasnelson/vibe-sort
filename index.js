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
} from './vibeHelpers.js';

function vibeScore(num) {
	// Some helpers will run forever on infinite numbers. Plus, infinite numbers are cool.
	if (!isFinite(num)) {
		return num === Infinity ? 1000 : -1000;
	}

	let score = 0;
	score += positiveNegativeContribution(num);
	score += zeroVibe(num);
	score += decimalVibe(num);
	score += primeVibe(num);
	score += divisibilityVibe(num);
	score += oddEvenVibe(num);
	score += perfectSquareVibe(num);
	score += palindromeVibe(num);
	score += smallPositiveVibe(num);
	score += magicNumberVibe(num);
	score += repeatingDigitsVibe(num);
	score += nearZeroVibe(num);
	score += fibonacciVibe(num);
	score += luckyNumberVibe(num);
	score += unluckyNumberVibe(num);
	score += powerOfTwoVibe(num);
	score += errorVibe(num);
	score += hackerVibe(num);
	score += memeVibe(num);
	score += quirkyVibe(num);
	score += secretAgentVibe(num);

	score += harmonicBoost(num);
	score += waveInfluence(num);
	score = stabilityAdjustment(score);

	return score;
}

function orderByVibe(arr) {
	return arr.sort((a, b) => vibeScore(b) - vibeScore(a));
}

export {
	vibeScore,
	orderByVibe
};