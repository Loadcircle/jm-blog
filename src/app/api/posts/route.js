const posts = [
    {
        "id": "1",
        "author": "Mark",
        "content": "blog 1 content is here",
    
    },
    
    {
        "id": "2",
        "author": "Mohamed",
        "content": "blog 2 content is here",
    
    },
    
    {
        "id": "3",
        "author": "Amine",
        "content": "blog 3 content is here",
    
    }

];

export async function GET(req){
    return new Response(JSON.stringify(posts),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
}