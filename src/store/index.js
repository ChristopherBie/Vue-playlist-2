import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        playlistSongs: [],
        songs: [
            { artist: 'Deftones, Mike Shinoda', title: 'Passenger - Mike Shinoda Remix' },
            { artist: 'Polyphia', title: 'G.O.A.T.' },
            { artist: 'Guggenz', title: 'Moonwalker' },
            { artist: 'Jaytech', title: 'Obelisk' },
            { artist: 'Devin Townsend', title: 'Offer Your Light' },
            { artist: 'Andy Mineo, Lecrae', title: 'Coming In Hot' },
            { artist: 'Parov Stelar', title: 'Booty Swing' },
            { artist: 'Kygo, Whitney Houston', title: 'Higher Love' }
        ]
    },
    mutations: {
        addNewSong(state, song) {
            state.songs.splice(state.songs.length, 0, song);
        },
        moveToPlaylist(state, index) {
            let song = state.songs.splice(index, 1)[0];
            state.playlistSongs.splice(state.songs.length, 0, song);
        },
        removeFromPlaylist(state, index) {
            let song = state.playlistSongs.splice(index, 1)[0];
            state.songs.splice(state.songs.length, 0, song);
        }
    },
    actions: {},
    getters: {
        playlistSongCount(state) {
            return state.playlistSongs.length;
        },
        songCount(state) {
            return state.songs.length;
        }
    },
    modules: {}
});