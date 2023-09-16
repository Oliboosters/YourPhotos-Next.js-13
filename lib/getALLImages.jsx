export default async function getAllImages() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
        next: {
            revalidate: 0
        }
    })
    
    if(!res.ok)
    {
        throw new Error('Failed to fetch all Images')
    }
    else return res.json()
}