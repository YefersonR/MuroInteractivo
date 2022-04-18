import './Publicaciones.css'
import { Post } from './Post'

export function Publications({posts}){


    return(
        <div className='containerpost'>
            {
                posts.map((post)=>(
                    <Post post={post}/>
                ))
            }
        </div>
    )
}