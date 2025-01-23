import { getFiles } from "@/helpers/SERVHelpers"

export async function GET(req){
    const posts = getFiles();
    return new Response(JSON.stringify(posts),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
}