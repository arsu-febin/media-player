import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, watchHistory } from '../service/allAPI';


function VideoCard({ displayData, setDeleteResponse, insideCategory }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // watch history api call apply in handleshow()
  const handleShow = async () => {
    const { caption, youtubeUrl } = displayData


    //  to get date and time of watching video
    const localTime = new Date()
    console.log(localTime);
    const formatedDate = localTime.toLocaleString()


    const videoHistory = { caption, youtubeUrl, formatedDate }

    try {
      await watchHistory(videoHistory)
    }
    catch (err) {
      console.log(err);

    }

    setShow(true)
  };

  const handleRemoveVideo = async (videoId) => {
    try {
      const result = await deleteVideo(videoId)
      console.log(result);
      setDeleteResponse(result.data)


    }
    catch (err) {
      console.log(err);

    }

  }

  const dragStarted = (e, videoId) => {
    console.log(`video card dragged with id${videoId}`);
    // to transfer data of video card to category
    e.dataTransfer.setData("videoId", videoId)


  }

  return (
    <>

      <Card draggable={true} onDragStart={(e) => dragStarted(e, displayData?.id)} className='mb-4'>
        <Card.Img onClick={handleShow} style={{ height: '180px', padding: '2px' }} variant="top" src={displayData?.imageUrl} />
        <Card.Body className='d-flex align-items-center justify-content-between'>
          <h5>{displayData?.caption}</h5>

          {
            !insideCategory &&
            <button onClick={() => handleRemoveVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash" style={{ color: 'red', fontSize: '20px' }}></i></button>



          }

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <iframe width="100%" height="337" src={`${displayData?.youtubeUrl}?autoplay=1`} title="KAUN TUJHE Full  Video | M.S. DHONI -THE UNTOLD STORY |Amaal Mallik Palak|Sushant Singh Disha Patani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>



      </Modal>


    </>

  )
}

export default VideoCard