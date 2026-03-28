const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const prefixes = ['bg-', 'border-', 'from-', 'via-', 'to-', 'hover:bg-', 'hover:border-', 'ring-'];

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  prefixes.forEach(prefix => {
    const prefixSafe = prefix.replace(/:/g, '\\:');
    const regex = new RegExp(`(?<!dark:)\\b${prefixSafe}white\\/([0-9]+)`, 'g');
    content = content.replace(regex, (match, p1) => {
      return `${prefix}black/${p1} dark:${prefix}white/${p1}`;
    });
  });

  fs.writeFileSync(filePath, content);
}
console.log('Background and border refactor completed.');
