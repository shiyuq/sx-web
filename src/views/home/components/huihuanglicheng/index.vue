<template>
  <div class="innovation">
    <div class="title">
      <p>不忘初心，牢记使命</p>
      <h3>辉煌历程</h3>
    </div>
    <ul class="menu">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ cur: iscur === index }"
        @mouseover="setIscur(index)"
        @mouseenter="setAutoplay()"
        @mouseleave="changeAutoplay()"
      >
        <img src="./img/pro_s.png" alt="" />
        {{ item.title }}
      </li>
    </ul>
    <div class="content">
      <el-carousel
        indicator-position="outside"
        ref="remarkCarusel"
        height="100px"
        @change="change"
        :autoplay="autoplay"
      >
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <div class="wen">
            <p>{{ item.content }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
