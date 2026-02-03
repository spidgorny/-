#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const Mustache = require('mustache');

const md = new MarkdownIt();

console.log('🔄 Converting Markdown files to HTML...\n');

// Check if template.html exists
const templatePath = path.join(__dirname, 'template.html');
if (!fs.existsSync(templatePath)) {
    console.error('❌ template.html not found in current directory');
    process.exit(1);
}

// Read template
const template = fs.readFileSync(templatePath, 'utf8');

// Find all markdown files recursively
function findMarkdownFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            findMarkdownFiles(filePath, fileList);
        } else if (stat.isFile() && file.endsWith('.md')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Extract title from markdown content
function extractTitle(content, filename) {
    const lines = content.split('\n').slice(0, 20);
    for (const line of lines) {
        if (line.startsWith('# ')) {
            return line.substring(2).trim();
        }
    }
    return path.basename(filename, '.md');
}

// Convert markdown files
const markdownFiles = findMarkdownFiles(__dirname);
let count = 0;

markdownFiles.forEach(mdFile => {
    const content = fs.readFileSync(mdFile, 'utf8');
    const title = extractTitle(content, mdFile);
    const htmlContent = md.render(content);

    // Render template with mustache
    const output = Mustache.render(template, {
        TITLE: title,
        CONTENT: htmlContent
    });

    // Write output file
    const outputFile = mdFile.replace(/\.md$/, '.html');
    fs.writeFileSync(outputFile, output, 'utf8');

    console.log(`✅ Converted: ${path.relative(__dirname, mdFile)} -> ${path.relative(__dirname, outputFile)}`);
    count++;
});

console.log(`\n🎉 Done! Converted ${count} Markdown file(s) to HTML\n`);
console.log('💡 Tip: Open the HTML files in your browser to preview them');
