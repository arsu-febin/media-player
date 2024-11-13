import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../service/allAPI'



function History() {

  const[videoHistory,setVideoHistory]=useState([])
  console.log(videoHistory);
  
  useEffect(() => {
    getHistory()

  },[])

  const getHistory=async()=>{
    try{
      const result=await getAllHistory()
      // console.log(result.data);
      setVideoHistory(result.data)
       
    }
    catch(err){
      console.log(err);
      
    }
  }

  const delHistory=async(videId)=>{
    try{
      await deleteHistory(videId)
      getHistory()

    }
    catch(err){
      console.log(err);
      

    } 

  }
  return (
    <>
    <div className='container my-5'>
      

      <div className="d-flex justify-content-between">
        <h5 style={{color:'red'}}>Watch History</h5>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px'}} className='text-info'>Back to Home</Link>
      </div>

      <table className="table mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Date</th>
            <th ><i class="fa-solid fa-ellipsis"></i></th>
          </tr>         
        </thead>

        <tbody>

          {
            videoHistory.length>0?
            videoHistory?.map((item,index)=>(
            <tr key={item?.id}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.youtubeUrl}target='_blank'>{item?.youtubeUrl}</a></td>
            <td>{item?.formatedDate}</td>
            <td><button className='btn' onClick={()=>delHistory(item?.id)}><i class="fa-solid fa-trash" style={{color:'red'}}></i></button></td>
          </tr>
            ))
          :
          <div className='text-danger fw-bold fs-3'>Nothing to Display</div>


          }

            
        </tbody>

        </table>

          

      </div>

    
    
    
    
    </>
  )
}

export default History