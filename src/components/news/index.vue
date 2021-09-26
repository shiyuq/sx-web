<template>
  <div class="news">
    <div v-for="(item, index) in contentRightList" :key="index">
      <h4>
        <router-link :to="item.url">{{ item.title }}</router-link>
      </h4>
      <ul>
        <li
          v-for="(uItem, uIndex) in contentRightList[index].uList"
          :key="uIndex"
        >
          <router-link :to="uItem.url">
            {{ uItem.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
