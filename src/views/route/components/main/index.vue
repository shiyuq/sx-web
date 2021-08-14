<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="http://sxhscc.cn/a/chanpinzhongxin/">
            培训线路
          </router-link>
          PRODUCT
        </h4>
        <ul>
          <li v-for="item in List" :key="item.id">
            <router-link :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>培训线路</span>
          </h5>
          <span>
            <em>您的位置：</em>
            <router-link v-for="item in aList" :key="item.id" :to="item.url">
              {{ item.title }}
              <em>{{ item.icon }}</em>
            </router-link>
          </span>
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
