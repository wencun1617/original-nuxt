<template>
  <ContentDoc path="/frameworks/vue" :excerpt="true">
    <template #empty>
      <h1>Document is empty</h1>
    </template>
  </ContentDoc>

  <br />
  <hr />

  <ContentDoc
    path="/frameworks/hello"
    :excerpt="true"
    #default="{ doc: { description } }"
  >
    <div>{{ description }}</div>
  </ContentDoc>

  <br />
  <hr />

  <ContentDoc path="/example/file">
    <template #not-found>
      Content module will ignore files and folders starting with a . @@@
    </template>
  </ContentDoc>

  <br />
  <hr />

  <ContentDoc path="/example/netlify">
    <template #not-found>
      Partial contents are accessible in search and content lists but are not
      displayed in content navigation. @@@
    </template>
  </ContentDoc>
</template>

<script setup lang="ts"></script>
<style scoped lang="less"></style>
