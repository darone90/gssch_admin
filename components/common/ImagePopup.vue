<template>
  <div>
    <v-dialog transition="dialog-bottom-transition" width="auto">
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar color="primary" title="Opening from the bottom"></v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">Hello world!</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
console.log(props.isActive);

</script>

<style lang="scss" scoped></style>
