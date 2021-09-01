<template>
  <div class="search">
    <div class="container">
      <p>
        大家都在搜：
        <em class="keyWords">
          <router-link
            to="http://sxhscc.cn/plus/search.php?keyword=%E5%9F%BA%E5%9C%B0"
            class="words"
          >
            基地
          </router-link>
          <router-link
            to="http://sxhscc.cn/plus/search.php?keyword=%E7%BA%BF%E8%B7%AF"
            class="words"
          >
            线路
          </router-link>
          <router-link
            to="http://sxhscc.cn/plus/search.php?keyword=%E5%BB%B6%E5%AE%89"
            class="words"
          >
            塔里木河
          </router-link>
          <router-link
            to="http://sxhscc.cn/plus/search.php?keyword=%E6%AD%A6%E6%B1%89"
            class="words"
          >
            胡杨林
          </router-link>
          <router-link
            to="http://sxhscc.cn/plus/search.php?keyword=%E8%AF%BE%E7%A8%8B"
            class="words"
          >
            课程
          </router-link>
        </em>
      </p>
      <div class="sbox">
        <form name="formsearch" action="">
          <input type="hidden" name="kwtype" value="0" />
          <input
            type="text"
            name="q"
            value="请输入您要搜索的关键词"
            id="searchkeywords"
            onfocus="this.value=''"
          />
          <span>
            <button></button>
          </span>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
