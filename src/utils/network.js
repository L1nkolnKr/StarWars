import { HTTP, HTTPS } from "../constans/api";



export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);
        
        if(!res.ok){
            return false
        }

        return await res.json()
    } catch (error) {
        return false
    }
    
}

export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result
}


export const makeConcurrentRequest = async (url) =>{
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res=>res.json())
    }))

    return res
}


