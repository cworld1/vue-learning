<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="title" :appear="true"> -->
    <transition name="title" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
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

.title-enter-active {
  animation: moveToShow 0.5s ease-in-out;
}

.title-leave-active {
  animation: moveToShow 0.5s ease-in-out reverse;
}

@keyframes moveToShow {
  from {
    opacity: 0.2;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>