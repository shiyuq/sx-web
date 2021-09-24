<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="guanyuwomen">
            关于我们
          </router-link>
          ABOUT US
        </h4>
        <ul>
          <li v-for="(item, index) in des" :key="index">
            <router-link :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
        <h4 class="consult">
          相关资讯
        </h4>
        <div class="content">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <router-link :to="item.url" :title="item.title">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="contact">
          <div class="contactUs">
            <h5 class="subcontact">
              <router-link to="lianxiwomen">
                联系我们
              </router-link>
            </h5>
          </div>
          <div class="subcontent">
            <img src="../../../../assets/map.png" />
            <p>
              <span class="subspan">咨询热线：</span>
            </p>
            <p class="subtel">15083931223</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>关于我们</span>
          </h5>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>您的位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>关于我们</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content">
          <div class="picture">
            <img src="./img/bg.jpg" />
          </div>
          <div>
            <span class="text">
              &nbsp; &nbsp; &nbsp; &nbsp;
              第一师阿拉尔市是南疆兵团中心城市，拥有丰富的自然文化资源和悠久的历史人文底蕴。这里是世界四大文明的交汇地（中原华夏文化、印度佛教文化、阿拉伯伊斯兰文化、希腊罗马文化）。英国历史学家汤因比曾经说过，如果可以选择出生的时代与地点，他愿意出生在公元一世纪的中国新疆，因为当时那里处于佛教文化、印度文化、希腊文化、波斯文化和中国文化等多种文化的交汇地带。美国人类学家摩尔根说“塔里木河流域是世界文化的摇篮，世界文化的钥匙遗失在了塔克拉玛干，找到这把钥匙，世界文化的大门便打开了”。
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;
              这里是塔里木河起源地。全长2437公里的塔里木河是塔河流域各族人民群众的母亲河，滋养了为数众多的南疆各族人民，孕育了塔里木河文明，是人类文明的摇篮之一。阿克苏河、喀什噶尔河、叶尔羌河、和田河四大源流在师市的十六团新开岭镇汇聚形成主流，开始统称塔里木河。
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;
              这里是丝绸之路必经地。师市不仅是古代绿洲丝绸之路的必经地，也是丝绸之路经济带核心区（新疆）中线的重要战略支点。师市正借助“一带一路”国家合作机制和“中巴经济走廊”“中西亚经济走廊”，努力建设国家布局的“新安西四镇”之区域中心城市。
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;
              这里是昆岗文化发掘地。阿拉尔在汉唐称为昆岗，在师市境内有方圆20—30公里的永宁和昆岗两个古墓群，是四千年前部落族群繁衍生存的历史见证。西汉宣帝派郑吉开始了屯垦戍边的历史，其驻守遗地在库（车）阿（拉尔）一带，数千年来中央王朝对新疆的治理和开发绵延不断。新中国成立后，师市人民在塔克拉玛干沙漠的亘古荒原上奏响了“开发塔里木、建设阿拉尔”的凯歌。
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;
              这里是三五九旅传承地。1949年11月，由王震率领的其所属中国人民解放军第一野战军第一兵团第二军步兵五师（前359旅）进驻阿克苏，1953年6月，步兵五师奉命改编为中国人民解放军新疆军区农业建设第一师，次年，归属新疆军区生产建设兵团。“生在井冈山、长在南泥湾、转战数万里、屯垦在天山”是这支光荣劲旅从革命战争到维稳戍边的辉煌写照。
            </span>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
