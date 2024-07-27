import Avatar from '@mui/material/Avatar';
export function RightLay(props){
    return(
       
        <div className="layout_contain">
        <div className="image_lai">
        <Avatar className='image_layim' src={props.image}/>
                     
        </div>

        <div className="image_tex">{props.text}</div> 
     </div>
    )
}