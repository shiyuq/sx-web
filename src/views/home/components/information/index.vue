<template>
  <div class="information">
    <p>
      热线服务：
      <b>13991985022</b>
    </p>
    <ul>
      <li v-for="(item, index) in List" :key="index">
        <span>
          <img :src="item.imgUrl" alt="" width="40" height="34" />
        </span>
        <input
          type="text"
          :name="item.name"
          :value="item.value"
          :id="item.id"
          :class="item.class"
          onfocus="if(this.value === 'item.value')this.value=''"
          onblur="if(this.value === '')this.value='item.value'"
        />
      </li>
      <li>
        <span>
          <img src="./img/liuyan03.png" alt="" width="40" height="34" />
        </span>
        <textarea
          name="content"
          id="txtMessage"
          onfocus="if(this.value =='留言')this.value=''"
          onblur="if(this.value=='')this.value='留言'"
        >
留言</textarea
        >
      </li>
      <li class="last">
        <em>
          <button type="submit">立即提交</button>
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
