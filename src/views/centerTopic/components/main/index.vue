<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="mingshifengcai">
            名师风采
          </router-link>
        </h4>
        <ul>
          <li
            v-for="(item, index) in des"
            :class="{ cur: isCur === index }"
            :key="index"
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
            <span>中心课题</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>中心课题</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-tabs v-model="activeName" class="el-tabs" :stretch="true">
          <el-tab-pane label="专题教学" name="topics">
            <ul class="content">
              <li v-for="(item, index) in topics" :key="index">
                <span>{{ item }}</span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="专业提升" name="promotes">
            <ul class="content">
              <li v-for="(item, index) in promotes" :key="index">
                <span>{{ item }}</span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="特色课程" name="specials">
            <ul class="content">
              <li v-for="(item, index) in specials" :key="index">
                <span>{{ item }}</span>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
