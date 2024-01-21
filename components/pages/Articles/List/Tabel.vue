<template>
  <v-table class="table">
    <thead>
      <th>
        {{ $t('articles.title') }}
      </th>
      <th>
        {{ $t('articles.date') }}
      </th>
      <th>
        {{ $t('articles.author') }}
      </th>
      <th>
        {{ $t('articles.status') }}
      </th>
      <th width="190">
        {{ $t('articles.actions') }}
      </th>
    </thead>
      <tr v-for="exp in temporaryExample" class="table_row" height="50">
        <td class="text-center">{{ exp.title }}</td>
        <td class="text-center">{{ exp.date }}</td>
        <td class="text-center">{{ exp.author}}</td>
        <td class="text-center">{{ exp.Status }}</td>
        <td>
          <v-btn 
            class="action_btn"
            size="small" 
            elevation="4" 
            color="indigo-darken-3"
          >
          {{ $t('articles.edit') }}
          </v-btn>
          <v-btn
            class="action_btn" 
            size="small" 
            elevation="4" 
            color="indigo-darken-3"
          >
          {{ $t('articles.remove') }}
          </v-btn>
        </td>
      </tr>
  </v-table>
</template>

<script setup lang="ts">
  const temporaryExample = [
    {
      title: "test",
      date: "13.10.1990",
      author: "Dariusz",
      Status: "Aktywny",
    },
    {
      title: "test",
      date: "13.10.1990",
      author: "Dariusz",
      Status: "Aktywny",
    },
    {
      title: "test",
      date: "13.10.1990",
      author: "Dariusz",
      Status: "Aktywny",
    },
  ]
</script>

<style scoped lang="scss">
.table {
  padding: 1rem;
  margin-bottom: 2rem;
}
.action_btn {
  margin-right: 15px;
}
</style>