<template>
    <div id="playlistManager">
        <h1 class="title">Playlist Manager</h1>
        <section>
            <song-list :songs="songs" @add="moveToPlaylist" @addNewSong="addNewSong"></song-list>
            <playlist :songs="playlistSongs" @remove="moveToSongList"></playlist>
        </section>
    </div>
</template>

<script>
    import Playlist from './Playlist';
    import SongList from './SongList';

    export default {
        name: 'PlaylistManager',
        components: {
            Playlist, 
            SongList
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    #playlistManager > section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        padding: 1rem;
    }
</style>