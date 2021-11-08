<template>
  <div class="information">
    <p>
      热线服务：
      <b>15083931223</b>
      <br />
      <b style="margin-left:99px">13636808088</b>
    </p>
    <ul>
      <li>
        <span>
          <img src="./img/liuyan01.png" alt="" width="40" height="34" />
        </span>
        <input type="text" v-model="name" placeholder="姓名" />
      </li>
      <li>
        <span>
          <img src="./img/liuyan02.png" alt="" width="40" height="34" />
        </span>
        <input type="text" v-model="phone" placeholder="电话" />
      </li>
      <li>
        <span>
          <img src="./img/liuyan03.png" alt="" width="40" height="34" />
        </span>
        <textarea name="content" v-model="consultInfo" placeholder="留言">
        </textarea>
      </li>
      <li class="last">
        <em>
          <button @click="submit">立即提交</button>
        </em>
        <!-- 链接跳转 -->
        <em class="right">
          <a href="">在线咨询服务</a>
        </em>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" src="./style.scss"></style>

<script src="./component.js"></script>
