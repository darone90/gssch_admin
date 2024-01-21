<template>
<div class="wrap">
  <h3>{{ $t('articles_add.basicInformations') }}</h3>
  <v-text-field label="Autor" variant="solo" v-model="props.title"/>
  <v-text-field label="Tytuł" variant="solo" v-model="props.author"/>
  <div class="wrap_date">
    <span>{{ $t('articles_add.date') }}:</span>
    <input
      type="date"
      v-model="props.date"
    />
  </div>
</div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  author: String,
  date: Date,
})
</script>

<style lang="scss" scoped>
  .wrap {
    h3 {
      margin-bottom: 1rem;
    }
    &_date {
      margin-bottom: 1.5rem;
      span {
        margin-right: 2rem;
      }
      input {
        background-color: #fff;
        padding: 2px;
      }
    }
  }
</style>