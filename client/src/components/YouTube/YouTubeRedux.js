//import Redux
import { createStore } from 'redux';
//Import YouTube Playlists
import playlists from './YouTubeData.js';


let tempPlaylists = playlists;
let currentPlaylist = playlists[0];

//Load Playlists
 const loadData = () => {
    return {
        type: 'allPlaylists/LoadData',
        payload: tempPlaylists
    };
};
//Add Playlist
 const addPlaylist = (playlist) => {
    return { 
      type: 'allPlaylists/addPlaylist', 
      payload: playlist 
    };
};
//Remove Playlist
 const removePlaylist = (playlist) => {
    return { 
        type: 'allPlaylists/removePlaylist', 
        payload: playlist 
    };
};





//Declare Store
function playlistsReducer(state = tempPlaylists, action) {
    switch(action.type) {
        case 'allPlaylists/LoadData':
            return state
            
        case 'allPlaylists/addPlaylist':
            tempPlaylists = state.concat(action.payload)
            console.log(tempPlaylists)
            return tempPlaylists
                
        case 'allPlaylists/removePlaylist':
            return {
                
            };
        default:
            return state;
    };
}

//Create Store
const store = createStore(playlistsReducer);

//load Data Function Export
export function getPlaylists() {
    let Tplaylists = store.dispatch(loadData())
    console.log(Tplaylists = Tplaylists.payload);
    return(tempPlaylists);
}
export function addPlaylistItem(item) {
    console.log(item);
    store.dispatch(addPlaylist(item));
       
    return(tempPlaylists);
}
export function removePlaylistItem(item) {
    store.dispatch(removePlaylist(item));
    return(getPlaylists());
}
export function setCurrentPlaylist(playlist)
{
    currentPlaylist = playlist;
    console.log(currentPlaylist)
}
export function getCurrentPlaylist() {
    console.log(currentPlaylist)
    return currentPlaylist;
}