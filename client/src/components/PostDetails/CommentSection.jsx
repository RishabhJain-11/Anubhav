import React, { useState, useRef } from 'react';
import { Typography, TextField, Button, Divider } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div style={{ width: '100%' }}>
          <Typography gutterBottom variant="h6">Engage in textual tango 💃🕺</Typography>
          <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div>
      </div>
      <Divider style={{ margin: '20px 0' }} />
      <div className={classes.commentsInnerContainer}>
        <Typography gutterBottom variant="h6">A mosaic of perspectives 🎨</Typography>
        {comments?.map((c, i) => (
          <Typography key={i} gutterBottom variant="subtitle1">
            <strong>{c.split(': ')[0]}</strong>
            {c.split(':')[1]}
          </Typography>
        ))}
        <div ref={commentsRef} />
      </div>
    </div>
  );
};

export default CommentSection;
