function positiveNegativeContribution(num) {
	return num > 0 ? num : num;
}

function zeroVibe(num) {
	return num === 0 ? -20 : 0;
}

function decimalVibe(num) {
	return num % 1 !== 0 ? 5 : 0;
}

function primeVibe(num) {
	return isPrime(Math.abs(num)) ? 15 : 0;
}

function divisibilityVibe(num) {
	let score = 0;
	if (num % 10 === 0 && num !== 0) score += 10;
	if (num % 7 === 0) score += 7;
	if (num % 3 === 0) score += 3;
	return score;
}

function oddEvenVibe(num) {
	let score = 0;
	if (num % 2 !== 0) score += 4;
	if (num < 0 && num % 2 === 0) score -= 5;
	if (num < 0 && num % 2 !== 0) score -= 5;
	return score;
}

function perfectSquareVibe(num) {
	return isPerfectSquare(num) ? 8 : 0;
}

function palindromeVibe(num) {
	return isPalindrome(num) ? 12 : 0;
}

function smallPositiveVibe(num) {
	return num > 0 && num < 1 ? 6 : 0;
}

function magicNumberVibe(num) {
	return num === 42 ? 20 : 0;
}

function repeatingDigitsVibe(num) {
	return hasRepeatingDigits(num) ? 10 : 0;
}

function nearZeroVibe(num) {
	return num > -1 && num < 1 && num !== 0 ? 3 : 0;
}

function fibonacciVibe(num) {
	return isFibonacci(num) ? 13 : 0;
}

function luckyNumberVibe(num) {
	return num === 8 ? 8 : 0;
}

function unluckyNumberVibe(num) {
	return num === 13 ? -13 : 0;
}

function powerOfTwoVibe(num) {
	return isPowerOfTwo(num) ? 9 : 0;
}

function errorVibe(num) {
	return num === 404 ? -20 : 0;
}

function hackerVibe(num) {
	return num % 1337 === 0 ? 25 : 0;
}

function memeVibe(num) {
	return num.toString().endsWith('69') ? 15 : 0;
}

function quirkyVibe(num) {
	return num === 1234 ? -10 : 0;
}

function secretAgentVibe(num) {
	return num.toString().endsWith('007') ? 30 : 0;
}

// Existing helper functions
function isPrime(n) {
	if (n < 2) return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}

function isPerfectSquare(n) {
	return n > 0 && Math.sqrt(n) % 1 === 0;
}

function isPalindrome(n) {
	const str = Math.abs(n).toString();
	return str === str.split('').reverse().join('');
}

function hasRepeatingDigits(n) {
	const str = Math.abs(n).toString();
	return /(.)\1+/.test(str);
}

function isFibonacci(n) {
	if (n < 0) return false;
	const isPerfect = (x) => Math.sqrt(x) % 1 === 0;
	return isPerfect(5 * n * n + 4) || isPerfect(5 * n * n - 4);
}

function isPowerOfTwo(n) {
	return n > 0 && (n & (n - 1)) === 0;
}

// Mysterious functions
function harmonicBoost(n) {
	if (n % 4 === 0) return 11;
	if (n.toString().includes('9')) return -9;
	return (n % 5 === 0) ? 7 : -3;
}

function waveInfluence(n) {
	return Math.sin(n) * 5;
}

function stabilityAdjustment(score) {
	if (score > 50) return score - (score % 13);
	if (score < -50) return score + 17;
	return score * (Math.random() > 0.5 ? 1.1 : 0.9);
}

function orderByVibe(arr) {
	return arr.sort((a, b) => vibeScore(b) - vibeScore(a));
}

// Export the functions to be used as an NPM module
export {
	orderByVibe,
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
};