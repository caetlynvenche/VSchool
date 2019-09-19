import React from 'react'
import BlogPost from './BlogPost'

const blog = [
    {
        title: "Man I am just putting in a lot of filler to see if it will wrap correctly",
        subtitle: "The answer was yes. And now I am testing this section to see if i get the same result.",
        info: "1 3 5"
    },
    {
        title: "It is now",
        subtitle: "a Tuesday",
        info: "2 4 6"
    }
]


const Body = () => {
    const posts = blog.map(theposts => {
        return (
            <BlogPost title={theposts.title} subtitle={theposts.subtitle} info={theposts.info} key={Math.random()}/>
        )
    })

    
    return (
        <main>
            {posts}
                <button className="olderPosts">Older Posts &rarr;</button>
            
        </main>
    )
}

export default Body