<template>
    <span class="notification is-dark">
        <div class="tags is-centered">
          <span class="tag is-static" v-for="tag in value.tags" v-bind:key="tag">
              <p>{{tag}}</p>
          </span>
        </div>
        <p class="subtitle">{{value.name}}</p>
        <figure class="image artist-image">
            <img :src="value.image" />
        </figure>
        <button class="button is-link detail-button is-small" v-on:click="swapDetail()">
            <i :class="{'fa fa-plus': !detail, 'fa fa-minus': detail}" />
        </button>
        <div class="box notification is-link" v-if="detail && value.resume">
            {{value.resume}}
        </div>
        <div v-if="detail">
            <div class="menu">
                <p class="menu-label">
                    Tracks <i class="fa fa-music" />
                </p>
                <ul class="menu-list">
                    <li title="Add all">
                        <a v-on:click="addToPlaylist(value.playlist)"><i class="fa fa-folder-plus" /></a>
                    </li>
                    <li v-for="zik in value.playlist" v-bind:key="zik.link">
                        <a v-on:click="addToPlaylist(zik)" class="columns columns-menu is-flex">
                            <span class="column is-10">{{zik.name}}</span>
                            <i class="fa fa-plus-circle column is-2" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </span>
</template>
<script>
    export default {
        name: 'Artist',
        props: ['value'],
        data() {
          return {
              detail: false
          }
        },
        methods: {
            addToPlaylist(zik) {
                this.$emit('addToPlaylist', zik)
            },
            swapDetail() {
                this.detail = !this.detail
            }
        }
    }
</script>
<style scoped>
    .artist-image img {
        max-height: 150px;
        width: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .detail-button {
        top: -15px;
    }
</style>
