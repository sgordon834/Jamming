import React from 'react';
import './Track.css';
// import TrackList from '../TrackList/TrackList';

class Track extends React.Component{

  renderAction() {
    if (this.props.isRemoval) {
      return <a className='Track-action' id={this.props.track.key}>-</a>;
    } else {
      return <a className='Track-action' id={this.props.track.key}>+</a>;
    }
  };

  render(){
    return (
      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a className="Track-action">{this.renderAction()}</a>
</div>
    )
  };
}

export default Track;


