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
        resume: 'Prod assez aggressive, son industriel avec de vrais instruments (guitare, basse, etc.) totalement modifiées au mixage.'
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
        resume: "Un univers hyper planant et \"weird\" mixés sur des synthés qui pourraient sortir des années 80. La voix donne l'impression d'entendre aussi un vieux groupe de ces années-là."
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
        resume: 'Lyrics claquées au sol. Instrus planantes et diversifiées. Ça pourrait être tellement mieux si les textes étaient plus travaillées et matures.'
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
        resume: 'Downtempo avec de bons moments psychedeliques.'
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
        resume: 'Comme tout le mouvement Downtempo, les morceaux sont longs à démarrer et se développent sur une dizaine de minutes. Idéal pour se concentrer sur autre chose, hyper agréable pour se détendre aussi.'
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
        resume: 'On classe parfois ça dans le Dark-rock, ça porte bien son nom. Certains trouvent que ça sonne beaucoup comme du Nirvana (surtout au niveau de la voix) mais dans un ensemble qui sonnerait plutôt Ouest des USA.'
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
        link: 'bjOG0meK-vk'
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
        resume: "La musique c'est surtout du rythme quand on y pense. Des notes sans aucun rythme, c'est du bruit. Du rythme sans notes, ça reste un truc entrainant. Meshuggah l'a bien compris, ici on cherche uniquement le rythme. Le batteur est totalement ouf et les guitares hyper graves balancent du contretemps ultra-saturées en permanence. Totalement hypnotique et brutal."
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
        resume: 'Un groupe Britannique plutôt sympa à écouter pour son côté Pop entrainant.'
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
        resume: "La Norvège ça doit être déprimant. Tous les groupes que je connais sont des trucs darks. Ulver c'est un groupe expérimental qui a envie de pendre quand il compose j'imagine. Ils aiment bien avoir un mec tout nu sur scène sur un piano lancinant aussi (à voir dans la dernière vidéo !)"
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
        resume: "Projet porté par un français complètement taré qui aime mixer à peu près toutes les musiques qu'ils aiment dans le même morceau. Con et sans aucun sens, mais totalement assumé. Il n'y a jamais de paroles, juste des vocalises. le mec a bien compris qu'on s'en foutait."
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
        resume: "Groupe français qui mixe le son des synthés des années 80 avec la violence de la disto d'aujourd'hui. Tous les morceaux couvrent le spectre des fréquences sans honte aucune. Putain d'intense."
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
        resume: "Dans la Synthwave, Gost, c'est un peu le mec qui pousse la distortion au max et qui fait un truc LOURD et GRAVE."
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
        resume: "C'est un compositeur, principalement de jeux vidéo. Tout ça est issu de la B.O d'un jeu nommé Transistor. C'est vraiment cool et idéal pour bosser.",
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
        resume: "Je connais pas bien la Pop en vrai. C'est peut-être pas très original mais ça percute bien et la chanteuse gère bien. Juste un peu répétitif et forcément lassant à la longue.",
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
        resume: "Le Post-Rock c'est un peu le Downtempo du Rock. Mouvement majoritairement instrumental qui développe donc ces morceaux sur 6 à 12 minutes. L'ambiance est assez mélancolique de manière générale."
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
        resume: "Assez récent dans le Rap US, j'aime principalement son flow et ses nombreuses mélodies dans ses morceaux. Il aime bien chanter sur ses refrains aussi."
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
    .addArtist({
        name: 'Oh Hiroshima',
        tags: ['Post-Rock'],
        image: 'https://i2.wp.com/somewherecold.net/wp-content/uploads/2016/10/Oh-Hiroshima-2.jpg?resize=400%2C162&ssl=1',
        resume: "Un des rares groupes du mouvements qui a quelques passages chantées. Les compos sont bien conçues."
    })
    .addTrack({
        name: "Ellipse",
        link: 'Oa8fPtYX3I8'
    })
    .addTrack({
        name: "Ruach",
        link: '_PGnRrz3uSQ'
    })
    .addTrack({
        name: "Holding Rivers",
        link: 'ZnvF5k4StzI'
    })
    .addTrack({
        name: "Drones",
        link: 'B-8nqgVSJIc'
    })
    .build()

export default data
