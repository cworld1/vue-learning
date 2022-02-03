<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="title" :appear="true"> -->
    <transition-group name="title" appear>
      <h1 v-show="!isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">Vuuue!</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.title-enter-active,
.title-leave-active {
  transition: 0.5s ease-in-out;
}

/* 进入的起点，离开的终点 */
.title-enter,
.title-leave-to {
  transform: translateX(-100%);
  opacity: 0.2;
}

/* 进入的终点，离开的起点 */
.title-enter-to,
.title-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>