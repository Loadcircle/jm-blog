import { getFile } from "@/helpers/SERVHelpers";

export async function GET(req, context) {
    const { params } = context;
    const { slug } = await params;

    try {
        const postContent = getFile(slug.toString());

        if (!postContent) {
            return new Response(JSON.stringify({ error: "Post not found" }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }

        return new Response(JSON.stringify({ content: postContent }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}