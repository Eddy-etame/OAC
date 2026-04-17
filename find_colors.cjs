const fs = require('fs');
const path = require('path');
function find(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      find(p);
    } else if (p.endsWith('.jsx')) {
      const c = fs.readFileSync(p, 'utf8');
      const lines = c.split('\n');
      lines.forEach((l, i) => {
        if (/text-brand-[89]00/.test(l) && !/dark:text-/.test(l)) {
          console.log(`Brand Bug: Line ${i+1}: ${p} -> ${l.trim()}`);
        }
        if (/text-gray-[89]00/.test(l) && !/dark:text-/.test(l) && /<h|<p|<span/.test(l)) {
          console.log(`Gray Bug: Line ${i+1}: ${p} -> ${l.trim()}`);
        }
      });
    }
  });
}
find('src/app');
find('src/components');
