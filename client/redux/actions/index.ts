import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import { ADDNEW_TODO } from './type';

const API_URL = 'http://localhost:8080';

export const addNewTodo = (data: string) => async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error: any) {
    console.log('Error while calling addNewTodo API', error.message);
  }
};

