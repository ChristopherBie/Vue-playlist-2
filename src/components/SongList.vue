<template>
    <div><!-- https://bulma.io/documentation/components/panel/ -->
        <nav class="panel is-info">
            <p class="panel-heading">
                Songs ({{ songCount }})
            </p>
            <a class="panel-block is-active" 
                v-for="(song, index) in songs" 
                :key="index"
                @click="addToPlaylist(index)">
                <span class="panel-icon">
                    <i class="fas fa-plus" aria-hidden="true"></i>
                </span>
                {{ song.artist }} - {{ song.title }}
            </a>
            <add-song @addNewSong="addNewSong"></add-song>
        </nav>
    </div>
</template>

<script>
    import AddSong from './AddSong';

    export default {
        name: 'SongList',
        components: {
            AddSong
        },
        computed: {
            // this computed property returns the current song count and is displayed in the panel head
            songCount() {
                // return this.songs.length;
                return this.$store.getters.songCount;
            },
            songs() {
                return this.$store.state.songs;
            }
        },
        methods: {
            addNewSong(song) {
                this.$store.commit('addNewSong', song);
            },
            // let the parent component know we'd like to remove an item from its songs array data
            addToPlaylist(index) {
                this.$store.commit('moveToPlaylist', index);
            }
        }
    }
</script>

<style scoped>

</style>