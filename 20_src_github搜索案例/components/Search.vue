<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Github Users Search</h3>
    <div class="form-inline">
      <input
        type="text"
        class="form-control"
        placeholder="请输入用户名"
        v-model="keyWord"
      />
      <button class="btn btn-primary" @click="searchUsers">搜索</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // console.log("请求成功了", response.data);
          // 请求成功后更新List数据
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          // console.log("请求失败了", error.msg);
          // 请求失败后更新List数据
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: error.msg,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style scoped>
.form-control {
  margin-right: 10px;
}
</style>