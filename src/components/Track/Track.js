import React from 'react';
import './Track.css';
// import TrackList from '../TrackList/TrackList';

class Track extends React.Component{
  constructor(props){
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(e) {
    this.props.onAdd(this.props.track);
  }

removeTrack(e) {
    this.props.onRemove(this.props.track);
}

  renderAction() {
    if (this.props.onAdd) {
        return <a className="Track-action" onClick={this.addTrack}>+</a>
    }
    return <a className="Track-action" onClick={this.removeTrack}>-</a>
}


  render(){
    return (
      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  {this.renderAction()}
</div>
    )
  };
}

export default Track;


