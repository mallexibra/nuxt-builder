<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSectionSlice>([
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
  <div class="max-w-3xl flex flex-col gap-3 px-6 mx-auto mt-12">
    <PrismicImage :field="slice.primary.image" class="rounded-xl" />
    <p class="text-center font-extralight text-2xl">{{ slice.primary.title }}</p>
    <PrismicLink :field="slice.primary.button" class="text-center font-semibold w-max block mx-auto bg-purple-600 rounded-lg px-4 text-white py-2" />
  </div>

  </section>
</template>
