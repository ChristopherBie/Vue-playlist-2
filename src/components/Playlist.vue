<template>
    <div><!-- https://bulma.io/documentation/components/panel/ -->
        <nav class="panel is-success">
            <p class="panel-heading">
                Playlist ({{ songCount }})
            </p>
            <a class="panel-block is-active" 
                v-for="(song, index) in songs" 
                :key="index"
                @click="removeFromPlaylist(index)">
                <span class="panel-icon">
                    <i class="fas fa-times" aria-hidden="true"></i>
                </span>
                {{ song.artist }} - {{ song.title }}
            </a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Playlist',
        computed: {
            // this computed property returns the current song count and is displayed in the panel head
            songCount() {
                // return this.songs.length;
                return this.$store.getters.playlistSongCount;
            },
            songs() {
                return this.$store.state.playlistSongs;
            }
        },
        methods: {
            // let the parent component know we'd like to remove an item from its playlistSongs array data
            removeFromPlaylist(index) {
                this.$store.commit('removeFromPlaylist', index);
            }
        }
    }
</script>

<style scoped>

</style>