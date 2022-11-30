export async function getClients(){
    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()
    console.log(result);
    return result;
}

export async function getClient(clientId){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${clientId}`)
    const result = await response.json()
    console.log(result);
    return result;
}

export async function updateClient(clientId, client){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${clientId}`,{
        method: "PUT",
        headers:
        {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(client)
    })
    const result = await response.json();
    console.log("Update Request",result);
}
export async function createClient(client){
    const response = await fetch(import.meta.env.VITE_API_URL,{
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(client)
    })
    const result = await response.json()
    console.log(result)
}
export async function checkEmailExist(email){
    
    const clients = await getClients()
    const exists = clients.some(client => client.email == email );
    return exists;
}
export async function deleteClient(clientId){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${clientId}`, {
        method:'DELETE'
     
    })
    const result = await response.json()
    console.log("eliminando",clientId)
}