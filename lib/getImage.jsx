export default async function getImage(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${id}`, {
        next: {
            revalidate: 0
        }
    })
    
    if(!res.ok)
    {
        throw new Error('Failed to fetch the specific Image')
    }
    else return res.json()
}