<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="mingshifengcai">
            名师风采
          </router-link>
        </h4>
        <ul></ul>
        <RelatedInfo />
        <ContactUs />
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>名师风采</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>名师风采</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <ul class="content">
          <li v-for="(item, index) in teachers" :key="index">
            <router-link :to="'/mingshifengcai/' + item.id">
              <img :src="item.teacherPhotoUrl" />
            </router-link>
            <div class="des">
              <router-link :to="'/mingshifengcai/' + item.id">
                <h4>{{ item.name }}</h4>
                <p v-html="item.content"></p>
              </router-link>
            </div>
          </li>
        </ul>
        <div class="clear"></div>
        <el-pagination
          background
          :page-size="10"
          :page-count="pagerCount"
          layout="prev, pager, next"
          :total="total"
          @current-change="changePage"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
