const fs = require('fs');
const path = require('path');
function findHeadings(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      findHeadings(p);
    } else if (p.endsWith('.jsx')) {
      const content = fs.readFileSync(p, 'utf8');
      const matches = content.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/g);
      if (matches) {
        console.log(`\n--- ${f} ---`);
        matches.forEach(m => console.log(m.replace(/\n\s*/g, ' ')));
      }
    }
  });
}
findHeadings('src');
