Vue.component('greeting', {
  template: '<p>Hey {{name}}, I am a re-usable component. <button @click="changeName"> Change name</button></p>',
  data: function(){
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function(){
      this.name = 'Mario';
    }
  }
});

var one = new Vue({
  el: "#vue-app-one",
});

var two = new Vue({
  el: "#vue-app-two",
 
});
