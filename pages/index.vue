<template>
  <div class="Main">
    <h1>Statystyki</h1>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useHead({
  title: t('index.title')
})
</script>
<style lang="scss" scoped>
    .Main {
        margin-left: 40rem;
    }
</style>
