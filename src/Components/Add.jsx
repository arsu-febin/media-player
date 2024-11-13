import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../service/allAPI';





function Add({setAddVideoResponse}) {

  const [videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})
  
 const[isInvalidUrl,setIsInvalidUrl]=useState(false)
  console.log(videoDetails);
  
  
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  

  const getEmbedUrl=(link)=>{

    // original video url -- https://www.youtube.com/watch?v=B2UBMTA57JI
    // embed url -- https://www.youtube.com/embed/B2UBMTA57JI

    if(link.includes("v=")){

      let videoId=link.split("v=")[1].slice(0, 11)
      setVideoDetails({...videoDetails,youtubeUrl: `https://www.youtube.com/embed/${videoId}`})
      console.log(videoId);
       setIsInvalidUrl(false)
      
    }

    else{
      setVideoDetails({...videoDetails,youtubeUrl: "" })

       setIsInvalidUrl(true)
    }

  }
   
  const handleUpload=async()=>{
    const{caption,imageUrl,youtubeUrl}=videoDetails
    if(caption && imageUrl && youtubeUrl){
      // console.log("Do API call");

      try{
        const result=await addVideo(videoDetails)
        setAddVideoResponse(result.data)
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success(`${result.data.caption} Added to your collection`)
          handleClose()
        }
        
      }
      catch(err){
        console.log(err);
        


      }
      
    }

    else{
      // alert("Please enter the field")


      // To apply effect for the text
      toast.warning("Enter the field completely")
      // toast.error("")
    //   toast.success("")
     }
  }
  

  return (
    <>
    <div className="d-flex align-items-center">
    <h5 className='text-warning'>Upload New Videos</h5>
    <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'>  +</button>
      
    </div>

{/* Modal  */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>

      <div className="border border-3 border-info rounded p-3">

    {/* Caption */}
      <FloatingLabel
        controlId="floatingInputcaption" label="Video Caption" className="mb-3">

          {/* ... -> spread operator. Using to add all values in the state */}
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Enter video caption" />
        
        
      </FloatingLabel>

     

      {/* Image */}
      <FloatingLabel
        controlId="floatingInputimage" label="Image Url" className="mb-3">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Enter image Url" />
      </FloatingLabel>

    {/* Youtube Url */}
    <FloatingLabel
        controlId="floatingInputurl" label="Youtube Url" className="mb-3">
        <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="text" placeholder="Enter Youtube Url" />
      </FloatingLabel>

      {
        isInvalidUrl && 
      <p className='text-danger'>Invalid Url</p>
      } 

      </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

      {/* how to convert opriginal video url to embedded url */}

     
      <ToastContainer position="top-right" autoClose={3000} theme="colored"

    />
    
    
    </>
  )
}

export default Add