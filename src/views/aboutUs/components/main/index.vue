<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h4 class="title">
          <router-link to="http://sxhscc.cn/a/guanyuwomen/">
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
            <li v-for="(item, index) in List" :key="index">
              <router-link :to="item.url" target="_blank" :title="item.title">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="contact">
          <div class="contactUs">
            <h5 class="subcontact">
              <router-link to="http://sxhscc.cn/a/lianxiwomen/" target="_blank">
                联系我们
              </router-link>
            </h5>
          </div>
          <div class="subcontent">
            <img src="./img/map.jpg" />
            <p>
              <span class="subspan">咨询热线：</span>
            </p>
            <p class="subtel">13991985022</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="header">
          <h5>
            <span>关于我们</span>
          </h5>
          <span>
            <em>您的位置：</em>
            <router-link v-for="item in aList" :key="item.id" :to="item.url">
              {{ item.title }}
              <em>{{ item.icon }}</em>
            </router-link>
          </span>
        </div>
        <div class="content">
          <div class="picture">
            <img src="./img/bg.jpg" />
          </div>
          <div>
            <span class="text">
              &nbsp; &nbsp; &nbsp; &nbsp;
              陕西红色传承文化培训有限公司是专业从事党员党性教育培训和学习考察、乡村振兴和城乡社区治理及扶贫开发与脱贫攻坚先进经验学习宣传推广的红色文化体验式培训机构，专注为全国党政机关、企事业单位、大专院校、农村及非公经济组织提供党性党建、革命传统、爱国主义、理想信念、乡村振兴、城乡社区治理、扶贫开发与脱贫攻坚、新型职业农民教育培训及团队拓展训练等相关服务。
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;
              我公司立足革命老区延安和铜川照金，与井冈山、瑞金、遵义、韶山、兰考、西柏坡、红旗渠、大别山、武汉、古田、重庆、沂蒙老区等全国二十多处著名红色教育基地的干部学院、党校、院校、农村党校及红色培训机构建立了紧密的合作关系。依托延安及铜川得天独厚的红色文化资源，与中国延安干部学院、延安市委党校、延安干部培训学院有着良好的合作与联合办学经验，严格遵从上级部门对红色教育培训的最新指示，根据委培单位的需求和特点，积极开发出符合不同培训对象的多元化的培训课程及模式。通过不断更新培训理念，创新培训内容，改进培训方式，将感性体验与理性认知升华相结合、直观感受与现场教学相结合，使党性培训的形式和内容更加立体丰富，成功推出了“实景感受、专题教学、现场教学、仪式教学、情景教学、激情教学、音像教学、名篇诵读、拓展体验、信念教育、互动访谈、文化自信”等为一体的培训模式，形成了独具特色的“历史文化+革命传统+理想信念+启迪思想+引导生活”的红色文化培训体系。
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;
              为满足委培单位不同的教学需求，提供规范、专业的红色教育培训服务，规范党员教育培训工作，严格执行相关培训制度，积极落实严以治教、严以治学的要求，保持良好的学风，我公司建立了完善的红色教育专家库，并配备了一支经验丰富、纪律严明、服务专业、爱岗敬业的师资和后勤保障队伍。
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;
              红色传承，不忘初心，牢记使命，传承红色基因，弘扬延安精神。在上级部门的指导和广大委培单位的热情支持下，陕西红色传承文化培训有限公司期待与您一起开启坚定理想信念的大门，向着为实现中华民族伟大复兴的目标前行！
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
