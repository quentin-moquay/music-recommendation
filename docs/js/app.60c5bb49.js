(function(a){function e(e){for(var n,r,l=e[0],c=e[1],o=e[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(a[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,o||[]),t()}function t(){for(var a,e=0;e<i.length;e++){for(var t=i[e],n=!0,l=1;l<t.length;l++){var c=t[l];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),a=r(r.s=t[0]))}return a}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=a,r.c=n,r.d=function(a,e,t){r.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,e){if(1&e&&(a=r(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)r.d(t,n,function(e){return a[e]}.bind(null,n));return t},r.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(e,"a",e),e},r.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("cd49")},"034f":function(a,e,t){"use strict";var n=t("85ec"),s=t.n(n);s.a},"1a36":function(a,e,t){},"4daa":function(a,e,t){"use strict";var n=t("dfe6"),s=t.n(n);s.a},"6f48":function(a,e,t){},"85ec":function(a,e,t){},b640:function(a,e){a.exports="data:image/jpeg;base64,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"},cd49:function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("player")],1)},i=[],r=t("d4ec"),l=t("99de"),c=t("7e84"),o=t("262e"),u=t("9ab4"),d=t("60a3"),m=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("span",[t("aside",{staticClass:"menu playlist notification is-dark"},[a._m(0),a.playlist.length>0?t("a",{on:{click:a.clearPlaylist}},[t("i",{staticClass:"fa fa-eraser"})]):a._e(),t("ul",{staticClass:"menu-list"},a._l(a.playlist,(function(e){return t("li",{key:e.link},[t("a",{staticClass:"columns columns-menu",class:{"is-active":e===a.currentTrack}},[t("span",{staticClass:"column is-10",on:{click:function(t){return a.start(e)}}},[a._v(a._s(e.artist.name)+" - "+a._s(e.name)+" ")]),t("i",{staticClass:"column is-2",on:{click:function(t){return a.removeTrack(e)}}},[t("i",{staticClass:"fa fa-minus-circle"})])])])})),0)]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-3"}),t("div",{staticClass:"column is-6 box notification is-dark"},[t("div",{staticClass:"tags are-medium"},a._l(a.tags,(function(e){return t("span",{key:e,staticClass:"tag artist-tag",class:{"is-link":-1!==a.filter.indexOf(e)},on:{click:function(t){return a.swapToFilter(e)}}},[t("p",[a._v(a._s(e))]),-1!==a.filter.indexOf(e)?t("button",{staticClass:"delete is-small"}):a._e()])})),0)])]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-2"}),t("artists",{staticClass:"column is-10",attrs:{filter:a.filter},on:{addToPlaylist:a.addToPlaylist}}),t("nav",{staticClass:"navbar is-fixed-bottom is-link"},[t("div",{staticClass:"navbar-start"},[a._m(1),a.currentTrack&&a.currentTrack!==a.playlist[0]?t("a",{staticClass:"navbar-item",on:{click:a.previous}},[t("i",{staticClass:"fa fa-angle-double-left"})]):a._e(),a.currentTrack?t("a",{staticClass:"navbar-item",on:{click:a.swapResumePause}},[t("i",{class:{"fa fa-play":a.pause,"fa fa-pause":!a.pause}})]):a._e(),a.currentTrack&&a.currentTrack!==a.playlist[a.playlist.length-1]?t("a",{staticClass:"navbar-item",on:{click:a.next}},[t("i",{staticClass:"fa fa-angle-double-right"})]):a._e()]),a._m(2)])],1)])},k=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",{staticClass:"menu-label"},[a._v(" Playlist "),t("i",{staticClass:"fa fa-music"})])},function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("span",{staticClass:"navbar-item"},[n("img",{attrs:{alt:"Vue logo",src:t("b640")}})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"navbar-end"},[t("div",{staticClass:"navbar-item",attrs:{id:"player"}})])}],p=(t("4de4"),t("7db0"),t("c740"),t("4160"),t("a434"),t("9911"),t("159b"),t("2ef0")),h=t.n(p),f=(t("d81d"),t("bee2")),g=function(){function a(){Object(r["a"])(this,a),this.tags=[],this.artists=[],this.currentArtist=null}return Object(f["a"])(a,[{key:"addArtist",value:function(a){return this.currentArtist&&this.artists.push(this.currentArtist),this.currentArtist=a,this.currentArtist.playlist||(this.currentArtist.playlist=[]),this}},{key:"addTrack",value:function(a){return this.currentArtist?(a.artist=this.currentArtist,this.currentArtist.playlist.push(a),this):this}},{key:"build",value:function(){return this.currentArtist&&this.artists.push(this.currentArtist),{artists:h.a.sortBy(this.artists,"name"),tags:h.a.sortBy(h.a.uniq(h.a.flatten(this.artists.map((function(a){return a.tags})))))}}}]),a}(),A=(new g).addArtist({name:"DJ Hyper",tags:["Indus","Electro"],image:"https://i.ytimg.com/vi/G70S5fumHso/maxresdefault.jpg",resume:"Prod assez aggressive, son industriel avec de vrais instruments (guitare, basse, etc.) totalement modifiées au mixage."}).addTrack({name:"Clockwork",link:"Pt7kmByAPxI"}).addTrack({name:"Lies",link:"Z8Oivbqobbs"}).addTrack({name:"FCKD",link:"GodbJOwIs6U"}).addTrack({name:"We control",link:"ZjipMva36lc"}).addArtist({name:"Trevor Something",tags:["Vaporwave","Retro"],image:"https://i.ytimg.com/vi/LYOtZvwNCsc/maxresdefault.jpg",resume:"Un univers hyper planant et \"weird\" mixés sur des synthés qui pourraient sortir des années 80. La voix donne l'impression d'entendre aussi un vieux groupe de ces années-là."}).addTrack({name:"The Ghost",link:"JmooQqb-K80"}).addTrack({name:"Your sex is a dream",link:"dGQCc9ReCjo"}).addTrack({name:"Girlfriend",link:"gxaxV4pmbgo"}).addTrack({name:"Your eyes",link:"hMjvEQ9jukY"}).addTrack({name:"Metadata/Esc-Ctrl",link:"k6S-eb8pjYY"}).addArtist({name:"PNL",tags:["Vaporwave","Rap"],image:"https://static.booska-p.com/images/news_opti/1000/pnl-entre-dans-la-legende-et-passe-le-cap-des-10-singles-de-diamant.jpg",resume:"Lyrics claquées au sol. Instrus planantes et diversifiées. Ça pourrait être tellement mieux si les textes étaient plus travaillées et matures."}).addTrack({name:"Naha",link:"CDqJXz5-uDU"}).addTrack({name:"91's",link:"uTd-viQd8gI"}).addTrack({name:"Blanka",link:"u8bHjdljyLw"}).addTrack({name:"Uranus",link:"q3sP0DL6PDk"}).addTrack({name:"Jusqu'au dernier gramme",link:"w4owJamctrI"}).addTrack({name:"Coeur",link:"UfrP6sZwj88"}).addArtist({name:"Maluns",tags:["Downtempo","Psybient"],image:"https://f4.bcbits.com/img/0008157851_10.jpg",resume:"Downtempo avec de bons moments psychedeliques."}).addTrack({name:"Afterburner",link:"hn10gaJO3ns"}).addTrack({name:"Dope To The Sound",link:"kQo9yc2OUps"}).addArtist({name:"Astropilot",tags:["Downtempo","Psybient"],image:"https://f4.bcbits.com/img/0008493419_10.jpg",resume:"Comme tout le mouvement Downtempo, les morceaux sont longs à démarrer et se développent sur une dizaine de minutes. Idéal pour se concentrer sur autre chose, hyper agréable pour se détendre aussi."}).addTrack({name:"Betelgeuse",link:"aLhLlTc22cI"}).addTrack({name:"Back To Midgard-Earth",link:"-jM0QByDOxo"}).addArtist({name:"Alice in Chains",tags:["Rock","Metal","Depressive"],image:"https://france3-regions.francetvinfo.fr/hauts-de-france/sites/regions_france3/files/styles/top_big/public/assets/images/2014/04/22/alice_in_chains.jpg?itok=yRCtGccc",resume:"On classe parfois ça dans le Dark-rock, ça porte bien son nom. Certains trouvent que ça sonne beaucoup comme du Nirvana (surtout au niveau de la voix) mais dans un ensemble qui sonnerait plutôt Ouest des USA."}).addTrack({name:"All secrets known",link:"U1lJO8yDNVo"}).addTrack({name:"Check my brain",link:"RdSBJB83bUg"}).addTrack({name:"Last of my kind",link:"Rvx4GyBsc-A"}).addTrack({name:"Your decision",link:"yIGw2Wg88Ns"}).addTrack({name:"Sickman",link:"ZCCxTCkLRi4"}).addTrack({name:"Rooster",link:"z6QgND6sXbc"}).addTrack({name:"Junkhead",link:"bjOG0meK-vk"}).addTrack({name:"Hate to feel",link:"OMXwCR0-eyw"}).addTrack({name:"Black Gives Way To Blue",link:"PD3F1bN2qrQ"}).addArtist({name:"Meshuggah",tags:["Metal","Brutal"],image:"https://i2.wp.com/www.trexsound.com/wp-content/uploads/2012/01/Meshuggah.jpg?fit=625%2C417",resume:"La musique c'est surtout du rythme quand on y pense. Des notes sans aucun rythme, c'est du bruit. Du rythme sans notes, ça reste un truc entrainant. Meshuggah l'a bien compris, ici on cherche uniquement le rythme. Le batteur est totalement ouf et les guitares hyper graves balancent du contretemps ultra-saturées en permanence. Totalement hypnotique et brutal."}).addTrack({name:"Clockworks",link:"oFiDcazicdk"}).addTrack({name:"Do not look down",link:"CUuXiAsV7BQ"}).addTrack({name:"Bleed",link:"U4GXNzom6ik"}).addTrack({name:"Rational gaze",link:"rkrjE4QRsys"}).addTrack({name:"Demiurge",link:"9xD-KJSjIxw"}).addTrack({name:"Break Those Bones Whose Sinews Gave It Motion",link:"m9LpMZuBEMk"}).addArtist({name:"Breton",tags:["Pop","Electro"],image:"https://www.phonographecorp.com/wp-content/uploads/2012/04/breton04bd.jpg",resume:"Un groupe Britannique plutôt sympa à écouter pour son côté Pop entrainant."}).addTrack({name:"Envy",link:"0uMWeuy3e5k"}).addTrack({name:"S4",link:"dEriEtns7hc"}).addTrack({name:"Got well soon",link:"4uUfbhpgho8"}).addArtist({name:"Ulver",tags:["Electro","Experimental","Metal","Depressive"],image:"https://www.rock-progresivo.com/wp-content/uploads/2012/04/Ulver-3.jpg",resume:"La Norvège ça doit être déprimant. Tous les groupes que je connais sont des trucs darks. Ulver c'est un groupe expérimental qui a envie de pendre quand il compose j'imagine. Ils aiment bien avoir un mec tout nu sur scène sur un piano lancinant aussi (à voir dans la dernière vidéo !)"}).addTrack({name:"Nemoralia",link:"QTVzllTJ1CA"}).addTrack({name:"Rolling stone",link:"XHE28JiuSQk"}).addTrack({name:"1969",link:"xkjG_02Vo3o"}).addTrack({name:"Coming home",link:"HnUF8z9wuWQ"}).addTrack({name:"Not saved",link:"-ApZyqCNgJo"}).addTrack({name:"The Leg Cutting Piece",link:"gEVHrXq5_D0"}).addArtist({name:"Igorrr",tags:["Experimental","Metal","Electro"],image:"http://sourdoreille.net/2016/wp-content/uploads/2017/09/igorrr-gautier-serre-06-credits-franois-nuq.jpg",resume:"Projet porté par un français complètement taré qui aime mixer à peu près toutes les musiques qu'ils aiment dans le même morceau. Con et sans aucun sens, mais totalement assumé. Il n'y a jamais de paroles, juste des vocalises. le mec a bien compris qu'on s'en foutait."}).addTrack({name:"Ieud",link:"3zRU-VU87HI"}).addTrack({name:"Cheval",link:"UZzYxGZ7Hmc"}).addTrack({name:"Houmous",link:"-Vd2nyk-4Lo"}).addTrack({name:"Spaghetti forever",link:"fK6_pSFj10s"}).addTrack({name:"Very noise",link:"3e4nQTFhieo"}).addTrack({name:"Chicken sonata",link:"WFxDOV6IwHk"}).addArtist({name:"Carpenter Brut",tags:["Synthwave","Metal"],image:"https://static-cdn.arte.tv/resize/YpAXRXjE8vbTBxSky2cURwg0lIs=/940x530/smart/filters:strip_icc()/apios/Img_data/cache-buster-1572445650/8/081622-003-A_2889388.jpg",resume:"Groupe français qui mixe le son des synthés des années 80 avec la violence de la disto d'aujourd'hui. Tous les morceaux couvrent le spectre des fréquences sans honte aucune. Putain d'intense."}).addTrack({name:"Le perv",link:"RYtVf0wvPpc"}).addTrack({name:"Roller mobster",link:"qFfybn_W8Ak"}).addTrack({name:"Hang'em'all",link:"JXtujxT9rzA"}).addTrack({name:"Division Ruine",link:"a0ZkhlJUQAM"}).addTrack({name:"Run, Sally, Run!",link:"eQqGKPVOQv8"}).addTrack({name:"Turbo Killer",link:"wy9r2qeouiQ"}).addTrack({name:"Night Stalker",link:"YDvG-0-pLyc"}).addTrack({name:"Dust",link:"cHkLBXeuoow"}).addTrack({name:"You're mine",link:"tM0GWMESTis"}).addTrack({name:"Leather Teeth",link:"9r7PQyQJl0g"}).addArtist({name:"Gost",tags:["Synthwave","Brutal"],image:"https://f4.bcbits.com/img/0008407715_0",resume:"Dans la Synthwave, Gost, c'est un peu le mec qui pousse la distortion au max et qui fait un truc LOURD et GRAVE."}).addTrack({name:"Genesee Avenue",link:"4AjoU95ofIg"}).addTrack({name:"Master",link:"8Rso-kMjoBM"}).addTrack({name:"Bathory Bitch",link:"syqI8xbxnyg"}).addTrack({name:"I am Abaddon",link:"xkvdahUbyAo"}).addTrack({name:"Through Thine Eyes",link:"HNE6n8oWx-Y"}).addTrack({name:"Lake of Fire",link:"BU_fubj51jw"}).addArtist({name:"Darren Korb",tags:["Rock","Chill","Videogame"],resume:"C'est un compositeur, principalement de jeux vidéo. Tout ça est issu de la B.O d'un jeu nommé Transistor. C'est vraiment cool et idéal pour bosser.",image:"https://i.ytimg.com/vi/p7ziU3RRacw/maxresdefault.jpg"}).addTrack({name:"Old Friends",link:"ieG9MtRHP28"}).addTrack({name:"Stained Glass",link:"JOizFuXShAk"}).addTrack({name:"Forecast",link:"4tCZkGa_1WY"}).addTrack({name:"The Spine",link:"41tIUr_ex3g"}).addTrack({name:"Coasting",link:"9uN3i8s9TL4"}).addTrack({name:"Vanishing point",link:"Y_VI61pZczo"}).addTrack({name:"Water wall",link:"l8SfXhG2zxg"}).addTrack({name:"In circles",link:"cGMWL8cOeAU"}).addTrack({name:"Heightmap",link:"Op2p4lPtKsk"}).addTrack({name:"We all become",link:"f9O2Rjn1azc"}).addTrack({name:"Signals",link:"WROI5WYBU_A"}).addTrack({name:"Paper boats",link:"vFrjMq4aL-g"}).addArtist({name:"CHVRCHES",tags:["Rock","Pop"],resume:"Je connais pas bien la Pop en vrai. C'est peut-être pas très original mais ça percute bien et la chanteuse gère bien. Juste un peu répétitif et forcément lassant à la longue.",image:"https://www.breizh-info.com/wp-content/uploads/2019/06/chvrches.jpg"}).addTrack({name:"Never Say Die",link:"ifr3O33UpWs"}).addTrack({name:"Miracle",link:"CdcORL2jzDw"}).addTrack({name:"Graffiti",link:"yfv8o3rqB9o"}).addTrack({name:"Forever",link:"CRDruiv08_4"}).addTrack({name:"Graves",link:"1r4Md5WKaqs"}).addArtist({name:"God is an Astronaut",tags:["Post-Rock"],image:"https://www.szenik.eu/wp-content/uploads/older/rock_pop_electro/cac_/god_is_an_astronaut_substage_karlsruhe!_1000x562!_1!_0x0!_0!_FFFFFF.jpg",resume:"Le Post-Rock c'est un peu le Downtempo du Rock. Mouvement majoritairement instrumental qui développe donc ces morceaux sur 6 à 12 minutes. L'ambiance est assez mélancolique de manière générale."}).addTrack({name:"In The Distance Fading",link:"WLxwYxTGbYk"}).addTrack({name:"Post-Mortem",link:"UVlmJp1drUY"}).addTrack({name:"Echoes",link:"KXFprnuyOEM"}).addTrack({name:"Centralia",link:"Go6MvDIzYk0"}).addTrack({name:"Forever Lost",link:"g9XpzfaMkrY"}).addTrack({name:"Suicide By Star",link:"E9vb6t7RkIw"}).addArtist({name:"NF",tags:["Rap"],image:"https://cdn-www.konbini.com/fr/files/2019/08/nf-feat.jpg",resume:"Assez récent dans le Rap US, j'aime principalement son flow et ses nombreuses mélodies dans ses morceaux. Il aime bien chanter sur ses refrains aussi."}).addTrack({name:"All I Have",link:"cSeBpKHHwJQ"}).addTrack({name:"Change",link:"j__VYXZ-5Cw"}).addTrack({name:"Leave me alone",link:"XGGWhOUYObc"}).addTrack({name:"My Stress",link:"1O1tj2phCQY"}).addTrack({name:"Time",link:"E1ZVSFfCk9g"}).addTrack({name:"Therapy Session",link:"KgMzxQW2raE"}).addTrack({name:"I Just Wanna Know",link:"UDGJGSc_iLE"}).addTrack({name:"Motivated",link:"dlwqjI6kt9k"}).addTrack({name:"Mansion",link:"uF5QE3-ox4o"}).addTrack({name:"Paralyzed",link:"DHhHUZsXTBk"}).addTrack({name:"I'll Keep On",link:"2bTYKwkr6Y0"}).addArtist({name:"Oh Hiroshima",tags:["Post-Rock"],image:"https://i2.wp.com/somewherecold.net/wp-content/uploads/2016/10/Oh-Hiroshima-2.jpg?resize=400%2C162&ssl=1",resume:"Un des rares groupes du mouvements qui a quelques passages chantées. Les compos sont bien conçues."}).addTrack({name:"Ellipse",link:"Oa8fPtYX3I8"}).addTrack({name:"Ruach",link:"_PGnRrz3uSQ"}).addTrack({name:"Holding Rivers",link:"ZnvF5k4StzI"}).addTrack({name:"Drones",link:"B-8nqgVSJIc"}).build(),T=A,v=t("9546"),y=t.n(v),b=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[a._l(a.filteredArtists,(function(e,n){return[t("span",{key:n,staticClass:"columns"},a._l(e,(function(n,s){return t("span",{key:n.name,staticClass:"column tile is-3 is-vertical"},[t("artist",{on:{addToPlaylist:a.addToPlaylist},model:{value:e[s],callback:function(t){a.$set(e,s,t)},expression:"line[j]"}})],1)})),0)]}))],2)},C=[],w=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("span",{staticClass:"notification is-dark"},[t("div",{staticClass:"tags is-centered"},a._l(a.value.tags,(function(e){return t("span",{key:e,staticClass:"tag is-static"},[t("p",[a._v(a._s(e))])])})),0),t("p",{staticClass:"subtitle"},[a._v(a._s(a.value.name))]),t("figure",{staticClass:"image artist-image"},[t("img",{attrs:{src:a.value.image}})]),t("button",{staticClass:"button is-link detail-button is-small",on:{click:function(e){return a.swapDetail()}}},[t("i",{class:{"fa fa-plus":!a.detail,"fa fa-minus":a.detail}})]),a.detail&&a.value.resume?t("div",{staticClass:"box notification is-link"},[a._v(" "+a._s(a.value.resume)+" ")]):a._e(),a.detail?t("div",[t("div",{staticClass:"menu"},[a._m(0),t("ul",{staticClass:"menu-list"},[t("li",{attrs:{title:"Add all"}},[t("a",{on:{click:function(e){return a.addToPlaylist(a.value.playlist)}}},[t("i",{staticClass:"fa fa-folder-plus"})])]),a._l(a.value.playlist,(function(e){return t("li",{key:e.link},[t("a",{staticClass:"columns columns-menu",on:{click:function(t){return a.addToPlaylist(e)}}},[t("span",{staticClass:"column is-10"},[a._v(a._s(e.name))]),t("i",{staticClass:"fa fa-plus-circle column is-2"})])])}))],2)])]):a._e()])},j=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",{staticClass:"menu-label"},[a._v(" Tracks "),t("i",{staticClass:"fa fa-music"})])}],B={name:"Artist",props:["value"],data:function(){return{detail:!1}},methods:{addToPlaylist:function(a){this.$emit("addToPlaylist",a)},swapDetail:function(){this.detail=!this.detail}}},x=B,Q=(t("e0a5"),t("2877")),E=Object(Q["a"])(x,w,j,!1,null,"38c198b8",null),P=E.exports,H={name:"Artists",props:["filter"],components:{Artist:P},data:function(){return{}},methods:{addToPlaylist:function(a){this.$emit("addToPlaylist",a)}},computed:{artists:function(){return T.artists},filteredArtists:function(){var a=this;return 0===this.filter.length?h.a.chunk(this.artists,4):h.a.chunk(this.artists.filter((function(e){var t=!1;return a.filter.forEach((function(a){if(e.tags.find((function(e){return e===a})))return t=!0,!0})),t})),4)}}},D=H,F=Object(Q["a"])(D,b,C,!1,null,"58046000",null),U=F.exports,O={name:"Player",components:{Artists:U},data:function(){return{player:null,currentTrack:"",playlist:[],filter:[],tags:T.tags,pause:!1}},mounted:function(){var a=this;this.player=new y.a("#player",{width:192,height:108}),this.player.on("playing",(function(){})),this.player.on("ended",(function(){a.next()}))},methods:{swapToFilter:function(a){var e=this.filter.findIndex((function(e){return e===a}));-1===e?this.filter.push(a):this.filter.splice(e,1)},addToPlaylist:function(a){var e=this;Array.isArray(a)?a.forEach((function(a){return e.addToPlaylist(a)})):h.a.find(this.playlist,a)?this.start(a):(this.playlist.push(a),this.currentTrack||this.start(a))},removeTrack:function(a){var e=this.playlist.findIndex((function(e){return e===a}));-1!==e&&this.playlist.splice(e,1),this.currentTrack===a&&(this.currentTrack=null,this.player.stop(),this.pause=!1,this.playlist.length>0&&this.start(this.playlist[0]))},clearPlaylist:function(){this.currentTrack=null,this.playlist=[],this.player.stop(),this.pause=!1},start:function(a){this.currentTrack=a},swapResumePause:function(){"paused"===this.player.getState()?(this.player.play(),this.pause=!1):(this.pause=!0,this.player.pause())},next:function(){this.currentTrack||(this.currentTrack=this.playlist[0]);var a=h.a.findIndex(this.playlist,this.currentTrack);this.currentTrack=this.playlist[++a]},previous:function(){this.currentTrack||(this.currentTrack=this.playlist[0]);var a=h.a.findIndex(this.playlist,this.currentTrack);this.currentTrack=this.playlist[--a]}},watch:{currentTrack:function(){this.currentTrack&&(this.player.load(this.currentTrack.link),this.player.setVolume(100),this.player.play(),this.pause=!1)}}},S=O,G=(t("4daa"),Object(Q["a"])(S,m,k,!1,null,"38788c68",null)),R=G.exports,_=function(a){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(o["a"])(e,a),e}(d["b"]);_=u["a"]([Object(d["a"])({components:{Player:R}})],_);var q=_,I=q,L=(t("034f"),Object(Q["a"])(I,s,i,!1,null,null,null)),M=L.exports;t("eb46"),t("becf"),t("1a36");n["a"].config.productionTip=!1,new n["a"]({render:function(a){return a(M)}}).$mount("#app")},dfe6:function(a,e,t){},e0a5:function(a,e,t){"use strict";var n=t("6f48"),s=t.n(n);s.a}});
//# sourceMappingURL=app.60c5bb49.js.map