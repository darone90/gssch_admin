<template>
  <div class="User">
    <h2>{{ $t('navigation.welcome') }}</h2>
    <v-list-item
      lines="two"
      prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
      title="Jane Smith"
      :subtitle="$t('navigation.loggedIn')"
    ></v-list-item>
    <v-btn class="User_logout" size="small" elevation="4" color="indigo-darken-3">{{ $t('navigation.logout') }}</v-btn>
  </div>
</template>
<style lang="scss" scoped>
  .User {
    padding: 1rem;
    &_logout {
      margin: 1rem;
      float: right;
    }
  }
</style>
