# Vibe Sort

**vibe-sort** is a powerful and unique JavaScript library that allows you to sort numbers based on their "vibe." The `vibeScore` function assigns a score to numbers, reflecting their inherent "vibe quality," and the `orderByVibe` function sorts numbers in descending order of vibe scores.

## Features
- **vibeScore**: Assigns a "vibe score" to any number, reflecting positive, negative, mystical, or quirky properties.
- **orderByVibe**: Sorts an array of numbers based on their vibe scores, allowing you to easily determine which numbers have the best (or worst) vibes.
- Incorporates a variety of special conditions, including but not limited to:
  - **Prime numbers**
  - **Palindromes**
  - **Special sequences** (e.g., Fibonacci numbers)
  - **Lucky numbers** like 42, and more.

## Installation
You can install **vibe-sort** via npm:

```sh
npm install vibe-sort
```

## Usage
The library provides two core functions: `vibeScore` and `orderByVibe`. Below are some examples of how to use them.

### Example: Calculating Vibe Scores
Use `vibeScore` to calculate the vibe of individual numbers.

```javascript
const { vibeScore } = require('vibe-sort');

console.log(vibeScore(42));  // Output: 60 (because 42 is the answer to everything)
console.log(vibeScore(69));  // Output: 30 (meme vibes)
console.log(vibeScore(1007)); // Output: 35 (secret agent vibes)
```

### Example: Sorting by Vibe
Use `orderByVibe` to sort numbers in descending order of vibe.

```javascript
const { orderByVibe } = require('vibe-sort');

const numbers = [42, 13, 69, 8, 1007, -7];
const sorted = orderByVibe(numbers);
console.log(sorted); // Output: [ 1007, 69, 42, 8, 13, -7 ]
```

## Vibe Scoring Criteria
The `vibeScore` function considers a wide range of factors that contribute to a number's overall "vibe":
- **Prime Numbers**: Receive a significant vibe bonus.
- **Divisibility**: Numbers divisible by 7, 10, or 3 have enhanced vibes due to their mystical and harmonic properties.
- **Palindromes**: Numbers that read the same forward and backward have a naturally high vibe.
- **Special Numbers**: Special values like **42** (the answer to everything), numbers ending in **007** (secret agent vibes), and **69** (meme vibes) receive unique bonuses.
- **Negative Numbers**: Depending on their properties, they may contribute negatively to their vibe.

## License
This project is licensed under the **WTFPL**.

## Contributing
Contributions are welcome! If you have any new vibe-modifying criteria you’d like to propose, feel free to create an issue or submit a pull request.

## Running Tests
To run the tests, use:

```sh
npm test
```

Tests are written using **Mocha** and **Chai** to ensure that vibe calculations are correct and consistently reflect the true nature of number vibes.

## Acknowledgements
- Thanks to all developers who value the importance of vibes in numerical data.
- Special mention to **Mocha** and **Chai** for making the testing process seamless.

Enjoy the vibes! ✨

