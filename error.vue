<template>
  <div class="background">
    <v-card class="mx-auto error" max-width="344" variant="outlined">
      <v-card-item>
        <div>
          <div class="text-overline mb-1">
            {{ $t('error.errorOccure').toUpperCase() }}
          </div>
          <div class="text-h6 mb-1">
            {{ $t(`error.${error?.statusMessage}` || 'error.unexpected') }}
          </div>
          <div class="text-caption">{{ $t('error.ContactDeveloper') }}</div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn variant="outlined" @click="handleError">
          {{ $t('error.returnToLoginPage') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>
<style lang="scss" scoped>
.error {
  z-index: 20;
  background-color: white;
}
.background {
  padding-top: 100px;
  width: 100%;
  height: 100vh;
  background-image: url("/error/background.jpg");
}
</style>
