<template>
  <div m-4 flex>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单-当前的语种：{{$i18n.locale}}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu >
          <el-dropdown-item v-for="item in locales" :key="item" :command="item">
            {{item}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <div m-4 font-oblique font-600 text-red-5>
    {{$t('action.favourite')}}
  </div>
  <div m-4 font-oblique font-600 text-red-5>
    {{$t('action.edit')}}
  </div>
  <div m-4 font-oblique font-600 text-red-5>
    {{$t('account.follow')}}
  </div>
</template>

<script setup lang='ts'>
import type { ComponentInternalInstance } from '@vue/runtime-dom';
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const { appContext } = getCurrentInstance() as ComponentInternalInstance
const locales = appContext.config.globalProperties.$i18n.availableLocales

const handleCommand = (command: string) => {
  console.log('navigator.language-系统语言',navigator.language)
  locale.value = command
}
</script>
<style scoped lang='less'>
</style>