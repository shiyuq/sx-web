<template>
  <div class="product">
    <div class="title">
      <p>PRODUCT</p>
      <h3>
        <router-link to="peixunxianlu/">
          培训路线
        </router-link>
      </h3>
    </div>
    <ul class="menu">
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ cur: iscur === index }"
        @mouseover="setCurrentIndex(index)"
      >
        <span>
          <router-link :to="item.url">{{ item.title }}</router-link>
          <img :src="item.imgUrl" width="18" height="9" />
        </span>
      </li>
    </ul>
    <div class="picBox">
      <div
        class="plist"
        v-for="(item, index) in pList"
        :key="index"
        v-show="index === iscur"
      >
        <router-link :to="item.url" :title="item.title">
          <img
            :src="item.imgUrl"
            :alt="item.title"
            width="504"
            height="580"
            class="left"
          />
        </router-link>
        <ul>
          <li v-for="(ele, cindex) in uList[index].list" :key="cindex">
            <img :src="ele.imgUrl" :alt="ele.title" />
            <span>{{ ele.title }}</span>
            <router-link :to="ele.url">点击查看详情</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
