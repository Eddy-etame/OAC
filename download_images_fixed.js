import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  // A dynamic, bright photo of kids running/playing at school for the hero
  { name: 'hero-bg.jpg', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80' },
  // High quality images for primary
  { name: 'primary.jpg', url: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80' },
  { name: 'upper-primary.jpg', url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80' }
];

const dir = path.join(process.cwd(), 'src', 'assets', 'images');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

console.log('Downloading fixed images...');

let completed = 0;

images.forEach(img => {
  const filePath = path.join(dir, img.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(img.url, response => {
    // Check if redirect
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, res2 => {
            res2.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${img.name} (from redirect)`);
                completed++;
            });
        });
    } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${img.name}`);
          completed++;
        });
    }
  }).on('error', err => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${img.name}: ${err.message}`);
  });
});
