// 003 Extending the VueJS Application
// new Vue({
//     el: '#app',
//     data: {
//         title: 'Hello World!'
//     },
//     methods: {
//         changeTitle: function(event) {
//             this.title = event.target.value;
//         }
//     }
// });

// 010 How the VueJS Template Syntax and Instance Work Together
// new Vue({
//     el: '#app',
//     data: {
//         title: 'Hello World!'
//     },
//     methods: {
//         sayHello: function() {
//             return this.title;
//         }
//     }
// });

// 012 Binding to Attributes
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com'
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});