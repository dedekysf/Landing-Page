const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, 'src', 'components'),
    path.join(__dirname, 'src', 'pages'),
    path.join(__dirname, 'src', 'styles')
];

const colorMap = {
    '#ffffff': 'var(--white)',
    '#fff': 'var(--white)',
    '#000000': 'var(--black)',
    '#000': 'var(--black)',
    '#18a87d': 'var(--secondary-green)',
    '#00d9a5': 'var(--brand-green)',
    '#035b60': 'var(--dark-green)',
    '#0a1629': 'var(--text-primary)',
    '#303742': 'var(--text-secondary)',
    '#fafbfc': 'var(--grey-01)',
    '#f7f8fa': 'var(--grey-02)',
    '#e8e8e8': 'var(--grey-03)',
    '#bdbdbd': 'var(--grey-04)',
    '#828282': 'var(--grey-05)',
    '#138eff': 'var(--blue)',
    '#7b61ff': 'var(--purple)',
    '#fc7f5b': 'var(--orange)',
    '#e6b566': 'var(--pastel-yellow)',

    // New variables added
    '#f4f5f7': 'var(--grey-08)',
    '#d1d5db': 'var(--grey-09)',
    '#edf2f7': 'var(--grey-10)',
    '#a0aec0': 'var(--grey-11)',
    '#cbd5e1': 'var(--grey-12)',
    '#4a5568': 'var(--text-tertiary)',
    '#718096': 'var(--text-quaternary)',
    '#148e69': 'var(--secondary-green-hover)',
    '#0d7052': 'var(--secondary-green-active)',
    '#129668': 'var(--secondary-green-border)',
    '#0d7a5f': 'var(--secondary-green-shadow)',
    '#fdfdfd': 'var(--grey-13)',
    '#fff1db': 'var(--light-orange)',
    '#e6fffa': 'var(--light-mint-2)',
    '#f6ad55': 'var(--orange-2)',
    '#222222': 'var(--dark-grey)',
    '#222': 'var(--dark-grey)'
};

function processFile(filePath) {
    if (filePath.endsWith('variables.css')) return; // skip the variables file itself!
    if (filePath.includes('HomeV2.tsx') || filePath.includes('InviteMoment.tsx')) return; // skip backups

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // We do a regex replace matching #hex
    // We only replace if we find it in our map
    const regex = /#([a-fA-F0-9]{3,6})\b/g;

    content = content.replace(regex, (match) => {
        const lowerMatch = match.toLowerCase();
        if (colorMap[lowerMatch]) {
            modified = true;
            return colorMap[lowerMatch];
        }
        return match;
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.css') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            processFile(fullPath);
        }
    }
}

for (const dir of targetDirs) {
    if (fs.existsSync(dir)) {
        traverse(dir);
    }
}
console.log('Color replacement complete.');
