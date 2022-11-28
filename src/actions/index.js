// named export allows us to export multiple functions from a file, unlike default export.
export const selectSong = (song) => {
    // type is required, payload is optional.
    return {
        type : 'SONG_SELECTED',
        payload : song
    }
};

