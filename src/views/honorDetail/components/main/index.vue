<template>
  <div class="main" v-if="certificates">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/rongyuzizhi' }">
          荣誉资质
        </el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentLeft">
      <div class="box">
        <h1>荣誉资质</h1>
        <div class="title">
          <div class="titleContent">
            <span>文章出处：未知</span>
            <span>
              发表时间：{{ certificates[idIndex].createdTime.split(" ")[0] }}
            </span>
          </div>
          <div class="pic">
            <img :src="certificates[idIndex].certificatePhotoUrl" alt="" />
          </div>
          <!-- <div class="turnPage">
            <span v-if="idIndex > 0">
              <router-link
                :to="'/rongyuzizhi/' + certificates[idIndex - 1].id"
                @click="reduceIdIndex(idIndex)"
              >
                上一篇：荣誉资质
              </router-link>
            </span>
            <span v-else>
              上一篇：
            </span>
            <span v-if="idIndex < certificates.length - 1">
              <router-link
                :to="'/rongyuzizhi/' + certificates[idIndex + 1].id"
                @click="addIdIndex(idIndex)"
              >
                下一篇：荣誉资质
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
