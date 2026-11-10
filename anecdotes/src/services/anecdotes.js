const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await fetch(baseUrl)

  if (!response.ok) {
    throw new Error(`Failed to fetch anecdotes: ${response.status} ${response.statusText}`)
  }

  return await response.json()
}
const save=async(content)=>{
  const response =await fetch(baseUrl,{
   method:"POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({content,votes:0})
  })
  if(!response.ok){
        throw new Error(`Failed to post  anecdotes: ${response.status} ${response.statusText}`)

  }
 
  return await response.json()
}
 const update=async(anecdote,id)=>{
    const response=await fetch(`${baseUrl}/${id}`,{
      method:"PUT",
      headers:{
        'Content-Type': 'application/json'
        
      },
      body:JSON.stringify(anecdote)     
     
    })
    return response.json()
  }
  const remove=async(id)=>{
    const respponse=await fetch(`${baseUrl}/${id}`,{
      method:"DELETE",
     
    })
    if (!respponse.ok){
    throw new Error(
      `Failed to delete anecdote: ${response.status} ${response.statusText}`
    )
  }

      }
export default { getAll,save,update,remove}
