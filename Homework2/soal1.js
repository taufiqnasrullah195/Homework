const geometry = require('./geometry');

const rect = geometry.rectangle(10, 5);
console.log(`Rectangle area: ${rect.area}`);
console.log(`Rectangle perimeter: ${rect.perimeter}`);

const sq = geometry.square(5);
console.log(`Square area: ${sq.area}`);
console.log(`Square perimeter: ${sq.perimeter}`);