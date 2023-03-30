
/* consegna

*/

/* strumenti: 

*/
const { createApp } = Vue

createApp({
    data() {
        return {
            activeImage: 0,
            movie: {
                images: [
                    {
                        image: './assets/img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                        descriptions:"Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
                    }, {
                        image: './assets/img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                        descriptions: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
                    }, {
                        image: './assets/img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                        descriptions: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: './assets/img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                        descriptions:"Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.",
                    }, {
                        image: './assets/img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                        descriptions: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                    }
                ],
            }
        }
    },
    methods: {
        incrementActive() {

            if (this.activeImage === this.movie.images.length - 1) {
                this.activeImage = 0
            } else {
                this.activeImage++
            }
        },
        decrementActive() {

            if (this.activeImage === 0) {
                this.activeImage = this.movie.images.length - 1
            } else {
                this.activeImage--
            }
        },
        intervallo(){
            setInterval({
                this:activeImage++
        },300)
        }

      }

}).mount('#app')
