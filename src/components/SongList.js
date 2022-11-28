import { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
    // this.props === {songs : state.songs}

    renderList() {
      return this.props.songs.map(song => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button 
                className="ui button primary"
                onClick = {() => this.props.selectSong(song)}
              >Select</button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        );
      });
    }
  
    render() {
      console.log(this.props);
      return <div className="ui divided list">{this.renderList()}</div>;
    }
  }
  

// mapStateToProps is a by conventional name. Can be anything.
// will take state object (inside redux store) and will run some computation on it to show up as props inside Songlist
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        songs : state.songs
    };
}

// connect is a react component
// tells connect that we want a list of songs out of the redux store from the provider
// so when songs list changes, the provider will automatically inform connect component 
// and connect will in turn, inform songList component
// connect can also get correct action  creators to the SongList
// 2nd argument is the action creator and it goes into component as  a prop
// by passing our action creator selectSong into the connect function, 
// we invoke the dispatch function internally with the result of the action creator.
export default connect(mapStateToProps, { selectSong })(SongList);