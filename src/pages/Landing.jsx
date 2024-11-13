import React from 'react'
import landingImage from '../assets/landingImage.gif' 
import { Link } from 'react-router-dom'
import settings from '../assets/settings.png'
import { Card } from 'react-bootstrap'
import category from '../assets/category.png'
 import history from '../assets/history.png'


function Landing() {
  return (
    <>
     {/* landing section */}
     <div className='container landingsection'>
     <div className='row align-items-center mt-5'>
     <div className='col-lg-5'>
     <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
     <p style={{textAlign:'justify'}} className='mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eius ex. Ut adipisci nam odit aperiam. Perspiciatis similique architecto tempora magni provident inventore adipisci, natus voluptatum, ipsam laborum unde sint? </p>
     <Link to={'/home'} className='btn btn-info mt-4'>Get Started </Link>
     </div>
     
     <div className='col'></div>
     <div className='col-lg-6'>
     <img src={landingImage} alt="" />
     </div>
     </div>
     </div>
     
     
   {/* features */}

  <div className="container mt-5">
    <div className="row">
      <div className="col-lg-4">

    {/* card 1 */}
     <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={settings}/>
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Users can Upload, View and Remove the videos
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>


      <div className="col-lg-4">

{/* card 2 */}
 <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={category} style={{height:'320px'}}/>
  <Card.Body>
    <Card.Title>Categorize Videos</Card.Title>
    <Card.Text>
      Users can categorize the video by drag and drop features
    </Card.Text>
    
  </Card.Body>
</Card>
  </div>



   <div className="col-lg-4"> 

{/* card 3 */}
  <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={history} style={{height:'320px'}}/>
  <Card.Body>
    <Card.Title>Managing History</Card.Title>
    <Card.Text>
      Users can manage the watch history of all  videos
    </Card.Text>
    
  </Card.Body>
</Card>
  </div> 

    </div>

    <div className='container w-80  mt-5 border border-white ' style={{height:'400px'}}>
      <div className="row">
        <div className="col-lg-7">
          <h3 className='mt-5 text-align-center text-warning ms-5'>Simple,Fast and Powerfull</h3>
          <p className='mt-3 ms-5 fs-5'>Play Everything: <span style={{fontSize:'17px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo libero commodi dolor tenetur necessitatibus molestias adipisci nostrum eveniet facilis inventore.</span></p>
          <p className='mt-3 ms-5 fs-5'>Categorize Video: <span style={{fontSize:'17px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo libero commodi dolor tenetur necessitatibus molestias adipisci nostrum eveniet facilis.</span></p>
          <p className='mt-3 ms-5 fs-5'>Managing History: <span style={{fontSize:'17px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo libero commodi dolor tenetur necessitatibus molestias adipisci nostrum eveniet facilis.</span></p>

        </div>

        <div className='col-lg-5'>

<iframe className='mt-5' width="500" height="315" src="https://www.youtube.com/embed/Ov0YGGSY6gY?si=Ikc2eASle_V8rhHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>
     </div>



    </div>
    

</div>

      
     </>

  )
} 

 export default Landing 