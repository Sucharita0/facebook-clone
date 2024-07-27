import Avatar from '@mui/material/Avatar';
import './image-layout.css';

export function ImageLayout(props)
{
    return(
        <div className="layout_container">
           <div className="image_lay">
           <Avatar className='image_layimg' src={props.image}/>
                        
           </div>

           <div className="image_text">{props.text}</div> 
        </div>
    )
}