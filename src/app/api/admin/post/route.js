import { saveFile } from '@/helpers/SERVHelpers';

export async function POST(req){
    try {
        const body = await req.json();
        const { fileName, content } = body;
        console.log(fileName, content);

        const filePath = saveFile(fileName, content);
        
        return new Response(JSON.stringify({ message: 'File saved successfully.', filePath, fileName }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to save file.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function PUT(req) {
    try {
        const body = await req.json();
        const { fileName, newContent } = body;
        console.log(fileName, newContent);
        //TODO : add some logic to update the file content
        //this will be hanlde by DB
        const filePath = saveFile(fileName, newContent);

        return new Response(JSON.stringify({ message: 'File updated successfully.', filePath, fileName }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to update file.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json();
        const { fileName } = body;
        console.log(fileName);
        //TODO : add some logic to delete the file
        //this will be hanlde by DB
        deleteFile(fileName);

        return new Response(JSON.stringify({ message: 'File deleted successfully.', fileName }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to delete file.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}