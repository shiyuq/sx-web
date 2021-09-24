<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="http://sxhscc.cn/a/guanyuwomen/">
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
            <img src="./img/map.png" />
            <p>
              <span class="subspan">咨询热线：</span>
            </p>
            <p class="subtel">15083931223</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>联系我们</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>联系我们</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content">
          <span v-for="(item, index) in cList" :key="index">
            {{ item.content }}
          </span>
          <div class="navigation">
            <a
              href="https://map.baidu.com/search/%E9%98%BF%E6%8B%89%E5%B0%94%E5%B8%82/@9048965,4918628.5,13z?querytype=s&da_src=shareurl&wd=%E9%98%BF%E6%8B%89%E5%B0%94%E5%B8%82&c=232&src=0&pn=0&sug=0&l=19&b=(12145315.965,4155304.13;12145955.965,4155632.63)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&seckey=348b3ea8be0aad420af3f6fd20b5fe5d742b033169aaff9e55468f20442b2a4079fc11a7bd963ba9f8cb6be3ba7407e73b6fce9ae6fd7d808f0466c44c5b81ea28bac217121ee5ebacc5da0a014b7519cd654b2c3f46618044ffe49b97a9f9193f85b2a2b999072b8539eec7f2cf9555ee73b13ee93bb6fc2bc62ef9dc6bbb14e106b86c1d9d275476ca54d5ec322888863e22d7532ceccdeb384d9b91c91fbbe1bcaaac6a219bfc69ba9dacbfbe833f92fa7209f2fa51e6421e8a08088c1c9affea563455db060fa46c69514e6e1a37584bb1ce9b44e6f53c6dbaca7f2b7129015b7e339d265700a15e1c512100ba33&device_ratio=2"
            >
              <img src="./img/navigation.png" />
              <br />
              <span>立即导航</span>
            </a>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
