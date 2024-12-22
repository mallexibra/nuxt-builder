<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(`[post-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("post", route.params.uid as string),
);

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>