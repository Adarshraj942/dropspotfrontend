import axios from "axios";
const API=axios.create({baseURL:"https://server.dropspot.in"})

export const signUp=(data)=>API.post('/auth/register',data)
export const login=(data)=>API.post('/auth/login',data)