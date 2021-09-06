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
            <span>生产基地</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/guanyuwomen' }">
              关于我们
            </el-breadcrumb-item>
            <el-breadcrumb-item>生产基地</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <ul class="content">
          <li v-for="item in cList" :key="item.id">
            <router-link :to="item.src" :title="item.title" target="_blank">
              <img :src="item.imgUrl" />
            </router-link>
            <h4>
              <router-link :to="item.src" :title="item.title" target="_blank">
                <b>{{ item.title }}</b>
              </router-link>
            </h4>
          </li>
        </ul>
        <div class="clear"></div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
