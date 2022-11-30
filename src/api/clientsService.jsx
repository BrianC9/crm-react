import { json } from "react-router-dom";

export async function getClients(){
    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()
    console.log(result);
    return result;
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

export async function deleteClient(clientId){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${clientId}`, {
        method:'DELETE'
        
    })
    const result = await response.json()
    console.log(result)
}