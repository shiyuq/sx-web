<template>
  <div class="company">
    <ul class="menu">
      <li class="cur">
        <router-link to="guanyuwomen/peixunjidi/">
          企业风采
        </router-link>
        <img src="../company/img/pro_s.png" />
      </li>
    </ul>
    <div class="content">
      <div class="imgList">
        <ul style="width: 1012px;">
          <li v-for="item in imgList" :key="item.id">
            <router-link :to="item.url" :title="item.title">
              <img
                :src="item.imgUrl"
                :alt="item.alt"
                width="239"
                height="180"
              />
              <span>{{ item.content }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
