var app = new Vue({
    el: '#app',
    data: {
        localApi: 'http://localhost/php-ajax-dischi/client_side/data_api.php',
    // Array Album
        albumData: [],
    // Stato Caricamento
        isLoading: false,
    // Genere e anno Selezionato
        selYear: 'Anno',
        selGenre: 'Genere',
    // Array Filtro genere
        foundAlbumGenres: [],
        foundAlbumYears: [],
    },
    created() { this.getResp(); },

    methods: {
        // Seleziona Chiamata
        callApi(genre, year){
            if ((genre == "Genere") && (year == "Anno") ){
                this.getResp();
            }
            else {
                this.sendSelGenre(genre, year)
            }
        },
        // Richiesta Standard
        async getResp (){
            this.isLoading = true;
            try {
                const response = await axios.get(this.localApi)
                this.albumData = response.data;
            // Creo array filtri generi
                this.pushFilterEl(response.data, 'genre', this.foundAlbumGenres);
                this.pushFilterEl(response.data, 'year', this.foundAlbumYears);
                this.isLoading = false;
            } catch(error) {
                console.log(error)
                this.isLoading = 'error';
            }
        },
        // Invia Filtri
        async sendSelGenre(genre, year) {
            this.isLoading = true;
            try {
                let request = `${this.localApi}?genre=${genre}&year=${year}`;
                console.log(request)
                const response = await axios.get(request)
                this.albumData = response.data;
                this.isLoading = false;
            } catch(error) {
                console.log(error)
                this.isLoading = 'error';
            }
        },
        // Creazione array filtro genere
        pushFilterEl(response, filter, array) {
            if (filter === 'genre') {
                for (let i = 0; i < response.length; i++) {
                    let actualFilter = response[i].genre;
                    if (!array.includes(actualFilter)) {
                        array.push(response[i].genre);
                    }
                }
            } else {
                for (let i = 0; i < response.length; i++) {
                    let actualFilter = response[i].year;
                    if (!array.includes(actualFilter)) {
                        array.push(response[i].year);
                    }
                }
            }
        }
    }
});

