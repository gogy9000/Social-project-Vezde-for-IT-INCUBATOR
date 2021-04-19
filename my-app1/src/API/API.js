import * as axios from "axios";

 const instance = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers: {
         "API-KEY": "6c4b7d1a-3825-42c9-9166-9315565e1f90"
     }
 });

 export const usersAPI = {
     getUsers(currentPage = 1, pageSize = 100) {
         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
             .then(response => {
                 return response.data;
             });
     },
     follow(userId) {
       return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
     },
     unfollow(userId) {
         return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
     }
 }