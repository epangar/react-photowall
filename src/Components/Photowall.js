import React, {Component} from 'react';
import Photo from './Photo.js';


function PhotoWall(props){
  return  <div className="photo-grid">              
            {props.post.map((post, index) => <Photo  key={index} post={post}/>)}
          </div>
}

// export class PhotoWall extends Component {
//   render(){
    
//   }
// }

export default PhotoWall