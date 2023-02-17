import axios from "axios";
const API=axios.create({baseURL:"http://ec2-35-77-227-175.ap-northeast-1.compute.amazonaws.com:5000"})

export const getAllProducts=()=>API.get('/product/getproducts')
export const getProduct=(id)=>API.get(`/product/${id}`)
export const uploadCsv=(data)=>API.post('/product/addbulk',data)