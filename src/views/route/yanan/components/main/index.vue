<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="http://sxhscc.cn/a/chanpinzhongxin/">
            培训线路
          </router-link>
          PRODUCT
        </h4>
        <ul>
          <li v-for="(item, index) in List" :key="index">
            <router-link :to="item.url" :class="{ cur: iscur === index }">{{
              item.title
            }}</router-link>
          </li>
        </ul>
        <div class="subcontent">
          <h4>推荐路线</h4>
          <div class="recommend">
            <dl v-for="(item, index) in dList" :key="index">
              <dt>
                <router-link :to="item.url" target="_blank" :title="item.title">
                  <img :src="item.src" :alt="item.title" />
                </router-link>
              </dt>
              <dd>
                <router-link :to="item.url" target="_blank" :title="item.title">
                  {{ item.title }}
                </router-link>
              </dd>
            </dl>
            <div class="clear"></div>
          </div>
          <div class="contact">
            <div class="contactUs">
              <h5>
                <router-link to="/lianxiwomen" target="_blank">
                  联系我们
                </router-link>
              </h5>
            </div>
            <div class="sub">
              <img src="./img/map.jpg" alt="" />
              <p>
                <span>咨询热线：</span>
              </p>
              <p class="tel">13991985022</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>延安</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">
              主页
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/peixunxianlu' }">
              培训线路
            </el-breadcrumb-item>
            <el-breadcrumb-item>延安</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="introduction">
          <div class="main">
            <div class="mainContent">
              <div class="proviewBox">
                <div class="top">
                  <img src="./img/01.jpg" />
                </div>
                <div class="bottom">
                  <template>
                    <el-carousel
                      :interval="4000"
                      type="card"
                      arrow="never"
                      indicator-position="none"
                      :height="bannerHeight + 'px'"
                    >
                      <el-carousel-item
                        v-for="(item, index) in eList"
                        :key="index"
                      >
                        <el-row>
                          <el-col :span="24" class="banner_img">
                            <img
                              ref="bannerHeight"
                              :src="item.src"
                              class="bannerImg"
                              @load="imgLoad"
                            />
                          </el-col>
                        </el-row>
                      </el-carousel-item>
                    </el-carousel>
                  </template>
                </div>
              </div>
              <div class="show">
                <h2>延安、西安五晚六天培训方案</h2>
                <span>不忘初心，牢记使命！</span>
                <ul>
                  <li>
                    咨询热线：
                    <span>13991985022</span>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      立即咨询
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="clear"></div>
            <div class="recommend">
              <p>推荐线路</p>
              <div class="relevant">
                <dl v-for="(item, index) in rList" :key="index">
                  <dt>
                    <router-link :to="item.url">
                      <img :src="item.src" :alt="item.title" />
                    </router-link>
                  </dt>
                  <dd>
                    <router-link :to="item.url">{{ item.title }}</router-link>
                  </dd>
                </dl>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
