import fs from 'fs';
import path from 'path';

// Define the root storage directory for our JSON files
const DATA_DIR = path.join(process.cwd(), 'data');

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export function readData(fileName) {
  const filePath = path.join(DATA_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export function writeData(fileName, data) {
  const filePath = path.join(DATA_DIR, fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}
