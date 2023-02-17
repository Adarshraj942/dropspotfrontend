import axios from "axios"

const API =axios.create({baseURL:"http://ec2-35-77-227-175.ap-northeast-1.compute.amazonaws.com:5000"})

export const uploadImage=(data)=>API.post("/upload",data)

export const uploadPost =(data)=>API.post("/product/add",data)