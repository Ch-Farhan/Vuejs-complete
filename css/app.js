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

// 022 Using Two-Way-Binding
// new Vue({
//     el: '#app',
//     data: {
//         name: 'Max'
//     }
// });

// 023 Reacting to Changes with Computed Properties
// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         secondCounter: 0
//     },
//     computed: {
//         output: function() {
//             console.log('Computed');
//             return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
//         }
//     },
//     methods: {
//         result: function() {
//             console.log('Method');
//             return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
//         }
//     }
// });

// 024 An Alternative to Computed Properties Watching for Changes
// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         secondCounter: 0
//     },
//     computed: {
//         output: function() {
//             console.log('Computed');
//             return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
//         }
//     },
//     watch: {
//         counter: function(value) {
//             var vm = this;
//             setTimeout(function() {
//                 vm.counter = 0;
//             }, 2000);
//         }
//     },
//     methods: {
//         result: function() {
//             console.log('Method');
//             return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
//         }
//     }
// });

// 025 Saving Time with Shorthands
// new Vue({
//     el: '#app',
//     data: {
//         link: 'http://google.com'
//     },
//     methods: {
//         changeLink: function() {
//             this.link = 'http://apple.com';
//         }
//     }
// });

// 026 Dynamic Styling with CSS Classes - Basics
// new Vue({
//     el: '#app',
//     data: {
//         attachRed: false
//     }
// });

// 027 Dynamic Styling with CSS Classes - Using Objects
// new Vue({
//     el: '#app',
//     data: {
//         attachRed: false
//     },
//     computed: {
//         divClasses: function() {
//             return {
//                 red: this.attachRed,
//                 blue: !this.attachRed
//             };
//         }
//     }
// });

// 028 Dynamic Styling with CSS Classes - Using Names
// new Vue({
//     el: '#app',
//     data: {
//         attachRed: false,
//         color: 'green'
//     },
//     computed: {
//         divClasses: function() {
//             return {
//                 red: this.attachRed,
//                 blue: !this.attachRed
//             };
//         }
//     }
// });

// 029 Setting Styles Dynamically (without CSS Classes)
// new Vue({
//     el: '#app',
//     data: {
//         color: 'gray',
//         width: 100
//     },
//     computed: {
//         myStyle: function() {
//             return {
//                 backgroundColor: this.color,
//                 width: this.width + 'px'
//             };
//         }
//     }
// });

// 034 Conditional Rendering with v-if
// new Vue({
//     el: '#app',
//     data: {
//         show: true
//     },
// });

// 038 Rendering Lists with v-for
// new Vue({
//     el: '#app',
//     data: {
//         ingredients: ['meat', 'fruit', 'cookies'],
//         persons: [
//             { name: 'Max', age: '27', color: 'red' },
//             { name: 'Anna', age: 'unknown', color: 'blue' }
//         ]
//     },
// });

// 041 Looping through Objects
new Vue({
    el: '#app',
    data: {
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            { name: 'Max', age: '27', color: 'red' },
            { name: 'Anna', age: 'unknown', color: 'blue' }
        ]
    },
});