import Request from "../lib/kmlrequest";


const fetcher=async(url:any)=>{
    const {data}= await Request.get(url);
    console.log('kamal',data)
    // const res = await fetch(...args)
    // if(!res.ok) throw new Error("Failed to fetch");
    return data;

}

export default fetcher;