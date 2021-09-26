<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="guanyuwomen">
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
        <RelatedInfo />
        <ContactUs />
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
          <img src="../../../../assets/企业文化.jpg" />
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
