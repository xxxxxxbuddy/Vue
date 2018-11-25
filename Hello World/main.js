var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于：' + new Date().toLocaleString()
    }
});

var app2 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var bt = document.getElementsByTagName('button');
bt[0].addEventListener('click', function(){
    if(app2.seen){
        app2.seen = false;
        bt[0].innerText = "Show";
    }else{
        app2.seen = true;
        bt[0].innerText = "Hide";
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {egg: 'You can\'t see me',
            text: 'fake'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue.'
    }
});

/* 组件注册要在使用前 */
Vue.component('todo-item', {
    template: '<li>This is a todo item.</li>'
})

var app7 = new Vue({
    el: '#app-7'
})

