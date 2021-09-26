<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="guanyuwomen">
            联系我们
          </router-link>
        </h4>
        <ul>
          <li v-for="(item, index) in des" :key="index">
            <router-link :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
        <RelatedInfo />
        <ContactUs />
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>联系我们</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>联系我们</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content">
          <span v-for="(item, index) in cList" :key="index">
            {{ item.content }}
          </span>
          <div class="navigation">
            <a href="https://www.amap.com/place/B0FFH0DMU6">
              <img src="./img/map.jpg" />
              <br />
              <span>立即导航</span>
            </a>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
