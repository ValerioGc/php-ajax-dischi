var app = new Vue({
    el: '#app',
    data: {
        localApi: 'http://localhost/php-ajax-dischi/client_side/data_api.php',
        albumData: [],
        isLoading: false,
        selGenre: 'Filtra per genere',
    // Array Filtri
        foundAlbumGenres: [],
    },
    created() { this.getResp(); },

    methods: {
        // Seleziona Chiamata
        callApi(genre){
            if (this.selGenre == "Filtra per genere"){
                this.getResp();
            }
            else {
                this.sendSelGenre(genre)
            }
        },
        // Richiesta Standard
        async getResp (){
            this.isLoading = true;
            try {
                const response = await axios.get(this.localApi)
                this.albumData = response.data;
                // Creo array filtri generi ed anni
                this.pushFilterEl(response.data, this.foundAlbumGenres);
                this.isLoading = false;

            } catch(error) {
                console.log(error)
                this.isLoading = 'error';
            }
        },
        // Invia Filtri
        async sendSelGenre(genre) {
            this.isLoading = true;
            try {
                genre = genre.toLowerCase();
                let request = `${this.localApi}?genre=${genre}`;
                const response = await axios.get(request)
                this.albumData = response.data;
                this.isLoading = false;
            } catch(error) {
                console.log(error)
                this.isLoading = 'error';

            }
        },
        // Creazione array filtro genere
        pushFilterEl(response, array) {
            for (let i = 0; i < response.length; i++) {
                let actualFilter = response[i].genre;
                if (!array.includes(actualFilter)) {
                    array.push(response[i].genre);
                }
            }
        }
    }
});

