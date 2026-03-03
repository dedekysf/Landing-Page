import fs from 'fs';
import path from 'path';

const directory = './src';

// Regex to find CSS variable ending without a space before !important 
// e.g., var(--brand-green)!important or var(--brand-green) !important that got mangled 
const regex1 = /var\((--[\w-]+)\)!important/g;
const regex2 = /var\((--[\w-]+)\) !important/g; // ensure standard spacing
// Specifically if the replacement resulted in something like "var(--color)!important" or missing semicolon, we just find all `!important` and ensure they have a space before them.
const badImportant = /(var\(--[^)]+\))!important/g;

function walkSync(dir, filelist = []) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== 'assets' && file !== 'styles') {
                filelist = walkSync(filePath, filelist);
            }
        } else {
            if (file.endsWith('.css')) {
                filelist.push(filePath);
            }
        }
    });
    return filelist;
}

const files = walkSync(directory);
let updatedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Fix missing spaces before !important
    content = content.replace(/!important/g, " !important").replace(/\s+!important/g, " !important");

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        updatedFiles++;
        console.log(`Updated !important spacing in ${file}`);
    }
});

console.log(`Processed ${files.length} CSS files. Updated ${updatedFiles} files.`);
