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
// new Vue({
//     el: '#app',
//     data: {
//         title: 'Hello World!',
//         link: 'http://google.com'
//     },
//     methods: {
//         sayHello: function() {
//             return this.title;
//         }
//     }
// });

// 015 How to Output Raw HTML
// new Vue({
//     el: '#app',
//     data: {
//         title: 'Hello World!',
//         link: 'http://google.com',
//         finishedLink: '<a href="http://google.com">Google</a>'
//     },
//     methods: {
//         sayHello: function() {
//             this.title = 'Hello!';
//             return this.title;
//         }
//     }
// });

// 016 Listening to Events
// new Vue({
//     el: '#app',
//     data: {
//         counter: 0
//     },
//     methods: {
//         increase: function() {
//             this.counter++;
//         }
//     }
// });

// 017 Getting Event Data from the Event Object
// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         x: 0,
//         y: 0
//     },
//     methods: {
//         increase: function() {
//             this.counter++;
//         },
//         updateCoordinates: function(event) {
//             this.x = event.clientX;
//             this.y = event.clientY;
//         }
//     }
// });

// 018 Passing your own Arguments with Events
// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         x: 0,
//         y: 0
//     },
//     methods: {
//         increase: function(step, event) {
//             this.counter += step;
//         },
//         updateCoordinates: function(event) {
//             this.x = event.clientX;
//             this.y = event.clientY;
//         }
//     }
// });

// 019 Modifying an Event - with Event Modifiers
// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         x: 0,
//         y: 0
//     },
//     methods: {
//         increase: function(step, event) {
//             this.counter += step;
//         },
//         updateCoordinates: function(event) {
//             this.x = event.clientX;
//             this.y = event.clientY;
//         }
//     }
// });

// 020 Listening to Keyboard Events
// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         x: 0,
//         y: 0
//     },
//     methods: {
//         increase: function(step, event) {
//             this.counter += step;
//         },
//         updateCoordinates: function(event) {
//             this.x = event.clientX;
//             this.y = event.clientY;
//         },
//         alertMe: function() {
//             alert('Alert!');
//         }
//     }
// });

// 021 Writing JavaScript Code in the Templates
new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(step, event) {
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert('Alert!');
        }
    }
});