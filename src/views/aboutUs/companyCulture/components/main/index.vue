<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="http://sxhscc.cn/a/guanyuwomen/">
            关于我们
          </router-link>
          ABOUT US
        </h4>
        <ul>
          <li
            v-for="(item, index) in des"
            :key="index"
            :class="{ cur: isCur === index }"
          >
            <router-link :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
        <h4 class="consult">
          相关资讯
        </h4>
        <div class="content">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <router-link :to="item.url" target="_blank" :title="item.title">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="contact">
          <div class="contactUs">
            <h5 class="subcontact">
              <router-link to="http://sxhscc.cn/a/lianxiwomen/" target="_blank">
                联系我们
              </router-link>
            </h5>
          </div>
          <div class="subcontent">
            <img src="./img/map.jpg" />
            <p>
              <span class="subspan">咨询热线：</span>
            </p>
            <p class="subtel">13991985022</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>企业文化</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/guanyuwomen' }">
              关于我们
            </el-breadcrumb-item>
            <el-breadcrumb-item>企业文化</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content">
          <img src="./img/bg.jpg" />
          <p v-for="(item, index) in contentList" :key="index">
            {{ item.content }}
          </p>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
