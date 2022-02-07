<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="/guanyuwomen">
            关于我们
          </router-link>
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
            <span>培训基地</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/guanyuwomen' }">
              关于我们
            </el-breadcrumb-item>
            <el-breadcrumb-item>培训基地</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <ul class="content">
          <li v-for="item in cList" :key="item.id">
            <img :src="item.imgUrl" />
            <h4>
              {{ item.title }}
            </h4>
          </li>
        </ul>
        <div class="clear"></div>
        <div class="block">
          <!-- <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          >
          </el-pagination> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
