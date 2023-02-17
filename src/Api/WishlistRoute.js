import axios from "axios"

const API =axios.create({baseURL:"http://ec2-35-77-227-175.ap-northeast-1.compute.amazonaws.com:5000"})

export const getWishlist=(data)=>API.post("/wishlist/get",data)

export  const addToWishlist=(data)=>API.post("/wishlist/add",data)

export  const removeFromWishlist=(data)=>API.post("/wishlist/remove",data)