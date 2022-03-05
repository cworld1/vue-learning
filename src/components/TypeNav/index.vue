<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enterShow" @mouseleave="leaveShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <div class="item" v-for="c1 in webData" :key="c1.categoryId">
                <h3>
                  <a
                    :data-cateName="c1.categoryName"
                    :data-cate1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-cateName="c2.categoryName"
                          :data-cate2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-cateName="c3.categoryName"
                            :data-cate3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    // 组件挂载完毕：判断是否阻止显示
    if (this.$route.name != "Home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      webData: (state) => state.home.typeNavData,
    }),
  },
  methods: {
    // 获取节点参数转为query参数并跳转搜索页面
    goSearch(event) {
      // 获取相关节点并判断跳转
      let element = event.target;
      let { catename, cate1id, cate2id, cate3id } = element.dataset;
      if (catename) {
        // 整理路由跳转参数
        let query = { cateName: catename };
        if (cate1id) {
          query.cate1Id = cate1id;
        } else if (cate2id) {
          query.cate2Id = cate2id;
        } else if (cate3id) {
          query.cate3Id = cate3id;
        }
        let location = { name: "Search", query };
        // 如果地址已经携带了 params 参数，则继续继承
        if (this.$route.params) {
          location.params = this.$route.params;
        }
        this.$router.push(location);
      }
    },
    // 为折叠效果下的商品分类列表进行触发性展示
    enterShow() {
      if (this.$route.name != "Home") {
        this.show = true;
      }
    },
    leaveShow() {
      if (this.$route.name != "Home") {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  a {
    cursor: pointer;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 510px;
      position: absolute;
      background: #ebebeb;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          &:hover {
            background-color: #e1251b46;
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
    // 过度动画的样式
    .sort-enter-active,
    .sort-leave-active {
      transition: all 0.3s ease-in-out;
      overflow: hidden;
    }
    .sort-enter,
    .sort-leave-to {
      height: 0px;
      opacity: 0.8;
    }
    .sort-enter-to,
    .sort-leave {
      height: 510px;
      opacity: 2;
    }
  }
}
</style>
