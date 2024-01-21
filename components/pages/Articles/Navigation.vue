<template>
  <v-btn 
    class="action_btn" 
    size="small" 
    elevation="4" 
    color="indigo-darken-3" 
    @click="goTo"
  > 
    {{ navigateInfo }} 
  </v-btn>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  const props = defineProps({
    to: String
  })

  const { to } = props;
  const navigateInfo = to === "list" 
    ? t('articles.articleList') 
    : t('articles.addArticle');

  const goTo = () => {    
    if(to === "list") {
      navigateTo('/articles')
    } else {
      navigateTo('/articles/add')
    }
  }
</script>
<style lang="scss" scoped>
  .action_btn {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
</style> 
