// 092 Storing Data in Components with the Data Method
// Vue.component('my-cmp', {
//     data: function() {
//         return {
//             status: 'Critical'
//         };
//     },
//     template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>) </p>',
//     methods: {
//         changeStatus: function() {
//             this.status = 'Normal';
//         }
//     }
// });

// new Vue({
//     el: "#app"
// })

// 093 Registering Components Locally and Globally
// Vue.component('my-cmp', {})
var cmp = {
    data: function() {
        return {
            status: 'Critical'
        };
    },
    template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>) </p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
};

new Vue({
    el: "#app",
    components: {
        'my-cmp': cmp
    }
})

new Vue({
    el: "#app2"
})