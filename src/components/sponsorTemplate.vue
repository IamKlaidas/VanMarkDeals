<template>
  <div class="sponsorContainer">
    <div class="sponsorImageScroller">
      <div class="imageContainer" ref="cardAnimate" v-for="image in sponsorList" v-bind:key="image.id">
        <img v-bind:src="image.src" alt="error">
      </div>
    </div>
  </div>
</template>

<script>
  import { startAnimation } from './animation/scroller';

  export default {
    name: 'SponsorTemplate',
    props: {
      email: String,
      phoneNumber: String
    },
    mounted: function() {
      startAnimation(this.$refs.cardAnimate);
    },
    method: {

    },
    data() {
      return {
        sponsorList: [
          {
            id: 0,
            src: require("../assets/sponsorLogos/sponsor1.png")
          },{
            id: 1,
            src: require("../assets/sponsorLogos/sponsor2.png")
          },{
            id: 2,
            src: require("../assets/sponsorLogos/sponsor3.png")
          },{
            id: 3,
            src: require("../assets/sponsorLogos/sponsor4.png")
          },{
            id: 4,
            src: require("../assets/sponsorLogos/sponsor5.png")
          },{
            id: 5,
            src: require("../assets/sponsorLogos/sponsor6.png")
          },{
            id: 6,
            src: require("../assets/sponsorLogos/sponsor7.png")
          },{
            id: 7,
            src: require("../assets/sponsorLogos/sponsor8.png")
          },{
            id: 8,
            src: require("../assets/sponsorLogos/sponsor9.png")
          },{
            id: 9,
            src: require("../assets/sponsorLogos/sponsor10.png")
          },{
            id: 10,
            src: require("../assets/sponsorLogos/sponsor11.png")
          },{
            id: 11,
            src: require("../assets/sponsorLogos/sponsor12.png")
          },{
            id: 12,
            src: require("../assets/sponsorLogos/sponsor13.png")
          },{
            id: 13,
            src: require("../assets/sponsorLogos/sponsor14.png")
          },{
            id: 14,
            src: require("../assets/sponsorLogos/sponsor15.png")
          },{
            id: 15,
            src: require("../assets/sponsorLogos/sponsor16.png") //full line
          },{
            id: 16,
            src: require("../assets/sponsorLogos/sponsor17.png")
          },{
            id: 17,
            src: require("../assets/sponsorLogos/sponsor18.png")
          },{
            id: 18,
            src: require("../assets/sponsorLogos/sponsor19.png")
          },{
            id: 19,
            src: require("../assets/sponsorLogos/sponsor20.png")
          },{
            id: 20,
            src: require("../assets/sponsorLogos/sponsor21.png")
          },{
            id: 21,
            src: require("../assets/sponsorLogos/sponsor22.png")
          },{
            id: 22,
            src: require("../assets/sponsorLogos/sponsor23.png")
          },{
            id: 23,
            src: require("../assets/sponsorLogos/sponsor24.png")
          },{
            id: 24,
            src: require("../assets/sponsorLogos/sponsor25.png")
          },{
            id: 25,
            src: require("../assets/sponsorLogos/sponsor26.png")
          },{
            id: 26,
            src: require("../assets/sponsorLogos/sponsor27.png")
          },{
            id: 27,
            src: require("../assets/sponsorLogos/sponsor28.png")
          },{
            id: 28,
            src: require("../assets/sponsorLogos/sponsor29.png") //below this repeated logos
          },{
            id: 29,
            src: require("../assets/sponsorLogos/sponsor1.png")
          },{
            id: 30,
            src: require("../assets/sponsorLogos/sponsor2.png")
          },{
            id: 31,
            src: require("../assets/sponsorLogos/sponsor3.png")
          },{
            id: 32,
            src: require("../assets/sponsorLogos/sponsor4.png")
          },{
            id: 33,
            src: require("../assets/sponsorLogos/sponsor5.png")
          },{
            id: 34,
            src: require("../assets/sponsorLogos/sponsor6.png")
          },{
            id: 35,
            src: require("../assets/sponsorLogos/sponsor7.png")
          },{
            id: 36,
            src: require("../assets/sponsorLogos/sponsor8.png")
          },{
            id: 37,
            src: require("../assets/sponsorLogos/sponsor9.png")
          },{
            id: 38,
            src: require("../assets/sponsorLogos/sponsor10.png")
          },{
            id: 39,
            src: require("../assets/sponsorLogos/sponsor11.png")
          }

        ]
      }
    }  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $heightFooter: 70px;
  $sponsorIamgeSize: $heightFooter*0.5;

  .sponsorContainer {
    position: fixed;
    bottom: 0%;
    width: 100vw;
    background-color: white;
    height: $heightFooter;

    .sponsorImageScroller {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      .imageContainer {
        height: $sponsorIamgeSize;
        margin-left: 60px;

        img {
          height: 100%;
        }
      }
    }
  }
</style>
