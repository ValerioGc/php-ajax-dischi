var app = new Vue({
    el: '#app',
    data: {
        albumData: [],
    },
    created(){
        axios.get('//localhost/php-ajax-dischi/client_side/data_api.php')
            .then (response => {
                this.albumData = response.data;
                console.log(this.albumData);
            }
        );
    }
});

