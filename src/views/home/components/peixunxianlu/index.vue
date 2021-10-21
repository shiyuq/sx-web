<template>
  <div class="product">
    <div class="title">
      <p>XIANLU</p>
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
        @click="click(item)"
      >
        <span>
          <span>{{ item.title }}</span>
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
        <img
          :src="item.imgUrl"
          :alt="item.title"
          width="504"
          height="580"
          class="left"
          @click="click(item)"
        />
        <ul>
          <li
            v-for="(item, cindex) in uList[index].list"
            :key="cindex"
            @click="click(item)"
          >
            <img :src="item.imgUrl" :alt="item.title" />
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
