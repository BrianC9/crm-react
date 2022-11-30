export async function getClients(){
    const response = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await response.json()
    console.log(resultado);
    return resultado;
}