<template>
  <div class="aboutUs">
    <div class="title">
      <p>WOMEN</p>
      <h3>
        <router-link to="guanyuwomen/">关于我们</router-link>
      </h3>
    </div>
    <dl>
      <dt>
        <img
          src="./img/公司大楼.jpg"
          frameborder="0"
          width="483"
          height="251"
        />
      </dt>
      <dd>
        <p>
          三五九旅干部培训中心，隶属于三五九旅干部学院，在以“践行三五
          九旅精神、胡杨精神和兵团精神，传承红色基因，演续红色血脉”为主
          题，深入推进党史专题教育培训课堂，充分发挥兵团解放新疆、建设新
          疆、屯垦戍边、维稳戍边丰富红色资源的独特优势的前提下，并合力与
          “全国党建联盟体”共同打造出暨韶山、井冈山、瑞金、古田、遵义、延
          安等全国红色教育、爱国主义教育基地线路，以专题教学、现场教学、体
          验教学、激情教学、案例式拓展教学、研讨式互动教学以及情感教学、场
          景教学等独特教学方式，让学员“扮演一名军垦战士、深入一处历史现
          场、参观一遍红色场馆...
        </p>
        <div class="btn">
          <router-link to="/guanyuwomen/">
            查看详情+
          </router-link>
          <router-link to="/rongyuzizhi/">
            荣誉资质
          </router-link>
          <router-link to="/mingshifengcai">
            专业团队
          </router-link>
        </div>
      </dd>
    </dl>
    <div class="title">
      <h3>
        <router-link to="">阿拉尔市介绍</router-link>
      </h3>
    </div>
    <ul class="tixi">
      <li v-for="item in imgList" :key="item.id">
        <img :src="item.imgUrl" :alt="item.alt" width="221" height="155" />
        <h4>{{ item.title }}</h4>
        <p>{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
