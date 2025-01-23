import { getFile } from "@/helpers/SERVHelpers";

export async function GET(req, context){
    const { params } = context;
    const file = getFile(params.slug.toString());
    
    if (!file) {
        return new Response(JSON.stringify({ error: "Post not found" }), {
            status: 404,
            headers: {
            "Content-Type": "application/json"
            }
        });
    }
    
    const postContent = await file.text();
    return new Response(JSON.stringify({ content: postContent }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}