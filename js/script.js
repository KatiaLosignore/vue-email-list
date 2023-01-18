console.log('Vue OK', Vue);

const app = Vue.createApp({
  name: 'Email API',
  data() {
    return {
        isLoading: false,
        errorMessage: '',
        emails: []
    }
  },
  methods: {
    getRandomEmail() {
        this.isLoading = true;
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.emails.push(response.data.response);
        }).catch(error => {
            this.errorMessage = error.message;
        }).then(() => {
            if (this.emails.length === 10) {
                this.isLoading = false;

            }
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