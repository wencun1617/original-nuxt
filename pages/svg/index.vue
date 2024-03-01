<template>
  <div>
    <svg width="241" height="199" viewBox="0 0 241 199" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 81C72 63 -44 157 23 135C-3 218 46 197 58 192C70 187 39 22 80 33C121 44 -33 95 66 64C165 33 307 -37 204 27C101 91 35.5815 91 80 91C167 91 197 -9 182 48M135 91C133 192 101 126 109 140C117 154 155 98 182 119C203.6 135.8 172.333 147.333 154 151" stroke="#7B924C"/>
    </svg>
  </div>
</template>

<script setup lang='ts'>

</script>
<style scoped lang='less'>
@media (prefers-reduced-motion) {
  path {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@keyframes grow {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 600px;
    opacity: 0;
    stroke: #00aeef;
  }
  10% {
    opacity: 1;
  }
  40% {
    stroke-dasharray: 600px 0;
    stroke: #ed1c24;
  }
  /* Moving back */
  85% {
    stroke-dasharray: 600px 0;
    stroke: #8cd790;
  }
  95%,
  to {
    stroke-dasharray: 0 600px;
    stroke: #f69f37;
  }
}
path {
  stroke-dashoffset: 1px;
  stroke-dasharray: 600px 0;
  animation: grow 10s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 0s;
}
</style>