// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  call_to_action: defineAsyncComponent(
    () => import("./CallToAction/index.vue"),
  ),
  hero_section: defineAsyncComponent(() => import("./HeroSection/index.vue")),
  rich_text: defineAsyncComponent(() => import("./RichText/index.vue")),
  tes_ting: defineAsyncComponent(() => import("./TesTing/index.vue")),
});
