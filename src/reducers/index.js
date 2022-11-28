import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {
            title : 'No Scrubs',
            duration:  '4:05'
        },
        {
            title : 'Macarena',
            duration:  '2:30'
        },
        {
            title : 'All Star',
            duration:  '3:15'
        },
        {
            title : 'I want it that way',
            duration:  '6:40'
        }
    ]
};

const selectedSongReducer = (currSelectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    } 
    return currSelectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});