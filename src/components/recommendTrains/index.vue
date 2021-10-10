<template>
  <div class="recommendTrains">
    <h4>推荐路线</h4>
    <div class="recommend">
      <dl v-for="(item, index) in dList" :key="index">
        <dt>
          <router-link :to="item.url" :title="item.title">
            <img :src="item.src" :alt="item.title" />
            {{ item.title }}
          </router-link>
        </dt>
      </dl>
    </div>
  </div>
</template>
<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
