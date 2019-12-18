import React, {Component} from 'react';
import Photo from './Photo.js'

export class PhotoWall extends Component {
  render(){
    return  <div>
              
                {this.props.posts.map((post, index) => <Photo alt="" key={index} post={post}/>)}
              
              
            </div>
  }
}

export default PhotoWall