import React, {useEffect} from 'react';
import {Row, Col, Comment, Table} from 'antd';
import {connect} from "react-redux";

import {getComments, getPosts} from "../actions/dataActions";
import useReactRouter from "use-react-router";

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Body',
        dataIndex: 'body',
        key: 'body',
    },
];

interface Comments {
    id: string;
    post_id: string;
    name: string;
    email: string;
    body: string;
    _links: object;
}

interface Posts {
    posts: [];
    comments: Comments;
    load: boolean;
}

const Main = (
    {
        data: {posts, comments, load},
        getComments,
        getPosts
    }:
        {
            data: Posts,
            getComments: Function,
            getPosts: Function
        }) => {
    const {history}: any = useReactRouter();

    useEffect(() => {
        getPosts();
    });

    return <div>
        <Row>
            <Col span={18}>
                <Table
                    rowKey="id"
                    dataSource={posts}
                    columns={columns}
                    onRow={(record, rowIndex) => {
                        const {id}: any = record;
                        return {
                            onMouseEnter: event => {
                                getComments(id);
                            },
                            onClick: event => {
                                history.push(`/post/${id}`);
                            }
                        };
                    }}
                />
            </Col>
            <Col span={6}>
                {load &&
                <>
                    Loading...
                </>
                }
                {!load && <Comment
                    author={<span>{comments.name}</span>}
                    content={
                        <p>
                            {comments.body}
                        </p>
                    }
                />}
            </Col>
        </Row>
    </div>;
};

const mapStateToProps = (state: any) => ({
    data: state.data
});

export default connect(mapStateToProps, {getPosts, getComments})(Main);
