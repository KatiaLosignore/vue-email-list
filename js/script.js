console.log('Vue OK', Vue);

const app = Vue.createApp({
  name: 'Email API',
  data() {
    return {
        emails: []

    }
  },
  methods: {
    getRandomEmail() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.emails.push(response.data.response);
        });
    }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
        this.getRandomEmail();
    }
  }
});


app.mount('#root');