<template>
  <div class="recommendRoute">
    <h4>推荐线路</h4>
    <div class="introContent">
      <dl v-for="(item, index) in introContentList" :key="index">
        <dt>
          <router-link :to="item.url">
            <img :src="item.imgUrl" :alt="item.content" />
          </router-link>
        </dt>
        <dd>
          <router-link :to="item.url">{{ item.content }}</router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>
<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
