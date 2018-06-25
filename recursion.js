const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What word do you want me to analyze? ', (answer) => {
  permutations = getCombos(answer)
  
  console.log(`Different combos: ${permutations.length}. Permutations: ${permutations}`);

  rl.close();
});


function getCombos(string) {
  if (string.length < 2) return string;

  let permutations = [];

  for (var i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) != i) {
      continue;
    }

    let remainingString = string.slice(0,i) + string.slice(i + 1, string.length);

    for (var subPermutation of getCombos(remainingString)) {
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
}
