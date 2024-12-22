<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ButtonLinkSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
  <PrismicLink :field="slice.primary.link" class="linkB" />
  </section>
</template>

<style scoped>
section:deep(.linkB) {
  max-width: max-content;
  display: block;
  background-color: rgb(11, 181, 141);
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  margin: 12px auto;
}
</style>
