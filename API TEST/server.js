const axios = require('axios')

const callApi1 = async ()=>{
    try{
        const {data} = await axios({
            url:"http://localhost:4000/first",
            method:"Get"
        })
        return data
    }
    catch(error){
        console.log("error occured",error.message)
    }
}
const callApi2 = async ()=>{
    try{
        const {data} = await axios({
            url:"http://localhost:4000/second",
            method:"Get"
        })
        return data
    }
    catch(error){
        console.log("error occured",error.message)
    }
}

setInterval(async()=>{
    const res1 = await callApi1()
    // const res2 = await callApi2()
    console.log("response",res1)
    console.log("response",res2)
},1000)
