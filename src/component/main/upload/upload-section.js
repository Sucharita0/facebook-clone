import { Avatar, Paper } from "@mui/material";
import './upload-section.css';
export function UploadSection()
{
    return(
        <div>
            <Paper className="upload-container">
            
            
                <div className="upload-par">
                    <Avatar src="https://wallpaper.dog/large/20486428.jpg" className="upload-image"/>
                    <input type="text" className="upload-text" placeholder="write something here..."/>
                
            </div>

            <div className="upload-chi">
                <div className="upload-tabs">
                   <img src="https://static.vecteezy.com/system/resources/previews/005/260/416/original/live-icon-live-stream-video-news-symbol-free-vector.jpg" className="video-image"/>
                   
                    <div className="a1">live video </div>
                </div>
                <div className="upload-tabs">
                    <img src="https://icon-library.com/images/video-file-icon/video-file-icon-15.jpg"className="video-image1"/>
                        <div className="a2">photo video</div>
                </div>
                <div className="upload-tabs">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.baJgAzbanFoKdGA8XnG7qAHaHa?rs=1&pid=ImgDetMain" className="video-image2"/>
                        <div className="a3">feeling activity</div>
                </div>
            </div>

            </Paper>
                              
        </div>
    )
}