import React from 'react';

//import { dumpLogs } from './Utils';

//import './BlogCard.css';
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    console.log('BlogCard Rendered');
    //dumpLogs(props);
	return (
        <div className={classes.NewBlogCard} key={props.id}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>Like Count: <span className={classes.likeCount}>{props.likeCount}</span></p>
            <button onClick={props.onLikeBtnClick}>Like</button>
        </div>
    )
}

export default BlogCard;