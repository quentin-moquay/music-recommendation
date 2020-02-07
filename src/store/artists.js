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
            artists: _.sortBy(this.artists, 'name'),
            tags: _.sortBy(_.uniq(_.flatten(this.artists.map(artist => artist.tags))))
        }
    }
}

const data = new ArtistsBuilder()
    .addArtist({
        name: 'DJ Hyper',
        tags: ['Indus', 'Electro'],
        image: 'https://i.ytimg.com/vi/G70S5fumHso/maxresdefault.jpg',
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
        tags: ['Rock', 'Metal', 'Depressive'],
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
    .addArtist({
        name: 'Breton',
        tags: ['Pop', 'Electro'],
        image: 'https://www.phonographecorp.com/wp-content/uploads/2012/04/breton04bd.jpg',
        resume: ''
    })
    .addTrack({
        name: 'Envy',
        link: '0uMWeuy3e5k'
    })
    .addTrack({
        name: 'S4',
        link: 'dEriEtns7hc'
    })
    .addTrack({
        name: 'Got well soon',
        link: '4uUfbhpgho8'
    })
    .addArtist({
        name: 'Ulver',
        tags: ['Electro', 'Experimental', 'Metal', 'Depressive'],
        image: 'https://www.rock-progresivo.com/wp-content/uploads/2012/04/Ulver-3.jpg',
        resume: ''
    })
    .addTrack({
        name: 'Nemoralia',
        link: 'QTVzllTJ1CA'
    })
    .addTrack({
        name: 'Rolling stone',
        link: 'XHE28JiuSQk'
    })
    .addTrack({
        name: '1969',
        link: 'xkjG_02Vo3o'
    })
    .addTrack({
        name: 'Coming home',
        link: 'HnUF8z9wuWQ'
    })
    .addTrack({
        name: 'Not saved',
        link: '-ApZyqCNgJo'
    })
    .addTrack({
        name: 'The Leg Cutting Piece',
        link: 'gEVHrXq5_D0'
    })
    .addArtist({
        name: 'Igorrr',
        tags: ['Experimental', 'Metal', 'Electro'],
        image: 'http://sourdoreille.net/2016/wp-content/uploads/2017/09/igorrr-gautier-serre-06-credits-franois-nuq.jpg',
        resume: ''
    })
    .addTrack({
        name: 'Ieud',
        link: '3zRU-VU87HI'
    })
    .addTrack({
        name: 'Cheval',
        link: 'UZzYxGZ7Hmc'
    })
    .addTrack({
        name: 'Houmous',
        link: '-Vd2nyk-4Lo'
    })
    .addTrack({
        name: 'Spaghetti forever',
        link: 'fK6_pSFj10s'
    })
    .addTrack({
        name: 'Very noise',
        link: '3e4nQTFhieo'
    })
    .addTrack({
        name: 'Chicken sonata',
        link: 'WFxDOV6IwHk'
    })
    .addArtist({
        name: 'Carpenter Brut',
        tags: ['Synthwave', 'Metal'],
        image: 'https://static-cdn.arte.tv/resize/YpAXRXjE8vbTBxSky2cURwg0lIs=/940x530/smart/filters:strip_icc()/apios/Img_data/cache-buster-1572445650/8/081622-003-A_2889388.jpg',
        resume: ''
    })
    .addTrack({
        name: 'Le perv',
        link: 'RYtVf0wvPpc'
    })
    .addTrack({
        name: 'Roller mobster',
        link: 'qFfybn_W8Ak'
    })
    .addTrack({
        name: "Hang'em'all",
        link: 'JXtujxT9rzA'
    })
    .addTrack({
        name: 'Division Ruine',
        link: 'a0ZkhlJUQAM'
    })
    .addTrack({
        name: 'Run, Sally, Run!',
        link: 'eQqGKPVOQv8'
    })
    .addTrack({
        name: 'Turbo Killer',
        link: 'wy9r2qeouiQ'
    })
    .addTrack({
        name: 'Night Stalker',
        link: 'YDvG-0-pLyc'
    })
    .addTrack({
        name: 'Dust',
        link: 'cHkLBXeuoow'
    })
    .addTrack({
        name: "You're mine",
        link: 'tM0GWMESTis'
    })
    .addTrack({
        name: 'Leather Teeth',
        link: '9r7PQyQJl0g'
    })
    .addArtist({
        name: 'Gost',
        tags: ['Synthwave', 'Brutal'],
        image: 'https://f4.bcbits.com/img/0008407715_0',
        resume: ''
    })
    .addTrack({
        name: 'Genesee Avenue',
        link: '4AjoU95ofIg'
    })
    .addTrack({
        name: 'Master',
        link: '8Rso-kMjoBM'
    })
    .addTrack({
        name: 'Bathory Bitch',
        link: 'syqI8xbxnyg'
    })
    .addTrack({
        name: 'I am Abaddon',
        link: 'xkvdahUbyAo'
    })
    .addTrack({
        name: 'Through Thine Eyes',
        link: 'HNE6n8oWx-Y'
    })
    .addTrack({
        name: 'Lake of Fire',
        link: 'BU_fubj51jw'
    })
    .addArtist({
        name: 'Darren Korb',
        tags: ['Rock', 'Chill', 'Videogame'],
        resume: '',
        image: 'https://i.ytimg.com/vi/p7ziU3RRacw/maxresdefault.jpg'
    })
    .addTrack({
        name: 'Old Friends',
        link: 'ieG9MtRHP28'
    })
    .addTrack({
        name: 'Stained Glass',
        link: 'JOizFuXShAk'
    })
    .addTrack({
        name: 'Forecast',
        link: '4tCZkGa_1WY'
    })
    .addTrack({
        name: 'The Spine',
        link: '41tIUr_ex3g'
    })
    .addTrack({
        name: 'Coasting',
        link: '9uN3i8s9TL4'
    })
    .addTrack({
        name: 'Vanishing point',
        link: 'Y_VI61pZczo'
    })
    .addTrack({
        name: 'Water wall',
        link: 'l8SfXhG2zxg'
    })
    .addTrack({
        name: 'In circles',
        link: 'cGMWL8cOeAU'
    })
    .addTrack({
        name: 'Heightmap',
        link: 'Op2p4lPtKsk'
    })
    .addTrack({
        name: 'We all become',
        link: 'f9O2Rjn1azc'
    })
    .addTrack({
        name: 'Signals',
        link: 'WROI5WYBU_A'
    })
    .addTrack({
        name: 'Paper boats',
        link: 'vFrjMq4aL-g'
    })
    .addArtist({
        name: 'CHVRCHES',
        tags: ['Rock', 'Pop'],
        resume: '',
        image: 'https://www.breizh-info.com/wp-content/uploads/2019/06/chvrches.jpg'
    })
    .addTrack({
        name: 'Never Say Die',
        link: 'ifr3O33UpWs'
    })
    .addTrack({
        name: 'Miracle',
        link: 'CdcORL2jzDw'
    })
    .addTrack({
        name: 'Graffiti',
        link: 'yfv8o3rqB9o'
    })
    .addTrack({
        name: 'Forever',
        link: 'CRDruiv08_4'
    })
    .addTrack({
        name: 'Graves',
        link: '1r4Md5WKaqs'
    })
    .addArtist({
        name: 'God is an Astronaut',
        tags: ['Post-Rock'],
        image: 'https://www.szenik.eu/wp-content/uploads/older/rock_pop_electro/cac_/god_is_an_astronaut_substage_karlsruhe!_1000x562!_1!_0x0!_0!_FFFFFF.jpg',
        resume: ''
    })
    .addTrack({
        name: 'In The Distance Fading',
        link: 'WLxwYxTGbYk'
    })
    .addTrack({
        name: 'Post-Mortem',
        link: 'UVlmJp1drUY'
    })
    .addTrack({
        name: 'Echoes',
        link: 'KXFprnuyOEM'
    })
    .addTrack({
        name: 'Centralia',
        link: 'Go6MvDIzYk0'
    })
    .addTrack({
        name: 'Forever Lost',
        link: 'g9XpzfaMkrY'
    })
    .addTrack({
        name: 'Suicide By Star',
        link: 'E9vb6t7RkIw'
    })
    .addArtist({
        name: 'NF',
        tags: ['Rap'],
        image: 'https://cdn-www.konbini.com/fr/files/2019/08/nf-feat.jpg',
        resume: ''
    })
    .addTrack({
        name: 'All I Have',
        link: 'cSeBpKHHwJQ'
    })
    .addTrack({
        name: 'Change',
        link: 'j__VYXZ-5Cw'
    })
    .addTrack({
        name: 'Leave me alone',
        link: 'XGGWhOUYObc'
    })
    .addTrack({
        name: 'My Stress',
        link: '1O1tj2phCQY'
    })
    .addTrack({
        name: 'Time',
        link: 'E1ZVSFfCk9g'
    })
    .addTrack({
        name: 'Therapy Session',
        link: 'KgMzxQW2raE'
    })
    .addTrack({
        name: 'I Just Wanna Know',
        link: 'UDGJGSc_iLE'
    })
    .addTrack({
        name: 'Motivated',
        link: 'dlwqjI6kt9k'
    })
    .addTrack({
        name: 'Mansion',
        link: 'uF5QE3-ox4o'
    })
    .addTrack({
        name: 'Paralyzed',
        link: 'DHhHUZsXTBk'
    })
    .addTrack({
        name: "I'll Keep On",
        link: '2bTYKwkr6Y0'
    })
    .build()

export default data
