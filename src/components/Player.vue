<template>
    <span>
        <div class="columns">
            <div class="column is-3">

            </div>
            <div class="column is-6 box notification is-dark">
                <div class="tags are-medium">
                      <span class="tag artist-tag" v-for="tag in tags" v-bind:key="tag" :class="{'is-link':filter.indexOf(tag) !== -1}"
                          v-on:click="swapToFilter(tag)">
                          <p>{{tag}}</p>
                          <button class="delete is-small" v-if="filter.indexOf(tag) !== -1"/>
                      </span>
                </div>
            </div>
            </div>
        <div class="columns">
            <aside class="menu column is-2 notification is-dark">
                <p class="menu-label">
                    Playlist <i class="fa fa-music" />
                </p>
                <a v-on:click="clearPlaylist" v-if="playlist.length > 0"><i class="fa fa-eraser" /></a>
                <ul class="menu-list">
                    <li v-for="track in playlist" v-bind:key="track.link">
                        <a :class="{'is-active':track === currentTrack}">
                            <p><b v-on:click="start(track)">{{track.artist.name}} - {{track.name}}&nbsp;</b>
                                <i v-on:click="removeTrack(track)"><i class="fa fa-minus-circle" /></i>
                            </p>
                        </a>
                    </li>
                </ul>
            </aside>
            <artists class="column is-10" @addToPlaylist="addToPlaylist" :filter="filter"/>

            <nav class="navbar is-fixed-bottom is-link">
                <div class="navbar-start">
                    <span class="navbar-item">
                        <img alt="Vue logo" src="./../assets/logo.png" />
                    </span>
                    <a class="navbar-item" v-on:click="previous" v-if="currentTrack && currentTrack !== playlist[0]"><i class="fa fa-angle-double-left"/></a>
                    <a class="navbar-item" v-on:click="swapResumePause" v-if="currentTrack">
                        <i :class="{'fa fa-play': pause, 'fa fa-pause': !pause}" />
                    </a>
                    <a class="navbar-item" v-on:click="next" v-if="currentTrack && currentTrack !== playlist[playlist.length - 1]"><i class="fa fa-angle-double-right"/></a>
                </div>
                <div class="navbar-end">
                    <div id="player" class="navbar-item" />
                </div>
            </nav>
        </div>
    </span>
</template>
<script>
    import _ from 'lodash'
    import db from '@/store/artists'
    import YTPlayer from 'yt-player'
    import Artists from '@/components/Artists.vue'

    export default {
        name: "Player",
        components: {
            Artists
        },
        data() {
            return {
                player: null,
                currentTrack: '',
                playlist: [],
                filter: [],
                tags: db.tags,
                pause: false
            }
        },
        mounted() {
            this.player = new YTPlayer('#player', {
                width: 256,
                height: 144
            })

            this.player.on('playing', () => {
                // todo
            })

            this.player.on('ended', () => {
                this.next()
            })
        },
        methods: {
            swapToFilter(tag) {
                const index = this.filter.findIndex(it => it === tag)
                if (index === -1) {
                    this.filter.push(tag)
                } else {
                    this.filter.splice(index, 1)
                }
            },
            addToPlaylist(zik) {
                if (Array.isArray(zik)) {
                    zik.forEach(z => this.addToPlaylist(z))
                } else if (!_.find(this.playlist, zik)) {
                    this.playlist.push(zik)
                    if (!this.currentTrack) {
                        this.start(zik)
                    }
                } else {
                    this.start(zik)
                }
            },
            removeTrack(zik) {
                const index = this.playlist.findIndex(it => it === zik)
                if (index !== -1) {
                    this.playlist.splice(index, 1)
                }
                if (this.currentTrack === zik) {
                    this.currentTrack = null
                    this.player.stop()
                    this.pause = false
                    if (this.playlist.length > 0) {
                        this.start(this.playlist[0])
                    }
                }
            },
            clearPlaylist() {
                this.currentTrack = null
                this.playlist = []
                this.player.stop()
                this.pause = false
            },
            start(zik) {
                this.currentTrack = zik
            },
            swapResumePause() {
              if (this.player.getState() === 'paused') {
                  this.player.play()
                  this.pause = false
              } else {
                  this.pause = true
                  this.player.pause()
              }
            },
            next() {
                if (!this.currentTrack) {
                    this.currentTrack = this.playlist[0]
                }
                let index = _.findIndex(this.playlist, this.currentTrack)
                this.currentTrack = this.playlist[++index]
            },
            previous() {
                if (!this.currentTrack) {
                    this.currentTrack = this.playlist[0]
                }
                let index = _.findIndex(this.playlist, this.currentTrack)
                this.currentTrack = this.playlist[--index]
            }
        },
        watch: {
            currentTrack() {
                if (this.currentTrack) {
                    this.player.load(this.currentTrack.link)
                    this.player.setVolume(100)
                    this.player.play()
                    this.pause = false
                }
            }
        }
    }
</script>
<style scoped>
    .artist-tag {
        cursor: pointer;
    }

    aside {
        min-height: 720px;
    }
</style>
