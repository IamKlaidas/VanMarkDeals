<template>
  <div class="formTemplate">
    <form @submit.prevent="sendEmail" method="post"><!-- action="http://localhost:3000/send-email" -->
      <h1>Contact Us</h1>
      <input type="text" placeholder="Name..." v-model="userName" id="myInput" name="name" required>
      <input type="text" placeholder="Email..." v-model="email" id="myInput" name="email" required>
      <input type="text" placeholder="Subject..." v-model="subject" id="myInput" name="subject" required>
      <textarea name="message" v-model="bodyMessage" cols="30" id="myInput" placeholder="Message..." rows="10" required></textarea>
      <input id="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'FormTemplate', 
    methods: {
      sendEmail: function() {
        let self = this
        axios.post("http://localhost:3000/send-email", { name: this.userName, email: this.email, subject: this.subject, message: this.bodyMessage })
             .then(function () { 
               self.$emit("emailPosted", {
                  sent: true,
                  notSent: false,
                  message: "Email Sent Successfully"
                });
              })
             .catch(function (error) {
               console.log(error);
               self.$emit("emailPosted", {
                  sent: false,
                  notSent: true,
                  message: "Email Sent Unsuccessfully"
                });
              })
             .finally(function () {
               setTimeout(() => {self.$emit("emailPosted", {
                sent: false,
                notSent: false,
                message: "t"
              })}, 1000);
             });
        
        this.resetPage();
      },
      resetPage: function() {
        this.userName = ''
        this.email = ''
        this.subject = ''
        this.bodyMessage = ''
      }
    }, data() {
      return {
        userName: '',
        email: '',
        subject: '',
        bodyMessage: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $formWidth: 25vw;
  $submitWidth: calc(calc(#{$formWidth} * .8) + 20px);

  .formTemplate {
    position: relative;
    width: $formWidth;
    height: 60vh;
    float: right;
    top: 100px;
    right: 100px;

    h1 {
      color: white;
      margin: 10px 0px;
    }

    input, textarea {
      color: black;
      border: none;
      font-size: 20px;
      padding: 10px 10px;
      width: 80%;
      margin-bottom: 10px;
      font-family: 'Open Sans', sans-serif;
      background-color: rgba(136, 211, 252, 0.6);
      resize: none;
    }
    #submit {
      color: white;
      height: 55px;
      width: $submitWidth;
      background-color: black;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
