<template>
  <div class="link">
    <h3>
      <a>
        <img src="./img/link.jpg" width="94" height="63" />
      </a>
    </h3>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <a :href="item.src">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" src="./style.scss"></style>

<script src="./component.js"></script>
