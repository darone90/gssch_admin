<template>
  <v-list nav>
    <v-list-item v-for="(item, index) in menuItems"
    key="index"
    :prepend-icon="item.icon" 
    :title="$t('navigation.' + item.label)"
    :value="item.label"
    @click="pageChange(index)"
    ></v-list-item>
  </v-list>
</template>
<script setup lang="ts">
const router = useRouter();
const menuItems = [
  {label: 'messages', icon: "mdi-email"},
  {label: 'articles', icon: "mdi-newspaper-variant-outline"},
  {label: 'shops', icon: "mdi-store"},
  {label: 'management', icon: "mdi-account-supervisor-circle"},
  {label: 'annoucement', icon: "mdi-bullhorn"},
  {label: 'documents', icon: "mdi-file-document-edit"},
  {label: 'statistics', icon: "mdi-state-machine"}
];
const pageChange = (index: number):void => {
  const label = menuItems[index].label;
  let path ="/";
  if(label !== "statistics") path +=label;
  router.push({path})
}

</script>