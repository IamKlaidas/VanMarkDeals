<template>
  <div class="formTemplate">
    <form @submit.prevent="sendEmail" method="post"><!-- action="http://localhost:3000/send-email" -->
      <h1>Contact Us</h1>
      <input type="text" placeholder="Name..." v-model="userName" name="name">
      <input type="text" placeholder="Email..." v-model="email" name="email">
      <input type="text" placeholder="Subject..." v-model="subject" name="subject">
      <textarea name="message" v-model="message" cols="30" placeholder="Message..." rows="10"></textarea>
      <input id="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'FormTemplate', 
    methods: {
      // sendEmail: function() {
      //   axios.post("http://localhost:3000/send-email", { name: this.userName, email: this.email, subject: this.subject, message: this.message })
      //        .then(function () { /* after */ })
      // }
      sendEmail: function() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("Post", "http://localhost:3000/send-email", true);
        xhttp.send();
      }
    }, data() {
      return {
        userName: '',
        email: '',
        subject: '',
        message: ''
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
