import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

function Posts(props) {
    const [post, setPosts] = useState([])

    useEffect(() => {
        setPosts(props.postsData)
    },[]);

    const renderPost = () =>{
        return post.map((post) => {
            return(
                <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                image={post.image}
                />
            )
        })
    }


    return(
        <div className='posts'>
            {renderPost()}
        </div>
    )
}

export default Posts