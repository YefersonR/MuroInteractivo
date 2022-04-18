import './Post.css'
import image from '../google.png'

export function Post({post}){
    return(
        <div className='individualpost'>
            <div className='user-post'>
            <img src={image} alt="" />
            { post.nombre ?
            <div className='user-data'>
                <h2>{post.nombre}</h2>
                <h3>{post.email}</h3>
            </div>
            :
            <div className='user-data'>
                <h2>{post.email}</h2>
            </div>
            }
            </div>
            <p className='content'>{post.publicacion}</p>
        </div>
    )
}