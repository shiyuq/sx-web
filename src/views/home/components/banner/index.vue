<template>
  <div class="banner">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img class="carousel" :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
    <div class="search">
      
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
