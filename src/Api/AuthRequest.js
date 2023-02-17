import axios from "axios";
const API=axios.create({baseURL:"http://ec2-35-77-227-175.ap-northeast-1.compute.amazonaws.com:5000"})

export const signUp=(data)=>API.post('/auth/register',data)
export const login=(data)=>API.post('/auth/login',data)