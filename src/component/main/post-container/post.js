import { Diversity3 } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";

export function Post(props)
{
    return(
        <div>
            <Paper className="post-container">
                
                    <div className="post-header">
                        <Avatar src={props.userimg} alt="" className="post-pic"/>
                    
                    <div className="post-im">{props.username}</div>
                    </div>
                
                

               
                <div className="post-poster">
                   <img src={props.postimg} alt=""/>
                </div>
                <div className="like-counter">
                    <div className="like-im" >
                        <img src="https://www.pngall.com/wp-content/uploads/5/Like-Button-PNG-Pic.png" width="35px"/>
                    </div>
                    <div className="like-no">{props.like}</div>
                </div>

                    <div className="post-tab">
                        <div className="post-main">
                            <div className="main-im">
                                
                            <img src="https://icon-library.com/images/like-icon/like-icon-12.jpg" alt=""/>
                            </div>
                            <div className="last-pt">like</div>
                        </div>

                        <div className="post-main">
                        <div className="main-im">
                        <img src="https://icon-library.com/images/comment-icon-transparent/comment-icon-transparent-27.jpg" alt=""/>
                        </div>
                        <div className="last-pt">comment</div>
                        </div>

                        <div className="post-main">
                      <div className="main-im">
                      <img src="https://www.pngall.com/wp-content/uploads/2/Share-PNG-File.png" alt=""/>
                      </div>
                        <div className="last-pt">share</div>
                        </div>

                       
            </div>
            <div className="upload-par text">
                    <Avatar src="https://wallpaper.dog/large/20486428.jpg" className="upload-image tex"/>
                    <input type="text" className="upload-text" placeholder="write something here..."/>
                
                    </div>
                    </Paper>
                    </div>
    )
}
               