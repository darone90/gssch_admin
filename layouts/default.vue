<template>
  <div>
    <div>Header</div>
    <MainMenu class="Main"/>
    <slot/>
    <div>footer</div>
  </div>
</template>
<script setup>
import MainMenu from "~/components/layouts/MainMenu"

</script>
 