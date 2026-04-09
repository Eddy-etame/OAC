import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  { name: 'hero-bg.jpg', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80' },
  { name: 'about.jpg', url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80' },
  { name: 'nursery.jpg', url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80' },
  { name: 'primary.jpg', url: 'https://images.unsplash.com/photo-1588072432882-9cb19c16c009?auto=format&fit=crop&w=800&q=80' },
  { name: 'upper-primary.jpg', url: 'https://images.unsplash.com/photo-1600404291745-45a088e02c34?auto=format&fit=crop&w=800&q=80' },
  { name: 'teacher.jpg', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80' },
  { name: 'campus-loum.jpg', url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80' },
  { name: 'campus-tombel.jpg', url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80' }
];

const dir = path.join(process.cwd(), 'src', 'assets', 'images');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

console.log('Downloading images...');

let completed = 0;

images.forEach(img => {
  const filePath = path.join(dir, img.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(img.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${img.name}`);
      completed++;
      if (completed === images.length) {
        console.log('All images downloaded successfully!');
      }
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${img.name}: ${err.message}`);
  });
});
