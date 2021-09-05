<template>
  <div class="aboutUs">
    <div class="title">
      <p>ABOUT US</p>
      <h3>
        <router-link to="http://sxhscc.cn/a/guanyuwomen/">关于我们</router-link>
      </h3>
    </div>
    <dl>
      <dt>
        <iframe
          src="https://v.youku.com/v_show/id_XMzQ3MjE2MDA4MA==.html?spm=a2h0k.11417342.soresults.dtitle"
          frameborder="0"
          width="483"
          height="251"
        ></iframe>
      </dt>
      <dd>
        <p>
          三五九旅培训有限公司是专业从事党员党性教育培训和学习考察、乡村振兴和城乡社区治理及扶贫开发与脱贫攻坚先进经验学习宣传推广的红色文化体验式培训机构，专注为全国党政机关、企事业单位、大专院校、农村及非公经济组织提供党性党建、革命传统、爱国主义、理想信念、乡村振兴、城乡社区治理、扶贫开发与脱贫攻坚、新型职业农民教育培训及团队拓展训练等相关服务。
          我公司立足革命老区延安和铜 ...
        </p>
        <div class="btn">
          <router-link to="http://sxhscc.cn/a/guanyuwomen/">
            查看详情+
          </router-link>
          <router-link to="http://sxhscc.cn/a/rongyuzizhi/rongyuzizhi/">
            荣誉资质
          </router-link>
          <router-link to="http://sxhscc.cn/a/rongyuzizhi/tuandui/">
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
