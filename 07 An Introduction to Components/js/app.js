// 092 Storing Data in Components with the Data Method
// var data = { status: 'Critical' };
Vue.component('my-cmp', {
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
});

new Vue({
    el: "#app"
})