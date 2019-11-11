<template>
  <div class="inforamtionContainer">
    <div class="headingContainer">
      <h1>VanMark Deals</h1>
      <p>Send Parcel LLC</p>
    </div>
    <div class="addressContainer">
      <h2>6549 Grange Ln<br>Alexandria, VA 22315<br>United States</h2>
    </div>
    <div class="buttonContainer">
      <button v-on:click="changeURL()">Amazon.com Store</button>
    </div>
    <div class="extraInforamtion">
      <p>Experienced Seller on Amazon worldwide. If you are a <br>manufacturer, distributor or wholesaler and would<br>like to add your product to our store contact us now</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InformationTemplate',
    props: {
      email: String,
      phoneNumber: String
    },methods: {
      changeURL: function() {
        window.location = "https://www.amazon.com/s?i=merchant-items&me=A1T9L47SOSLRWE";
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .inforamtionContainer {
    color: white;
    width: 600px;
    height: auto;
    position: relative;
    top: 150px;
    left: 300px;
    letter-spacing: 1px;

    .headingContainer {
      position: relative;
      height: 70px;

      p {
        position: relative;
        top: -25px;
        opacity: 0.8;
      }
    }
    .addressContainer {
      position: relative;

      h2 {
        font-weight: 30;
        margin: 0px;
      }
    }
    .buttonContainer {
      position: relative;
      width: 275px;
      height: 55px;
      top: 80px;

      button {
        width: 100%;
        height: 100%;
        font-size: 20px;
        border: none;
        background-color: black;
        color: white;

        &:hover {
          cursor: pointer;
        }
      }
    }
    .extraInforamtion {
      position: relative;
      top: 90px;

      p {
        font-size: 20px;
        font-weight: 10;
        opacity: 0.95;
      }
    }
  }
</style>
