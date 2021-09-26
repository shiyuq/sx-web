<template>
  <div class="main">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/rongyuzizhi' }">
          荣誉资质
        </el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentLeft">
      <div class="box">
        <h1>荣誉资质</h1>
        <div class="title">
          <div class="titleContent">
            <span>文章出处：未知</span>
            <span>人气：134</span>
            <span>发表时间：2018-11-26</span>
          </div>
          <div class="pic">
            <img src="../../../../assets/证书.jpg" alt="" />
          </div>
          <div class="turnPage">
            <span v-for="(item, index) in pList" :key="index">
              {{ item.title }}:
              <router-link :to="item.src">{{ item.content }}</router-link>
            </span>
          </div>
        </div>
      </div>
      <RecommendRoute />
    </div>
    <News />
  </div>
</template>
<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
