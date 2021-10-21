<template>
  <div class="home">
    <Swipe />
    <Search />
    <Peixunxianlu />
    <Sidabaozhang />
    <Peixunmoshi />
    <About />
    <Qiyefengcai />
    <Dianhuazixun />
    <Gongsixinwen :news="news" :trends="trends" :questions="questions" />
    <Link />
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
