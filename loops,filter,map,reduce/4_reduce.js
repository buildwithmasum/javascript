// ============================================
// PART 1: map vs filter vs reduce - side by side
// ============================================

const nums = [1, 2, 3, 4, 5];

// MAP: transforms every item, returns a NEW array of the SAME length
const doubled = nums.map(function (n) {
  return n * 2; // each number is doubled
});
console.log('map result:', doubled); // [2, 4, 6, 8, 10]

// FILTER: keeps only items that pass a test, returns a new (possibly shorter) array
const evens = nums.filter(function (n) {
  return n % 2 === 0; // keep only even numbers
});
console.log('filter result:', evens); // [2, 4]

// REDUCE: combines all items into ONE single value
const sum = nums.reduce(function (acc, n) {
  // acc = the running total (the "box" we carry)
  // n   = the current number in the loop
  return acc + n; // add current number to the running total
}, 0); // 0 is the starting value of acc
console.log('reduce result:', sum); // 15


// ============================================
// PART 2: reduce - grouping students by grade
// ============================================

const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'David', grade: 'C' },
  { name: 'Eve', grade: 'B' },
];

const groupedByGrade = students.reduce(function (acc, student) {
  // acc is our "box" -- it starts as an empty object {}

  // if this grade doesn't have a key in the box yet, create one with an empty array
  if (!acc[student.grade]) {
    acc[student.grade] = [];
  }

  // add this student's name into the array for their grade
  acc[student.grade].push(student.name);

  // return the box so it carries forward to the next student
  return acc;
}, {}); // {} is the starting empty box

console.log('grouped by grade:', groupedByGrade);
// { A: ['Alice', 'Charlie'], B: ['Bob', 'Eve'], C: ['David'] }


// ============================================
// PART 3: reduce - counting votes (tally)
// ============================================

const votes = ['cat', 'dog', 'cat', 'cat', 'dog', 'fish'];

const tally = votes.reduce(function (acc, vote) {
  // acc[vote] || 0  --> if this vote isn't in the box yet, treat it as 0
  // then add 1 for the current vote
  acc[vote] = (acc[vote] || 0) + 1;

  return acc; // carry the updated box forward
}, {}); // start with an empty box

console.log('vote tally:', tally);
// { cat: 3, dog: 2, fish: 1 }


// ============================================
// PART 4: reduce - finding the max value
// ============================================

const scores = [42, 17, 89, 33, 76];

const maxScore = scores.reduce(function (acc, current) {
  // keep the bigger of the two: the running max, or the current number
  return Math.max(acc, current);
});
// note: no initial value passed here, so reduce starts
// with the first array element (42) as the initial "acc"

console.log('max score:', maxScore); // 89