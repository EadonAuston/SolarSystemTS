// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  let map = new Map();
  for (let asteroid of asteroids) {
    const { discoveryYear } = asteroid;
    if (map.get(discoveryYear) === undefined) {
      map.set(discoveryYear, 1);
    } else {
      map.set(discoveryYear, map.get(discoveryYear) + 1);
    }
  }
  let mostAsteroidsYear = 0;
  let mostAsteroidsCount = 0;
  for (const [year, count] of map.entries()) {
    if (count > mostAsteroidsCount) {
      mostAsteroidsYear = year;
      mostAsteroidsCount = count;
    }
  }
  return mostAsteroidsYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
