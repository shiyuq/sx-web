<template>
  <div class="main" v-if="teachers">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/mingshifengcai' }">
          名师风采
        </el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentLeft">
      <div class="box">
        <h1>{{ teachers[idIndex].name }}</h1>
        <div class="title">
          <div class="titleContent">
            <span>文章出处：未知</span>
            <span>
              发表时间：{{ teachers[idIndex].createdTime.split(" ")[0] }}
            </span>
          </div>
          <div class="pic">
            <img :src="teachers[idIndex].teacherPhotoUrl" />
          </div>
          <!-- <div class="turnPage">
            <span v-if="idIndex > 0">
              <router-link
                :to="'/mingshifengcai/' + teachers[idIndex - 1].id"
                @click="reduceIdIndex(idIndex)"
              >
                上一篇：{{teachers[idIndex-1].name}}
              </router-link>
            </span>
            <span v-else>
              上一篇：
            </span>
            <span v-if="idIndex < teachers.length - 1">
              <router-link
                :to="'/mingshifengcai/' + teachers[idIndex + 1].id"
                @click="addIdIndex(idIndex)"
              >
                下一篇：{{teachers[idIndex+1].name}}
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
