import React, { Component } from 'react';
import './App.css';
import Spotify from '../../util/Spotify';

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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  

  addTrack(track) {
    if(this.state.playlistTracks.findIndex(_track => _track.id === track.id) === -1) {
      let tracks = this.state.playlistTracks
      tracks.push(track)
      this.setState({playlistTracks: tracks})
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

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState(
        {
          playlistName: 'New Playlist',
          playlistTracks: []
        })
    })
  }

  search(searchTerm) {
        Spotify.search(searchTerm).then(tracks => {
          this.setState({
            searchResults: tracks
          })
        });
      }
  
    
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search} />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
      <Playlist playlistTracks={this.state.playlistTracks} 
                playlistName={this.state.playlistName} 
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist} />
    </div>
  </div>
</div>
    );
  }
}

export default App;


