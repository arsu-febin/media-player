import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../service/allAPI'




function View(addVideoResponse) {

  const [allVideos,setAllVideos]=useState([])

  // state for to get the response of deleted video
  const [deleteResponse,setDeleteResponse]=useState("")

  // for viewing the all videos in the browser
  useEffect(() => {
    getVideos()

  },[addVideoResponse,deleteResponse])

  console.log(allVideos);

   // an extra function created for api call.because useEffect hook cannot call api directly on the state
  const getVideos=async()=>{
    try {
      const result=await getAllVideos()
      console.log(result.data);
      setAllVideos(result.data)
      
      
    } catch (err) {
      console.log(err);
      
    }
  }
  

  
  
    return(
      <>

    
      

      {/* Grid in react */}

      <Row className="border border-3 p-3">

        {
          allVideos.length>0 ?
          allVideos?.map(video =>(
            <Col key={video?.id} lg={4} md={6} sm={12}>
              <VideoCard displayData={video} setDeleteResponse={setDeleteResponse}/>
            </Col>
          ))
        
      
      :
      <div className='text-danger fs-3 fw-bold'>Nothing to dispaly</div>
      }
      </Row>


      </>
    
  )
   
  
}

export default View