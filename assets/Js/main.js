
/* consegna

*/

/* strumenti: 

*/
const { createApp } = Vue

createApp({
    data() {
        return {
            activeImage: 0,
            movie:{
                title:'',
                category:'',
                duration: 60,
                images: [
                    "https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg",
                    "https://www.themoviedb.org/t/p/w220_and_h330_face/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg",
                    "https://www.themoviedb.org/t/p/w220_and_h330_face/AhifyrSNkRVFMJ94CEMfBv1FaMz.jpg",
                    "https://www.themoviedb.org/t/p/w220_and_h330_face/msx02cHuCa33PUQV6Ez5KhaJa4Q.jpg",
                    "https://www.themoviedb.org/t/p/w220_and_h330_face/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg"
          
                  ]
            }
        }
    }
}).mount('#app')
