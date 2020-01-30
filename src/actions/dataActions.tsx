import axios from 'axios';
import {Dispatch} from 'redux';

import {GET_POSTS, GET_COMMENTS, GET_POST, LOAD_DATA, CLEAR_POST, ERROR_POST} from './types';

const token = '?_format=json&access-token=s2rEbwTDxh1jZC11u-z5Zf1vi9jw63v1iI4N';

export const getPosts = () => (dispatch: Dispatch) => {
    axios
        .get(`/posts${token}`)
        .then(res => {
                if (res.data._meta.success) {
                    dispatch({
                        type: GET_POSTS,
                        payload: res.data.result
                    })
                }
            }
        )
        .catch(err =>
            console.log('error', err)
        );
};

export const getComments = (id: string) => (dispatch: Dispatch) => {
    dispatch(Load());
    axios
        .get(`/comments/${id}${token}`)
        .then(res => {
            console.log(res)
                dispatch({
                    type: GET_COMMENTS,
                    payload: res.data.result
                })
            }
        )
        .catch(err =>
            console.log('error', err)
        );
};

export const getPost = (id: string) => (dispatch: Dispatch) => {
    dispatch(Load());
    axios
        .get(`/posts/${id}${token}`)
        .then(res => {
                if (res.data._meta.success) {
                    dispatch({
                        type: GET_POST,
                        payload: res.data.result
                    })
                }
                else {
                    dispatch({
                        type: ERROR_POST,
                        payload: res.data.result
                    })
                }
            }
        )
        .catch(err =>
            console.log('error', err)
        );
};

export const Load = () => {
    return {
        type: LOAD_DATA
    };
};

export const clearPost = () => (dispatch: Dispatch) => {
    dispatch({type: CLEAR_POST})
};