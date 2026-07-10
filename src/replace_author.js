const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./app');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace name
    content = content.replace(/Anuj Bhiya/g, 'Vikram Sharma');
    
    // Replace image
    content = content.replace(/\/anujbhiya\.png/g, 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg');
    content = content.replace(/https:\/\/credsettle\.com\/anujbhiya\.png/g, 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
