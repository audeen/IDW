var app = new Vue({
  el: "#app",
  data: {
    name: "",
    age: null,
    email: "",

    contact: []
  },
  methods: {
    push: function() {
      this.contact.push({name: this.name, age: this.age, email: this.email});
    }
  }
});
