import React from 'react';

const BlogPost = (props) => {
    return (
        <section>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>Posted by Start Bootstrap on {props.info}</p>
        </section>
    )
}

export default BlogPost;