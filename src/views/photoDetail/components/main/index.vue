<template>
  <div class="main">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/peixunlueying' }">
          培训掠影
        </el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentLeft">
      <div class="box">
        <h1>培训掠影</h1>
        <div class="title">
          <div class="titleContent">
            <span>文章出处：未知</span>
            <span>人气：134</span>
            <span>发表时间：2018-11-26</span>
          </div>
          <div class="pic">
            <img src="../../../../assets/文化馆2.jpg" alt="" />
          </div>
          <div class="turnPage">
            <span v-for="(item, index) in pList" :key="index">
              {{ item.title }}:
              <router-link :to="item.src">{{ item.content }}</router-link>
            </span>
          </div>
        </div>
      </div>
      <div class="introduction">
        <h4>推荐线路</h4>
        <div class="introContent">
          <dl v-for="(item, index) in introContentList" :key="index">
            <dt>
              <router-link :to="item.url">
                <img :src="item.imgUrl" :alt="item.content" />
              </router-link>
            </dt>
            <dd>
              <router-link :to="item.url">{{ item.content }}</router-link>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="contentRight">
      <div v-for="(item, index) in contentRightList" :key="index">
        <h4>
          <router-link :to="item.url">{{ item.title }}</router-link>
        </h4>
        <ul>
          <li
            v-for="(uItem, uIndex) in contentRightList[index].uList"
            :key="uIndex"
          >
            <router-link :to="uItem.url">
              {{ uItem.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
