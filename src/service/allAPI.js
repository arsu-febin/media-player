import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url"

// save video
// save video api calls by Add.jsx

export const addVideo=async(video)=>{

    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}


// fetch video api call

export const getAllVideos=async(video)=>{

    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}


// API call for deleting a video card

export const deleteVideo=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
}


// API call for watch/save history
export const watchHistory=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// API call for get history
export const getAllHistory=async()=>{

    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// API call for delete history

export const deleteHistory=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}


// API call for add category
export const addCategory=async(categoryDetails)=>{

    return await commonAPI("POST",`${SERVER_URL}/allCategory`,categoryDetails)
}

// API call for get category
export const getAllCategory=async()=>{

    return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")
}

// API call for delete category
export const deleteCategory=async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allCategory/${categoryId}`,{})
}

// API call for get a single video id from allVideos file of dropped video
export const getSingleVideo=async(videoId)=>{

    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")
}

// API call for updating category
export const updateCategory=async(categoryId,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allCategory/${categoryId}`,categoryDetails)
    
}

// API call for get  single video from category

export const getSingleCategory=async(categoryId)=>{

    return await commonAPI("GET",`${SERVER_URL}/allCategory/${categoryId}`,"")
}