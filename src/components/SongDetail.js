import { connect } from "react-redux";

function SongDetail({currSong}) {
    if(!currSong){
        return (
            <div>
                Select a song
            </div>
        );
    }
    return (
        <div>
            <h3>Details for :</h3>
            <p>
                    Title : {currSong.title}<br></br>
                    Duration : {currSong.duration}
            </p>
            
        </div>
    );
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        currSong : state.selectedSong
    };
}

export default connect(mapStateToProps)(SongDetail);