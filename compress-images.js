const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');

// Files to compress (large ones only)
const largeFiles = [
  'Exterior Building Facade.png',
  'Jogal Exterior Passage Area.png',
  'RECEPTION AREA(5).png',
  'MATERNITY ROOM.png',
  'NICU VIEW 4 copy.png',
];

async function compressImages() {
  console.log('Compressing large images...\n');

  for (const file of largeFiles) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file);

    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${file} - not found`);
      continue;
    }

    const stats = fs.statSync(inputPath);
    const originalSize = stats.size / (1024 * 1024);

    console.log(`Processing ${file} (${originalSize.toFixed(2)} MB)...`);

    try {
      await sharp(inputPath)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath + '.tmp');

      fs.renameSync(outputPath + '.tmp', outputPath);

      const newStats = fs.statSync(outputPath);
      const newSize = newStats.size / (1024 * 1024);
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

      console.log(`  -> ${newSize.toFixed(2)} MB (saved ${savings}%)\n`);
    } catch (err) {
      console.error(`  Error processing ${file}:`, err.message);
    }
  }

  console.log('Done!');
}

compressImages().catch(console.error);