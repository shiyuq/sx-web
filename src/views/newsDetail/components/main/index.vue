<template>
  <div class="main" v-if="news && news.rows">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/xinwendongtai' }">
          新闻动态
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ news.rows[idIndex].typeName }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentLeft">
      <div class="box">
        <h1>{{ news.rows[idIndex].title }}</h1>
        <div class="title">
          <div class="titleContent">
            <span>文章出处：未知</span>
            <span>{{ news.rows[idIndex].id }}</span>
            <span>
              发表时间：{{ news.rows[idIndex].lastUpdateTime.split(" ")[0] }}
            </span>
          </div>
          <div class="editor-content" v-html="news.rows[idIndex].content"></div>
          <!-- <div class="turnPage">
            <span v-if="idIndex > 0">
              <router-link
                :to="'/xinwendongtai/' + news.rows[idIndex - 1].id"
                @click="reduceIdIndex(idIndex)"
              >
                上一篇：{{ news.rows[idIndex - 1].title }}
              </router-link>
            </span>
            <span v-else>
              上一篇：
            </span>
            <span v-if="idIndex < news.rows.length - 1">
              <router-link
                :to="'/xinwendongtai/' + news.rows[idIndex + 1].id"
                @click="addIdIndex(idIndex)"
              >
                下一篇：{{ news.rows[idIndex + 1].title }}
              </router-link>
            </span>
            <span v-else>
              下一篇：
            </span>
          </div> -->
        </div>
      </div>
      <RecommendRoute />
    </div>
    <News />
  </div>
</template>
<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
