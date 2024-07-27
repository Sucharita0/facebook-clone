

import { Post } from './post';
import './post-container.css';

export function PostContainer()
{


   
    const categories =[
        {
            id:1,
            user_img:"https://wallpapercave.com/wp/wp5101173.jpg",
            user_name:"Kriti Sen",
            
            post_img:"https://tse1.mm.bing.net/th/id/OIP.A7G5EIOra0VRpTEmXfvN_wHaE8?rs=1&pid=ImgDetMain",
            like:34
        },
            {
            id:2,
            user_img:"https://tse3.mm.bing.net/th/id/OIP.-El_EAlJBnx1unD_xj5miAHaJQ?w=195&h=244&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            user_name:"Rita Sen",
            
            post_img:"https://tse3.mm.bing.net/th/id/OIP.FYaGTz5wWOelh3kkzEFdSwHaEo?rs=1&pid=ImgDetMain",
            like:27
        }
    ];
        

   
   

    
    return(
        <div className='container'>
            {
                categories.map((item)=>{
                    
                    return <Post key={item.id} id={item.id} userimg={item.user_img} username={item.user_name} postimg={item.post_img} like={item.like} />
                })
            }
            
            
            
        </div>
    )
}