import axios from "axios";

export const ADD_PHOTO = "ADD_PHOTO";
export const FINISH_TODO = "FINISH_TODO";
export const FETCH_USER_INFO = "FETCH_USER_INFO";

export function addPhoto() {
 
}

export function finishTodo() {

}

export function fetchUserInfo() {
  return async function (dispatch) {
    try {
      //let album = await axios.get(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`);
      //let todos = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);

      return dispatch();
      
    } catch (error) {
      console.log(error);
    }
  };
}
