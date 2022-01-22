const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, cur) => Math.max(max, cur));
const minGrade = grades.reduce((min, cur) => Math.min(min, cur));

const numbers = [10, 20, 30, 40, 50];

const total = numbers.reduce((acc, currVal) => acc + currVal, 511);
