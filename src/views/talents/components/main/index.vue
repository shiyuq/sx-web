<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="guanyuwomen">
            联系我们
          </router-link>
        </h4>
        <ul>
          <li v-for="(item, index) in des" :key="index">
            <router-link :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
        <h4 class="consult">
          相关资讯
        </h4>
        <div class="content">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <router-link :to="item.url" :title="item.title">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="contact">
          <div class="contactUs">
            <h5 class="subcontact">
              <router-link to="lianxiwomen">
                联系我们
              </router-link>
            </h5>
          </div>
          <div class="subcontent">
            <img src="../../../../assets/map.jpg" />
            <p>
              <span class="subspan">咨询热线：</span>
            </p>
            <p class="subtel">13970768616</p>
            <p class="subtel">15083931223</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>人才招聘</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/lianxiwomen' }">
              联系我们
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content">
          <div class="mainContent">
            <div class="pic">
              <img src="../../../../assets/企业文化.jpg" />
            </div>
            <div class="inf" v-for="(item, index) in infList" :key="index">
              <h4 v-for="(hItem, hIndex) in infList[index].sList" :key="hIndex">
                {{ hItem.title }}
                <p
                  v-for="(pItem, pIndex) in infList[index].sList[hIndex].list"
                  :key="pIndex"
                >
                  {{ pItem.content }}
                </p>
              </h4>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
