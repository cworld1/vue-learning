<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "西南大学",
      address: "重庆市北碚区",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log("hello消息收到了: ", msgName, data, this);
    },
  },
  mounted() {
    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 10px 15px;
}
</style>