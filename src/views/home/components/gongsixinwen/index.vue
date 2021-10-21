<template>
  <div class="news">
    <div class="newsLeft">
      <ul class="menu">
        <li
          v-for="(item, index) in mList"
          :key="index"
          :class="{ cur: iscur === index }"
          @mouseover="mouseover(index)"
        >
          <router-link :to="item.src">{{ item.title }}</router-link>
          <img src="./img/pro_s.png" alt="" />
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="des" v-if="news" v-show="iscur == 0">
        <dl v-for="(item, index) in news" :key="index">
          <dt>
            {{ new Date(item.lastUpdateTime).getMonth() + 1 }}
            <span>{{ new Date(item.lastUpdateTime).getDate() }}</span>
          </dt>
          <dd>
            <router-link :to="'/xinwendongtai/' + item.id">
              <h5>
                {{ item.title }}
              </h5>
              <div class="editor-content" v-html="item.content"></div>
            </router-link>
          </dd>
        </dl>
      </div>
      <div class="des" v-if="trends" v-show="iscur == 1">
        <dl v-for="(item, index) in trends" :key="index">
          <dt>
            {{ new Date(item.lastUpdateTime).getMonth() + 1 }}
            <span>{{ new Date(item.lastUpdateTime).getDate() }}</span>
          </dt>
          <dd>
            <router-link :to="'/xinwendongtai/' + item.id">
              <h5>
                {{ item.title }}
              </h5>
              <div class="editor-content" v-html="item.content"></div>
            </router-link>
          </dd>
        </dl>
      </div>
    </div>

    <div class="question">
      <h3 v-if="questions">
        {{ questions[0].typeName }}
      </h3>
      <div class="box">
        <ul>
          <li v-for="(item, index) in questions" :key="index">
            <h5>
              <router-link :to="/xinwendongtai/ + item.id" :title="item.title">
                {{ item.title }}
              </router-link>
            </h5>
            <div v-html="item.content"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss"></style>

<script src="./component.js"></script>
