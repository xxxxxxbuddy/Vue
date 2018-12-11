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

var app1 = new Vue({
    el: '#app1',
    data: {
        firstName: 'Lei',
        lastName: 'Zhang',
        fullName: 'Lei Zhang'
    },
    watch: {
        firstName: function(val){
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val){
            this.fullName = this.firstName + ' ' + val
        }
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        firstName: 'Lei',
        lastName: 'Zhang'
    },
    computed: {
        fullName: {
            get: function(){
                return this.firstName + ' ' + this.lastName
            },
            set: function(newValue){
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data:{
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        question: function(newQuestion, oldQuestion){
            this.answer = 'Wating for you to stop typing...',
            this.debouncedGetAnswer()
        }
    },
    created: function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function(){
            if(this.question.indexOf('?') === -1){
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
              .then(function(response){
                  vm.answer = _.capitalize(response.data.answer)
              })
              .catch(function(error){
                  vm.answer = 'Error! Could not reach the API.' + error
              })
        }
    }
})