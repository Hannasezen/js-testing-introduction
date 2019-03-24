const { generateText } = require('./util');

test('should output name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
  /*const text1 = generateText('', null);
  expect(text1).toBe(' (null years old)');
  const text2 = generateText();
  expect(text2).toBe('undefined (undefined years old)');*/
});
