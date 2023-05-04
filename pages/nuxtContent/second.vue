<template>
  <ContentRenderer :value="frameworksList || []">
    <h3>list of frameworks</h3>
    <ul>
      <li v-for="framework in frameworksList" :key="framework._path">
        <nuxt-link :to="framework._path">{{ framework.title }}</nuxt-link>
        <ContentRendererMarkdown :value="framework" v-if="framework._type == 'markdown'" />
      </li>
    </ul>
  </ContentRenderer>

  <ContentRenderer :value="examplesList || []">
    <h3>list of frameworks</h3>
    <ul>
      <li v-for="example in examplesList" :key="example._path">
        <nuxt-link :to="example._path">{{ example.title }}</nuxt-link>
        <ContentRendererMarkdown :value="example" />
      </li>
    </ul>
  </ContentRenderer>
</template>

<script setup lang="ts">
// Note that when you use default slot and <ContentRendererMarkdown> in your template 
// you need to pass components to <ContentRendererMarkdown>
const components = {
  p: 'CustomParagraph'
}

// Fetch and return the list of matched contents based on the query.
// list of frameworks
const { data: frameworksList } = await useAsyncData("frameworks-list", () =>
  queryContent("frameworks").find()
);
console.log("🚀 ~ file: second.vue ~ frameworksList:", frameworksList);

// Fetch and return the list of matched contents based on the query.
// list of examples
const { data: examplesList } = await useAsyncData("examples-list", () =>
  queryContent("examples").find()
);
console.log("🚀 ~ file: second.vue: ~ examplesList:", examplesList);
</script>
<style scoped lang="less"></style>
