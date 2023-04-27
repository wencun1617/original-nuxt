<template>
  <ContentDoc path="/frameworks/vue" />

  <ContentDoc path="/frameworks/hello"></ContentDoc>

  <ContentDoc path="/example/file">
    <template #not-found>
      Content module will ignore files and folders starting with a . @@@
    </template>
  </ContentDoc>
  
  <br />

  <ContentDoc path="/example/netlify">
    <template #not-found>
      Partial contents are accessible in search and content lists but are not displayed in content navigation. @@@
    </template>
  </ContentDoc>
</template>

<script setup lang='ts'>

</script>
<style scoped lang='less'></style>