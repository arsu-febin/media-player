import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <div className='container mt-5 fw-100' style={{height:'300px'}}>

      <div className='row'>
        <div className='col-lg-5'>
       <h5> <i className="fa-solid fa-music"></i> &nbsp;
        Media Player</h5>
        <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorum aliquam est dolores! Facilis, magnam veniam. Dicta, doloribus voluptatibus. Illum omnis voluptates voluptatem maxime consequuntur molestiae maiores quasi facere veritatis!</p>
        <p className='mt-3 '>code is licensed by luminar</p>
        <p>currently v5.3.2</p>
        </div>

        <div className='col-lg-2 '>
          <h5>Links</h5>
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing</Link></div>
          <div><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link></div>
          <div><Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History</Link></div>
          


        </div>
        <div className='col-lg-2'>
          <h5>Guides</h5>
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link></div>
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>react bootstrap</Link></div>
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>watch router</Link></div>

        </div>

        <div className='col-lg-3'>
          <h5>Contact Us</h5>
          <div className='d-flex jutify-content-between'>
            <input type="text" className='form-control' placeholder='Enter email'/>
            <button className='btn btn-info ms-3'><i class="fa-solid fa-arrow-right"></i></button>
          </div>

          <div className='d-flex justify-content-between mt-3'>
            <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
            <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
            <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
            <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
            <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-github"></i></a>
            <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-solid fa-phone"></i></a>

          </div>


        </div>


        </div>
        <p className='text-center mt-4'>copyright @ july 2024 Batch, Media Player, Built eith React</p>
    </div>

  
  )
}

export default Footer