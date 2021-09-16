<template>
  <div class="main">
    <div class="container">
      <div class="box">
        <div class="header">
          <h5>
            <span>新闻动态</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="title">
          <ul>
            <li v-for="(item, index) in titleList" :key="index">
              <router-link :to="item.url">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="content" v-if="news">
          <div class="des">
            <dl v-for="(item, index) in news.rows" :key="index">
              <dt>
                {{ new Date(item.lastUpdateTime).getMonth() + 1
                }}<span>{{ new Date(item.lastUpdateTime).getDate() }}</span>
              </dt>
              <dd>
                <router-link :to="'/xinwendongtai/' + item.id">
                  <h5>
                    {{ item.title }}
                  </h5>
                  <div class="editor-content" v-html="item.content"></div>
                </router-link>
              </dd>
            </dl>
          </div>
        </div>
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
