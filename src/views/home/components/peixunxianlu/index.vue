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
    <div v-if="trains">
      <div class="picBox">
        <ul>
          <li
            v-for="(item, cindex) in trains.slice(0, 6)"
            :key="cindex"
            @click="click(item)"
          >
            <img :src="item.trainPhotoUrl" :alt="item.title" />
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
