<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="rongyuzizhi">
            荣誉资质
          </router-link>
        </h4>
        <ul>
          <li
            v-for="(item, index) in tList"
            :key="index"
            :class="{ cur: iscur === index }"
            @click="click(index)"
          >
            <router-link :to="item.src">{{ item.title }}</router-link>
          </li>
        </ul>
        <RelatedInfo />
        <ContactUs />
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>荣誉资质</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>荣誉资质</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <ul class="content">
          <li v-for="item in cList" :key="item.id">
            <router-link :to="item.src" :title="item.title">
              <img :src="item.imgUrl" />
            </router-link>
            <h4>
              <router-link :to="item.src" :title="item.title">
                {{ item.title }}
              </router-link>
            </h4>
          </li>
        </ul>
        <div class="clear"></div>
        <!-- <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          >
          </el-pagination>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
