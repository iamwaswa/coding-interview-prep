const minStepsToOne = (n: number): number => {

  const traverse = (current: number): number => {
    if (current === 1) {
      return 0;
    }

    // subtract 1
    let option = traverse(current - 1);

    // divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3);
      option = Math.min(option, divide3);
    }

    // divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2);
      option = Math.min(option, divide2);
    }

    return 1 + option;
  }

  return traverse(n);
}

// 1) Create cache
// 2) Check cache
// 3) Write to cache

const minStepsToOneMemo = (n: number): number => {
  const cache = {};

  const traverse = (current: number): number => {
    if (current in cache) {
      return cache[current];
    }
    if (current === 1) {
      return 0;
    }

    // subtract 1
    let option = traverse(current - 1);

    // divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3);
      option = Math.min(option, divide3);
    }

    // divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2);
      option = Math.min(option, divide2);
    }

    cache[current] = 1 + option;
    return 1 + option;
  }

  return traverse(n);
}

const minStepsToOneTab = (n: number): number => {
  const table = new Array(n + 1);
  table[1] = 0;

  for (let i = 2; i < table.length; i++) {
    // subtract 1
    let option = table[i - 1];

    // divide by 3
    if (i % 3 === 0) {
      let divide3 = table[i / 3];
      option = Math.min(option, divide3);
    }

    // divide by 2
    if (i % 2 === 0) {
      let divide2 = table[i / 2];
      option = Math.min(option, divide2);
    }

    table[i] = 1 + option;
  }

  return table[n];
}

console.time("RECURSION: ");
console.log(minStepsToOne(600));
console.timeEnd("RECURSION: ");

console.time("MEMOIZATION: ");
console.log(minStepsToOneMemo(600));
console.timeEnd("MEMOIZATION: ");

console.time("TABULATION: ");
console.log(minStepsToOneTab(600));
console.timeEnd("TABULATION: ");

// * If we can make the cache or table persistent
// * the below calls will be faster 

console.time("MEMOIZATION MANY: ");
for (let i = 0; i < 1000; i++) {
  minStepsToOneMemo(600);
}
console.timeEnd("MEMOIZATION MANY: ");


console.time("TABULATION MANY: ");
for (let i = 0; i < 1000; i++) {
  minStepsToOneTab(600);
}
console.timeEnd("TABULATION MANY: ");
