export default async function getUser(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
    next: {
      revalidate: 0
    }
  })
  
  if(!res.ok)
  {
    throw new Error('Failed to fetch User Data')
  }
  else return res.json()
}