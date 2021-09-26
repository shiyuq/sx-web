<template>
  <div class="relatedInfo">
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
  </div>
</template>
<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
