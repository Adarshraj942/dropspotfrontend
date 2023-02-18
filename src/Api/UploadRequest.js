import axios from "axios"

const API =axios.create({baseURL:"https://server.dropspot.in"})

export const uploadImage=(data)=>API.post("/upload",data)

export const uploadPost =(data)=>API.post("/product/add",data)