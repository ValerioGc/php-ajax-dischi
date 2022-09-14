var app = new Vue({
    el: '#app',
    data: {
        albumData: [],
    },
    created(){
        this.getResp();
    },
    methods: {
        async getResp (){
            try {
                const response = await axios.get('http://localhost/php-ajax-dischi/client_side/data_api.php')
                this.albumData = response.data;
                console.log(this.albumData);
            } catch(error) {
                console.log(error)
            }
        }
    }
});

