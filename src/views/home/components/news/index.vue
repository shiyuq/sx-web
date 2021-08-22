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
      <div class="content">
        <div
          v-for="(item, index) in cList"
          :key="index"
          class="nlist"
          v-show="iscur === index"
        >
          <dl>
            <dt>
              <router-link :to="item.src" :title="item.title">
                <img
                  :src="item.imgUrl"
                  :alt="item.title"
                  width="228"
                  height="164"
                />
              </router-link>
            </dt>
            <dd>
              <h3>
                <router-link :to="item.src">
                  {{ item.title }}
                </router-link>
              </h3>
              <p>
                {{ item.content }}
              </p>
            </dd>
          </dl>
          <ul>
            <li>
              <router-link :to="item.subSrc" :title="item.subTitle">
                {{ item.subTitle }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="question">
      <h3>
        <router-link to="/gongsixinwen/changjianwentijieda/">
          常见问题解答
        </router-link>
      </h3>
      <div class="box">
        <ul>
          <li v-for="(item, index) in List" :key="index">
            <h5>
              <router-link :to="item.src" :title="item.title">{{
                item.title
              }}</router-link>
            </h5>
            <p>{{ item.content }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss"></style>

<script src="./component.js"></script>
