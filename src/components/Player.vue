<template>
    <span>
        <aside class="menu playlist notification is-dark is-hidden-mobile">
                <p class="menu-label">
                    Playlist <i class="fa fa-music" />
                </p>
                <a v-on:click="clearPlaylist" v-if="playlist.length > 0"><i class="fa fa-eraser" /></a>
                <ul class="menu-list">
                    <li v-for="track in playlist" v-bind:key="track.link">
                        <a class="columns columns-menu" :class="{'is-active':track === currentTrack}">
                            <span class="column is-10" v-on:click="start(track)">{{track.artist.name}} - {{track.name}}&nbsp;</span>
                            <i class="column is-2" v-on:click="removeTrack(track)"><i class="fa fa-minus-circle" /></i>
                        </a>
                    </li>
                </ul>
        </aside>
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
            <div class="column is-2"></div>
            <artists class="column is-10" @addToPlaylist="addToPlaylist" :filter="filter"/>

            <nav class="bottom-player navbar is-fixed-bottom is-link is-flex-mobile">
                <div class="navbar-start">
                    <span class="navbar-item">
                        <img alt="Vue logo" src="@/assets/logo.jpg" />
                    </span>
                    <span class="navbar-item">
                        <button class="button is-light"
                            :disabled="!currentTrack || currentTrack === playlist[0]"
                            v-on:click="previous">
                            <i class="fa fa-step-backward"/>
                        </button>
                    </span>
                    <span class="navbar-item">
                        <button class="button is-light"
                            v-on:click="swapResumePause" :disabled="!currentTrack">
                            <i :class="{'fa fa-play': pause, 'fa fa-pause': !pause}" />
                        </button>
                    </span>
                    <span class="navbar-item">
                        <button class="button is-light"
                            :disabled="!currentTrack || currentTrack === playlist[playlist.length - 1]"
                            v-on:click="next">
                            <i class="fa fa-step-forward"/>
                        </button>
                    </span>
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
                width: 192,
                height: 108
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

    .playlist {
        position: fixed;
        left: 0;
        width: 16%;
        height: 720px;
        overflow-y: auto;
        z-index: 40;
        opacity: 0.9;
    }

    .bottom-player {
        z-index: 41 !important;
    }

    .bottom-player .navbar-item button {
        width: 50px;
        height: 40px;
    }
</style>
