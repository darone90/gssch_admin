<template>
  <div>
    <v-card class="wrap">
      <v-card-title>
        {{ $t('articles_add.mainImage') }}
      </v-card-title>
      <v-card-text>
        <v-text-field label="tekst alternatywny" variant="solo" v-model="props.altText" />
        <div v-if="!src">
          {{ $t('articles_add.addImage') }}
        </div>
        <img v-else :src="src" :alt="props.altText" />
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="src" size="small" elevation="4" color="indigo-darken-3">
          {{ $t('articles_add.remove') }}
        </v-btn>
        <v-file-input 
          clearable 
          :label="$t('articles_add.change')"
          @change="fileUpload"
        >
        </v-file-input>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const props = defineProps({
  altText: String,
});

const file = ref<File | null>(null);
const src = ref<string>('');

function fileUpload(event: HTMLInputEvent) {
  const files: FileList | null = event.target.files;
  if (files) {
    file.value = files[0];
    src.value = URL.createObjectURL(file.value)
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  margin-bottom: 1.5rem;
}
</style>
