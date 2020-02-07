<template>
    <div>
        <template v-for="(line, i) in filteredArtists">
            <span class="columns" v-bind:key="i">
                <span class="column tile is-3 is-vertical" v-for="(artist, j) in line" v-bind:key="artist.name">
                    <artist v-model="line[j]" @addToPlaylist="addToPlaylist" />
                </span>
            </span>
        </template>
    </div>
</template>
<script>
    import _ from 'lodash'
    import db from '@/store/artists'
    import Artist from "@/components/Artist"

    export default {
        name: 'Artists',
        props: ['filter'],
        components: {Artist},
        data() {
            return {}
        },
        methods: {
            addToPlaylist(zik) {
                this.$emit('addToPlaylist', zik)
            }
        },
        computed: {
            artists() {
                return db.artists
            },
            filteredArtists() {
                if (this.filter.length === 0) {
                    return _.chunk(this.artists, 4)
                }
                return _.chunk(this.artists.filter(artist => {
                    let found = false
                    this.filter.forEach(tag => {
                        if (artist.tags.find(it => it === tag)) {
                            found = true
                            return true
                        }
                    })
                    return found
                }), 4)
            }
        }
    }
</script>
<style scoped>
</style>
