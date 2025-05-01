import archiver from 'archiver';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'dist');
const outputPath = path.join(__dirname, '..', 'website-build.zip');

// Create output file stream
const output = fs.createWriteStream(outputPath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

output.on('close', () => {
  console.log(`Archive created successfully! Size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved to: ${outputPath}`);
});

archive.on('error', (err) => {
  throw err;
});

// Pipe archive data to the output file
archive.pipe(output);

// Add the dist directory contents to the archive
archive.directory(distPath, false);

// Finalize the archive
archive.finalize();