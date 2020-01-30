import React, {useEffect} from 'react';
import {connect} from "react-redux";
import useReactRouter from 'use-react-router';

import {clearPost, getPost} from "../actions/dataActions";

interface Post {
    id: string;
    user_id: string;
    title: string;
    body: string;
    _links: object;
    message: string;
}

interface Data {
    post: Post;
    load: boolean;
}

const Post = (
    {
        data: {post, load},
        getPost,
        clearPost
    }:
        {
            data: Data,
            getPost: Function,
            clearPost: Function
        }) => {
    const {match}: any = useReactRouter();

    useEffect(() => {
        getPost(match.params.id);
        return () => {
            clearPost();
        }
    }, [getPost, match.params.id, clearPost]);

    if (load) {
        return (
            <>
                Loading...
            </>
        );
    } else {
        return (
            <>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>{post.message}</p>
            </>
        );
    }
};

const mapStateToProps = (state: any) => ({
    data: state.data
});

export default connect(mapStateToProps, {getPost, clearPost})(Post);
