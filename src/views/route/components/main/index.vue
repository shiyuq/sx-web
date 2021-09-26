<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="peixunxianlu">
            培训线路
          </router-link>
          PRODUCT
        </h4>
        <ul>
          <li
            v-for="(item, index) in addresses"
            :key="index"
            @click="click(item.id)"
            :class="{ cur: item.id === queryId }"
          >
            <span>{{ item.address }}</span>
          </li>
        </ul>
        <RecommendTrains />
        <ContactUs />
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>培训线路</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>培训线路</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <ul class="content" v-if="filterTrains">
          <li v-for="(item, index) in filterTrains" :key="index">
            <router-link :to="'/peixunxianlu/' + item.id" :title="item.title">
              <img :src="item.trainPhotoUrl" />
              <h4>
                <b>{{ item.title }}</b>
              </h4>
            </router-link>
          </li>
        </ul>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
