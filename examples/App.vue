<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <z-demo/>
    <z-card
      imgSrc="a.jpg"
      summary="这是卡片描述"
    />
    <br/>
    <z-card
      imgSrc="b.png"
      summary="这是卡片描述"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">人数：200人</div>
          <div class="price">￥200.00</div>
        </div>
      </template>
    </z-card>
    <br/>
    <z-card
      imgSrc="c.png"
      :width="370"
      :imgHeight="90"
    >
      这是卡片描述
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">人数：200人</div>
          <div class="price">￥200.00</div>
        </div>
      </template>
    </z-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .footer{
    padding: 0 8px;
    font-size: 12px;
    text-align: left;
  }
  .level{
    color: #9199A1;
    margin-bottom: 8px;
  }
  .price{
    color: #F01414;
  }
</style>
