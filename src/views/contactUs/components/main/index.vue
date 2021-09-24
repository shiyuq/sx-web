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
            <img src="../../../../assets/map.png" />
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
              href="https://map.baidu.com/search/%E4%B8%89%E4%BA%94%E4%B9%9D%E6%97%85%E5%B9%B2%E9%83%A8%E5%AD%A6%E9%99%A2/@9050440.189735325,4921273.692685001,21z?querytype=s&da_src=shareurl&wd=%E4%B8%89%E4%BA%94%E4%B9%9D%E6%97%85%E5%B9%B2%E9%83%A8%E5%AD%A6%E9%99%A2&c=731&src=0&wd2=%E9%98%BF%E6%8B%89%E5%B0%94%E5%B8%82&pn=0&sug=1&l=13&b=(9028485,4908116.5;9069445,4929140.5)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=4fcb8691252b79c12b11d142&seckey=348b3ea8be0aad420af3f6fd20b5fe5d742b033169aaff9e55468f20442b2a4079fc11a7bd963ba9f8cb6be3ba7407e73b6fce9ae6fd7d808f0466c44c5b81ea28bac217121ee5ebacc5da0a014b7519cd654b2c3f46618044ffe49b97a9f9193f85b2a2b999072b8539eec7f2cf9555ee73b13ee93bb6fc2bc62ef9dc6bbb141336729964e8b3cae46ea5b5ab3e357b3757604053bd206779069efc8fc36fcfc27533b31304db2b6bdd93d4124b560cbfdc871a76b4a790e0c5212d3b7c41b2d6bd8ec20d33864c5a6f1da39a972f65448554119c0f69c3fdb9dd34f399b7adfadf7221a746c5c7d18a06c919f72e92&device_ratio=2"
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
