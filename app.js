new Vue({
    el: "#vue-app",
    data: {
    name: "",
    age: ""
    },
    methods: {
     logName: function(){
       alert("your name is " + this.name);
     },
     logAge: function(){
       console.log("you entered your age");
     }
    }
});