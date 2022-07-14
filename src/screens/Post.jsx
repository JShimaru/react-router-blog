import {useParams} from 'react-router-dom'

function Post(props){
    console.log(props)

    const { post_id } = useParams();

    const postNumber = parseInt(post_id) -1;
    console.log('postNumber: ',postNumber)

    const post = props[postNumber]

    return(

        <div className='post'>
            <div className='hero'>
                <img src={post.image} />
            </div>
            <div className='content'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export default Post