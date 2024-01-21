<template>
  <div class="wrap">
    <div class="wrap_header">
      <h2>{{ $t('articles_add.addArticle') }}</h2>
      <v-switch v-model="active" color="primary" label="Aktywny" hide-details></v-switch>
    </div>
    <MainData :title="title" :author="author" :date="date" />
    <MainImage :altText="altText" />
    <h3 class="wrap_title">{{ $t('articles_add.articleContent') }}:</h3>
    <Editor :modelValue="text" />
    <v-btn size="large" elevation="4" color="indigo-darken-3" class="submit"> {{ $t('articles_add.save') }} </v-btn>
  </div>
</template>

<script setup lang="ts">
import Editor from '~/components/common/Editor.vue';
import MainData from './MainData.vue';
import MainImage from './MainImage.vue';
import { ref } from 'vue';

const author = ref<string>('');
const title = ref<string>('');
const date = ref<Date>(new Date());
const text = ref<string>('');
const altText = ref<string>('');
const active = ref<boolean>(true);

</script>

<style scoped lang="scss">
.wrap {
  &_header {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 2rem;
    h2 {
      margin-right: 70%;
    }
  }
  &_title {
      margin-bottom: 1rem;
  }
  .submit {
    margin: 1rem 0 2rem 0;
  }
}
</style>
