import './layout.css';
import { Leftside } from './lettside/leftside';
import { Statusbar } from './middle/status-bar';
import { PostContainer } from './post-container/post-container';
import { Rightside } from './rightside/rightside';
import { UploadSection } from './upload/upload-section';

export function Layout(){
    return(
        <div className='main-container'>
            <div className='row'>
                <div className='col-3'>
                    <Leftside/>
                </div>
                <div className='col-6'>
                    <Statusbar/>
                    <UploadSection/>
                    <PostContainer/>
                </div>
                <div className='col-3'>
                    <Rightside/>
                </div>
            </div>
        </div>
    )
}