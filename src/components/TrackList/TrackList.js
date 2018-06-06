import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

class TrackList extends React.Component {
  render() {
      return (
          <div className="TrackList">

              {this.props.tracks.map((track, i) => {

              return <Track key={track.id} track={track}/>;

              })
            }
          </div>
      );
  }
}

export default TrackList;

