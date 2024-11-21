import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { addVideo, getAllVideos, getSingleCategory, updateCategory } from '../service/allAPI'




function View({ addVideoResponse, deleteVideoCategoryResponse ,setDeleteVideoViewResponse}) {

  const [allVideos, setAllVideos] = useState([])

  // state for to get the response of deleted video
  const [deleteResponse, setDeleteResponse] = useState("")

  // for viewing the all videos in the browser
  useEffect(() => {
    getVideos()
    console.log('useEffect called');
    

  }, [addVideoResponse,deleteResponse,deleteVideoCategoryResponse])

  console.log(allVideos);

  // an extra function created for api call.because useEffect hook cannot call api directly on the state
  const getVideos = async () => {
    try {
      const result = await getAllVideos()
      console.log(result.data);
      setAllVideos(result.data)


    } catch (err) {
      console.log(err);

    }
  }


  const dragOverView = (e) => {
    e.preventDefault()
  }

  const dropCategoryVideo = async (e) => {
    const { videoDetails, categoryId } = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(videoDetails, categoryId);

    try {
      const { data } = await getSingleCategory(categoryId)
      console.log(data);

      const updatedCategoryVideoList=data.allVideos.filter(item=>item.id != videoDetails.id)
      console.log(updatedCategoryVideoList);
      
      const {id,categoryName}=data
      const categoryResult=await updateCategory(id,{id,categoryName,allVideos:updatedCategoryVideoList})
      setDeleteVideoViewResponse(categoryResult.data)
      await addVideo(videoDetails)
      getVideos()

    }
    catch (err) {
      console.log(err);

    }
  }


  return (
    <>




      {/* Grid in react */}
    
      
      <Row droppable={true} onDrop={(e) => dropCategoryVideo(e)} onDragOver={(e) => dragOverView(e)} className="border border-3 p-3">

        {
          allVideos.length > 0 ?

            allVideos?.map(video => (
              <Col key={video?.id} lg={4} md={6} sm={12}>
                <VideoCard displayData={video} setDeleteResponse={setDeleteResponse} />
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