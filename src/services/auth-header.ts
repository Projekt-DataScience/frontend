import { CachedUser } from "./types";

export default function authHeader() {
    let user: CachedUser = JSON.parse(localStorage.getItem('user') || '{}');

    //return { headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJleHBpcmVzIjoxNjcxMjk2MTU0LjAwMjE5MzUsImNvbXBhbnlfaWQiOjEsInJvbGUiOiJ3b3JrZXIifQ.-BIqp4jASrgs18AnR5U9bGYX_zZlW4VGaCvhJqyjDAA` }};
    
  
    if (user && user.token) {
      return {headers: {Authorization: `Bearer ${user.token}` }};
    } else {
      return {};
    }
  }