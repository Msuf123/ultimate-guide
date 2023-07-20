export default async function  req(url){
    return await fetch(url).then((res)=>{
        if(res.ok){
            return res.json()
        }
    }).catch(()=>{
        return 'Error'
    })
    
    
}