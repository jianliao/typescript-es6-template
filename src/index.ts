import path from 'path';

console.log(path.resolve('.'));
console.log(path.resolve('..'));

function test(a: string) {
  console.log(a);
}

// test(1); will fail the typescript type checking
test('abc');
