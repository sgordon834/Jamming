import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id !== track.id)) {
          this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }

  removeTrack(track) {
    const trackIndx = this.state.playlistTracks.findIndex(_track => _track.id === track.id);
    if(trackIndx > -1) {
      let tracks = this.state.playlistTracks
      tracks.splice(trackIndx, 1)
      this.setState({playlistTracks: tracks})
    }
  }
  
    
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack()} />
      <Playlist tracks={this.state.playlistTracks} playlistName={this.state.playlistName} onRemove={this.removeTrack()} />
    </div>
  </div>
</div>
    );
  }
}

export default App;
