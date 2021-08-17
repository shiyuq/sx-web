<template>
  <div class="header">
    <div class="header-top">
      <div class="container">
        <ul>
          <li class="consult">
            <a href="">在线咨询</a>
          </li>
          <li>
            <a href="">联系我们</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-logo">
      <div class="header-logo-left">
        <h1>
          <a href="/">
            <img src="@/assets/logo1.png" alt="红色传承" />
          </a>
        </h1>
        <div>
          <h3 style="color: #C51821; font-weight: bold; font-size: 20px;">
            陕西红色传承文化培训有限公司
          </h3>
          <h3 style="color: #0C0C0C; font-weight: bold; font-size: 20px;">
            专注党性教育培训 红色文化传承
          </h3>
        </div>
      </div>
      <div class="header-logo-right">
        <p>全国统一服务热线：</p>
        <b>13991985022</b>
        <b>029-83429399</b>
      </div>
    </div>
    <div class="header-bar">
      <div class="nav">
        <ul>
          <li
            v-for="(item, index) in navList"
            :key="item.router"
            :class="
              index === currentActiveTabIndex
                ? 'bar-active'
                : 'bar-active-hover'
            "
            @click="selectTab(item, index)"
          >
            <img src="../header/img/header_nav_cur02.png" alt="" />
            <span v-if="index === currentActiveTabIndex" style="color: black;"
              >{{ item.name }}
            </span>
            <span v-else style="color: #fff;" @click="selectTab(item, index)">{{
              item.name
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
