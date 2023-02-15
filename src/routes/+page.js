/** @type {import('./$types').PageLoad} */
export async function load({ params }){
    const url = "https://newsapi.org/v2/everything?q=web+developer&apiKey=66d3ddae54b6461891255aa61cb390c7"
    const res = await fetch(url)
    const items = await res.json();
    return { items };
}