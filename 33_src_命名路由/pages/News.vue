<template>
  <div>
    <div v-for="i in newsList" :key="i.id" class="media">
      <div class="media-body">
        <h4 class="media-heading">
          <!-- 跳转路由并携带query参数，to的字符串写法 -->
          <router-link
            :to="{
              name: 'detail',
              query: {
                id: i.id,
                title: i.title,
                media: i.media,
                summary: i.summary,
              },
            }"
            >{{ i.title }}</router-link
          >
        </h4>
        {{ i.summary }}
      </div>
      <div class="media-right">
        <img
          class="media-object img-rounded"
          :src="i.media"
          style="width: 152px; height: 72px"
        />
      </div>
    </div>
    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        {
          id: "19842",
          title: "原神｜这璃月港的烟火，是本仙第二喜欢的光景了。",
          summary:
            "这璃月港的烟火，是本仙第二喜欢的光景了。还记得你小时候——嗯？这里又没有别人，听我讲完。",
          media:
            "https://webstatic.mihoyo.com/upload/static-resource/2022/01/28/11728e9b7d76362a227ea8d8f7fae510_481008032604213174.png",
        },
        {
          id: "19841",
          title: "原神｜枪缨猎猎平诸事…",
          summary: "枪缨猎猎平诸事，烟火灿灿祈平安。",
          media:
            "https://webstatic.mihoyo.com/upload/static-resource/2022/01/28/14277320177adb9b306eeb7626887406_3412169448056666151.png",
        },
        {
          id: "19840",
          title: "原神｜这次出海兄弟们都干劲十足，果然收获颇丰啊！",
          summary:
            "哈哈，这次出海兄弟们都干劲十足，果然收获颇丰啊！谁不想过节多带点礼物回家呢，对吧？",
          media:
            "https://webstatic.mihoyo.com/upload/static-resource/2022/01/28/278266764db479aa4c2ece94b9e04c2f_9182845150069458133.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>