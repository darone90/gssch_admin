<template>
  <v-card
    class="search"
    color="grey-lighten-3"
    max-width="400"
  >
    <v-card-text>
      <v-text-field
        :loading="false"
        density="compact"
        variant="solo"
        :label="$t('articles.findArticle')"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click=""
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
  .search {
    margin-bottom: 2rem;
  }
</style>
