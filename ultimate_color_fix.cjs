const fs = require('fs');
const path = require('path');

function fix(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      fix(p);
    } else if (p.endsWith('.jsx')) {
      let content = fs.readFileSync(p, 'utf8');
      
      // Match className="..." or className={'...'} 
      // We will look for standard className="<string>" primarily, 
      // but also className={\`<string>\`}
      
      const regex1 = /className=(["'])([\s\S]*?)\1/g;
      const regex2 = /className=\{`([\s\S]*?)`\}/g;
      
      let changed = false;
      
      function replacer(match, qOrNothing, cls) {
        let ncls = cls;
        // Fix text-gray-900 or 800
        if (/(text-gray-800|text-gray-900)/.test(ncls) && !/dark:text-/.test(ncls)) {
          ncls = ncls + ' dark:text-gray-100';
        }
        // Fix text-brand-900 or 800
        if (/(text-brand-800|text-brand-900|text-brand-950)/.test(ncls) && !/dark:text-brand-/.test(ncls)) {
          ncls = ncls + ' dark:text-brand-400';
        }

        if (ncls !== cls) {
          changed = true;
          if (match.startsWith("className={`")) {
             return `className={\`${ncls}\`}`;
          }
          return `className=${qOrNothing}${ncls}${qOrNothing}`;
        }
        return match;
      }

      let newc = content.replace(regex1, replacer);
      newc = newc.replace(regex2, (match, cls) => replacer(match, "", cls));

      if (changed) {
        fs.writeFileSync(p, newc);
        console.log("Fixed " + p);
      }
    }
  });
}

fix('src/components');
fix('src/app');
