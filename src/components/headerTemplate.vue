<template>
  <div class="headerContainer">
    <div class="leftHeaderContainer">
      <div class="imageContainer">
        <img src="../assets/logo.png" alt="error">
      </div>
    </div>
    <div class="rightHeaderContainer">
      <p>{{ phoneNumber }}</p>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderTemplate',
    props: {
      email: String,
      phoneNumber: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $headerHeight: 70px;
  $imageSize: ($headerHeight*0.8);
  $leftPaddingLogo: (($headerHeight - $imageSize)/2);

  .headerContainer {
    width: 100vw;
    height: $headerHeight;
    background-color: #fafafa;
    display: flex;

    
    .leftHeaderContainer {
      height: 100%;
      width: 50%;
      flex: 1;
      display: flex;
      align-items: center;

      .imageContainer {
        position: relative;
        padding-left: $leftPaddingLogo;
        height: $imageSize;
        width: $imageSize;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    .rightHeaderContainer {
      height: 100%;
      width: 50%;
      flex: 1;
      display: flex;
      align-items: center;

      p {
        text-align: center;
        flex: 1;
        font-size: 20px;
        color: #737373;
      }
    }
  }
</style>
