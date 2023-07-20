import React from 'react';
import useStyles from './styles';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    
    return (
        <div>Posts</div>
    )
}

export default Posts