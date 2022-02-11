<template>
  <div>
    <h2>关于《原神》</h2>
    <p>
      《原神》是由米哈游自研的一款开放世界冒险RPG。你将在游戏中探索一个被称作「提瓦特」的幻想世界。
      在这广阔的世界中，你可以踏遍七国，邂逅性格各异、能力独特的同伴，与他们一同对抗强敌，踏上寻回血亲之路；也可以不带目的地漫游，沉浸在充满生机的世界里，让好奇心驱使自己发掘各个角落的奥秘……直到你与分离的血亲重聚，在终点见证一切事物的沉淀。《原神》现已登录PS平台、iOS、Android、PC平台，并支持移动端、PC端以及PS平台数据互通，旅行者可自由选择平台和设备开启冒险。
    </p>
    <div :style="{ opacity }">
      <button class="btn btn-primary">前往下载</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      opacity: 0.5,
    };
  },
  activated() {
    this.timer = setInterval(() => {
      this.opacity += 0.01;
      // console.log("@");
      if (this.opacity >= 1) this.opacity = 0.5;
    }, 16);
  },
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>