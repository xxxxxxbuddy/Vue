var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    // computed: {
    //     reversedMessage: function(){
    //         return this.message.split('').reverse().join('');
    //     }
    // }
    methods: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('');
        }
    }
});

var now1 = new Vue({
    el: '#now1',
    methods: {
        getTime: function(){
            return Date.now();
        }
    }
});

var now2 = new Vue({
    el: '#now2',
    computed: {
        getTime: function(){
            return Date.now();
        }
    }
});