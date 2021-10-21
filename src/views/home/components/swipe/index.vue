<template>
  <div class="banner">
    <el-carousel indicator-position="outside" height="500px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img class="carousel" :src="item.imgUrl" width="100%" height="500px" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
