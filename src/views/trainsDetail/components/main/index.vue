<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="/peixunxianlu/">
            培训线路
          </router-link>
          PRODUCT
        </h4>
        <ul>
          <li
            v-for="(item, index) in addresses"
            :key="index"
            :class="{ cur: item.address === train.address }"
            @click="click(item)"
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
            <div class="clear"></div>
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
              <p class="tel">15083931223</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right" v-if="train">
        <div class="header">
          <h5>
            <span>{{ train.address }}</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">
              主页
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/peixunxianlu' }">
              培训线路
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{ train.address }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="introduction">
          <div class="main">
            <div class="mainContent">
              <div class="proviewBox">
                <div class="top">
                  <img :src="train.trainPhotoUrl" />
                </div>
                <div class="bottom">
                  <ul>
                    <li>
                      <img :src="train.trainPhotoUrl" alt="" />
                    </li>
                  </ul>
                  <i
                    class="el-icon-arrow-left"
                    style="position:absolute;left:0;top:40px;color:#999"
                  ></i>
                  <i
                    class="el-icon-arrow-right"
                    style="position:absolute;right:0;top:40px;color:#999"
                  ></i>
                </div>
              </div>
              <div class="show">
                <h2>{{ train.title }}</h2>
                <span>不忘初心，牢记使命！</span>
                <ul>
                  <li>
                    咨询热线：
                    <span>15083931223</span>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      立即咨询
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="clear"></div>
            <div class="recommend">
              <p>推荐线路</p>
              <div class="relevant">
                <dl v-for="(item, index) in rList" :key="index">
                  <dt>
                    <router-link :to="item.url">
                      <img :src="item.src" :alt="item.title" />
                    </router-link>
                  </dt>
                  <dd>
                    <router-link :to="item.url">{{ item.title }}</router-link>
                  </dd>
                </dl>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <div class="routeIntrocuction">
          <ul>
            <li>
              <h3>线路详情</h3>
            </li>
          </ul>
        </div>
        <div class="routeContent">
          <div class="text">
            <div v-html="train.content"></div>
          </div>
        </div>
        <div class="information">
          <p>
            咨询：{{ train.title }}
            <br />
            <font>*&nbsp;为必填项</font>
          </p>
          <ul>
            <li class="area">
              <font>*</font>
              <textarea
                name="content"
                placeholder="请填写您要咨询的信息"
              ></textarea>
            </li>
            <li v-for="(item, index) in putList" :key="index">
              <label>
                <font>{{ item.required }}</font>
                {{ item.title }}
              </label>
              <input type="text" :placeholder="item.value" />
            </li>
            <li class="submit">
              <input type="submit" value="提交您的咨询信息" />
            </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
