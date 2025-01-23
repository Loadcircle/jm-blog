import fs from 'fs';
import path from 'path';

export const saveFile = (fileName, content) => {
    if (!fileName || typeof fileName !== 'string') {
        throw new Error('Invalid file name');
    }

    if (!content || typeof content !== 'string') {
        throw new Error('Invalid content');
    }

    const filePath = path.join(process.cwd(), 'postsMarkdowns', `${fileName}.md`);

    try {
        // Create folder if it doesn't exist
        fs.mkdirSync(path.dirname(filePath), { recursive: true });

        // Write file content
        fs.writeFileSync(filePath, content);

        return filePath;
    } catch (error) {
        throw new Error(`Failed to save file: ${error.message}`);
    }
};

export const deleteFile = (fileName) => {
    if (!fileName || typeof fileName !== 'string') {
        throw new Error('Invalid file name');
    }

    const filePath = path.join(process.cwd(), 'postsMarkdowns', `${fileName}.md`);

    try {
        fs.unlinkSync(filePath);

        return filePath;
    } catch (error) {
        throw new Error(`Failed to delete file: ${error.message}`);
    }
};

export const getFiles = () => {
    const postsDir = path.join(process.cwd(), 'postsMarkdowns');

    try {
        const files = fs.readdirSync(postsDir);

        return files.map((file) => file.replace('.md', ''));
    } catch (error) {
        throw new Error(`Failed to get files: ${error.message}`);
    }
};

export const getFile = (fileName) => {
    if (!fileName || typeof fileName !== 'string') {
        throw new Error('Invalid file name');
    }

    const filePath = path.join(process.cwd(), 'postsMarkdowns', `${fileName}.md`);

    try {
        const content = fs.readFileSync(filePath, 'utf8');

        return content;
    } catch (error) {
        throw new Error(`Failed to get file content: ${error.message}`);
    }
};