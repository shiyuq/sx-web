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
                <p>{{ item.content }}</p>
              </router-link>
            </div>
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
