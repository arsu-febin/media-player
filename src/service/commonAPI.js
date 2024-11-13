import axios from "axios";
import { Await } from "react-router-dom";

const commonAPI=async(httpMethod,url,reqbody)=>{
    
//     axios(config)
// // Send a POST request
// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });
    
    const reqConfig={
        method:httpMethod,
        url,
        data:reqbody
    }


    // API call
    return await axios(reqConfig).then(res=>{
        return res
    })
    .catch(err=>{
        return err
    })


}

export default commonAPI