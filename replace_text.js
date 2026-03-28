const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any text-white/XX that isn't preceded by dark:
  content = content.replace(/(?<!dark:)text-white\/([0-9]+)/g, (match, p1) => {
    const val = parseInt(p1, 10);
    if (val >= 60) return `text-gray-600 dark:text-white/${p1}`;
    if (val >= 40) return `text-gray-500 dark:text-white/${p1}`;
    return `text-gray-400 dark:text-white/${p1}`;
  });

  fs.writeFileSync(filePath, content);
}
console.log('Text refactor completed.');
