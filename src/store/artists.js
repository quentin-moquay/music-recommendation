import _ from 'lodash'

class ArtistsBuilder {
    
    constructor() {
        this.tags = []
        this.artists = []
        this.currentArtist = null
    }
    
    addArtist(artist) {
        if (this.currentArtist) {
            this.artists.push(this.currentArtist)
        }
        this.currentArtist = artist
        if (!this.currentArtist.playlist) {
            this.currentArtist.playlist = []
        }
        return this
    }
    
    addTrack(track) {
        if (!this.currentArtist) {
            return this
        }
        track.artist = this.currentArtist
        this.currentArtist.playlist.push(track)
        return this
    }
    
    build() {
        if (this.currentArtist) {
            this.artists.push(this.currentArtist)
        }
        return {
            artists: this.artists,
            tags: _.uniq(_.flatten(this.artists.map(artist => artist.tags)))
        }
    }
}

const data = new ArtistsBuilder()
        .addArtist({
            name: 'DJ Hyper',
            tags: ['Indus', 'Electro'],
            image: 'https://www.residentadvisor.net/images/profiles/djhyper.jpg',
            resume: 'DJ Hyper est un DJ, producteur et remixeur britannique connu pour son utilisation libérale de la basse live, des guitares et des voix sans compromis.'
        })
        .addTrack({
            name: 'Clockwork',
            link: 'Pt7kmByAPxI'
        })
        .addTrack({
            name: 'Lies',
            link: 'Z8Oivbqobbs'
        })
        .addTrack({
            name: 'FCKD',
            link: 'GodbJOwIs6U'
        })
        .addTrack({
            name: 'We control',
            link: 'ZjipMva36lc'
        })
        .addArtist({
            name: 'Trevor Something',
            tags: ['Vaporwave', 'Retro'],
            image: 'https://i.ytimg.com/vi/LYOtZvwNCsc/maxresdefault.jpg',
            resume: 'Trevor Something does not exists.'
        })
        .addTrack({
            name: 'The Ghost',
            link: 'JmooQqb-K80'
        })
        .addTrack({
            name: 'Your sex is a dream',
            link: 'dGQCc9ReCjo'
        })
        .addTrack({
            name: 'Girlfriend',
            link: 'gxaxV4pmbgo'
        })
        .addTrack({
            name: 'Your eyes',
            link: 'hMjvEQ9jukY'
        })
        .addTrack({
            name: 'Metadata/Esc-Ctrl',
            link: 'k6S-eb8pjYY'
        })
        .addArtist({
            name: 'PNL',
            tags: ['Vaporwave', 'Rap'],
            image: 'https://static.booska-p.com/images/news_opti/1000/pnl-entre-dans-la-legende-et-passe-le-cap-des-10-singles-de-diamant.jpg',
            resume: 'Lyrics claquées. Instrus planantes.'
        })
        .addTrack({
            name: 'Naha',
            link: 'CDqJXz5-uDU'
        })
        .addTrack({
            name: "91's",
            link: 'uTd-viQd8gI'
        })
        .addTrack({
            name: 'Blanka',
            link: 'u8bHjdljyLw'
        })
        .addTrack({
            name: 'Uranus',
            link: 'q3sP0DL6PDk'
        })
        .addTrack({
            name: "Jusqu'au dernier gramme",
            link: 'w4owJamctrI'
        })
        .addTrack({
            name: 'Coeur',
            link: 'UfrP6sZwj88'
        })
        .addArtist({
            name: 'Maluns',
            tags: ['Downtempo', 'Psybient'],
            image: 'https://f4.bcbits.com/img/0008157851_10.jpg',
            resume: ''
        })
        .addTrack({
            name: 'Afterburner',
            link: 'hn10gaJO3ns'
        })
        .addTrack({
            name: 'Dope To The Sound',
            link: 'kQo9yc2OUps'
        })
        .addArtist({
            name: 'Astropilot',
            tags: ['Downtempo', 'Psybient'],
            image: 'https://f4.bcbits.com/img/0008493419_10.jpg',
            resume: ''
        })
        .addTrack({
            name: 'Betelgeuse',
            link: 'aLhLlTc22cI'
        })
        .addTrack({
            name: 'Back To Midgard-Earth',
            link: '-jM0QByDOxo'
        })
        .addArtist({
            name: 'Alice in Chains',
            tags: ['Rock', 'Metal'],
            image: 'https://france3-regions.francetvinfo.fr/hauts-de-france/sites/regions_france3/files/styles/top_big/public/assets/images/2014/04/22/alice_in_chains.jpg?itok=yRCtGccc',
            resume: ''
        })
        .addTrack({
            name: 'All secrets known',
            link: 'U1lJO8yDNVo'
        })
        .addTrack({
            name: 'Check my brain',
            link: 'RdSBJB83bUg'
        })
        .addTrack({
            name: 'Last of my kind',
            link: 'Rvx4GyBsc-A'
        })
        .addTrack({
            name: 'Your decision',
            link: 'yIGw2Wg88Ns'
        })
        .addTrack({
            name: 'Sickman',
            link: 'ZCCxTCkLRi4'
        })
        .addTrack({
            name: 'Rooster',
            link: 'z6QgND6sXbc'
        })
        .addTrack({
            name: 'Junkhead',
            link: '4EV2OTBh7Y'
        })
        .addTrack({
            name: 'Hate to feel',
            link: 'OMXwCR0-eyw'
        })
        .addTrack({
            name: 'Black Gives Way To Blue',
            link: 'PD3F1bN2qrQ'
        })
        .addArtist({
            name: 'Meshuggah',
            tags: ['Metal', 'Brutal'],
            image: 'https://i2.wp.com/www.trexsound.com/wp-content/uploads/2012/01/Meshuggah.jpg?fit=625%2C417',
            resume: ''
        })
        .addTrack({
            name: 'Clockworks',
            link: 'oFiDcazicdk'
        })
        .addTrack({
            name: 'Do not look down',
            link: 'CUuXiAsV7BQ'
        })
        .addTrack({
            name: 'Bleed',
            link: 'U4GXNzom6ik'
        })
        .addTrack({
            name: 'Rational gaze',
            link: 'rkrjE4QRsys'
        })
        .addTrack({
            name: 'Demiurge',
            link: '9xD-KJSjIxw'
        })
        .addTrack({
            name: 'Break Those Bones Whose Sinews Gave It Motion',
            link: 'm9LpMZuBEMk'
        })
        .build()

export default data
