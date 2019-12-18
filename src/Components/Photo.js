import React, {Component} from 'react';

export class Photo extends Component {
  render(){
    const post = this.props.posts;

    return <figure key={post}> {post} </figure>
  }
}

export default Photo