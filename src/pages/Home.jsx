import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {

  const [addVideoResponse, setAddVideoResponse] = useState("")
  const [deleteVideoCategoryResponse, setDeleteVideoCategoryResponse] = useState("")
  const [deleteVideoViewResponse, setDeleteVideoViewResponse] = useState("")

  return (
    <>

      <div className="container m-5 d-flex justify-content-between">

        <Add setAddVideoResponse={setAddVideoResponse} />
        <Link to={'/history'} className='text-warning fs-5 fw-bold' style={{ textDecoration: 'none' }}>Watch History</Link>

      </div>

      <div className="row m-5">
        <div className="col-lg-6 ">
          <h3 className='text-info'>All Videos</h3>
          <View addVideoResponse={addVideoResponse} deleteVideoCategoryResponse={deleteVideoCategoryResponse} setDeleteVideoViewResponse={setDeleteVideoViewResponse} />
        </div>

        <div className="col-lg-6">
          <Category setDeleteVideoCategoryResponse={setDeleteVideoCategoryResponse} deleteVideoViewResponse={deleteVideoViewResponse} />

        </div>


      </div>



    </>

  )
}

export default Home