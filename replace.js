const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/text-white\/70/g, 'text-gray-600 dark:text-white/70');
  content = content.replace(/text-white\/40/g, 'text-gray-500 dark:text-white/40');
  content = content.replace(/\btext-white\b(?!\/)/g, 'text-gray-900 dark:text-white');

  fs.writeFileSync(filePath, content);
}
console.log('Refactor completed.');
