<template>
  <div class="main">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/qiyewenhua' }">
          企业文化
        </el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentLeft">
      <div class="box">
        <h1>企业文化</h1>
        <div class="title">
          <div class="titleContent">
            <span>文章出处：未知</span>
            <span>
              发表时间：2021-09-28
            </span>
          </div>
          <div class="pic">
            <img src="../main/img/03.jpg" alt="" />
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
