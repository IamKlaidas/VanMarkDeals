<template>
    <div>
        <div v-if="emailPost.sent" class="emailSentConfirmationContainer correct">
            <p>{{ emailPost.message }}</p>
        </div>
        <div v-else-if="emailPost.notSent" class="emailSentConfirmationContainer incorrect">
            <p>{{ emailPost.message }}</p>
        </div>
        <div v-else>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'emailSentConfirmation',
    props: {
      emailPost: {
        type: Object
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .emailSentConfirmationContainer {
    position: fixed;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    p {
      position: relative;
      font-size: 15px;
      top: -15px;
    }
  }

  .correct {
    background-color: #1ee264;
  }

  .incorrect {
    background-color: #d6013d;
  }
</style>
