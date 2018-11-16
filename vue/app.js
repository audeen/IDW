var app = new Vue({
  el: "#app",
  data: {
    name: "",
    age: null,
    email: "",

    contact: [
      { name: "peter", age: 23, email: "haha" },
      { name: "klaus", age: 24, email: "huhu" }
    ],

    search: ""
  },
  methods: {
    push: function() {
      this.contact.push({ name: this.name, age: this.age, email: this.email });
    }
  },
  computed: {
    filtered: function() {
      var filteredlist = this.contact.filter(value => {
        return value.name.includes(this.search);
      });
      return filteredlist;
    }
  }
});
