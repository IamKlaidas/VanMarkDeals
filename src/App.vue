<template>
  <div id="app">
    <Header email="growth@vanmarkdeals.com" phoneNumber="+1 571 403 2844"/>
    <Form/>
    <div class="displayInMiddle">
      <div class="backgroundImageContainer"></div>
    </div>
    <Information/>
    <Sponsor/>
  </div>
</template>

<script>
import Header from './components/headerTemplate'
import Form from './components/formTemplate'
import Information from './components/informationTemplate'
import Sponsor from './components/sponsorTemplate'

export default {
  name: 'app',
  components: {
    Header,
    Form,
    Information,
    Sponsor
  }
}
</script>

<style lang="scss">
  body {
    margin: 0px;
    padding: 0px;
    background-image: radial-gradient(circle, #018dca 10%,  #00405c);
    background-size: contain;
    overflow: hidden;
  }

  .displayInMiddle {
    z-index: -1;
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center
  }

  .backgroundImageContainer {
    width: 60vw;
    height: 60vh;
    background-image: url("./assets/BGmap.png");
    background-repeat: no-repeat;
    background-size: contain;
  }

  #app {
    font-family: 'Open Sans', sans-serif;
  }
</style>
