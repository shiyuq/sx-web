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
            @click="click(item.id, index)"
            :class="{ cur: isCur === item.id }"
          >
            <span>{{ item.address }}</span>
          </li>
        </ul>
        <div class="subcontent">
          <h4>推荐路线</h4>
          <div class="recommend">
            <dl v-for="(item, index) in dList" :key="index">
              <dt>
                <router-link :to="item.url" target="_blank" :title="item.title">
                  <img :src="item.src" :alt="item.title" />
                </router-link>
              </dt>
              <dd>
                <router-link :to="item.url" target="_blank" :title="item.title">
                  {{ item.title }}
                </router-link>
              </dd>
            </dl>
          </div>
          <div class="contact">
            <div class="contactUs">
              <h5>
                <router-link to="/lianxiwomen" target="_blank">
                  联系我们
                </router-link>
              </h5>
            </div>
            <div class="sub">
              <img src="./img/map.jpg" alt="" />
              <p>
                <span>咨询热线：</span>
              </p>
              <p class="tel">13991985022</p>
            </div>
          </div>
        </div>
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
            <span v-for="(subItem, subIndex) in item" :key="subIndex">
              <router-link
                :to="'/peixunxianlu/' + subItem.id"
                :title="subItem.title"
                target="_blank"
              >
                <img :src="subItem.trainPhotoUrl" />
              </router-link>
              <h4>
                <router-link
                  :to="'/peixunxianlu/' + subItem.id"
                  :title="subItem.title"
                  target="_blank"
                >
                  <b>{{ subItem.title }}</b>
                </router-link>
              </h4>
            </span>
          </li>
        </ul>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
