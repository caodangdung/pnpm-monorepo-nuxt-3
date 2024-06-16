<template>
  <suspense>
    <v-app>
      <v-app-bar>
        <slot name="header"></slot>
      </v-app-bar>

      <v-main>
        <slot name="content"></slot>
      </v-main>

      <v-footer>
        <slot name="footer"></slot>
      </v-footer>
    </v-app>
    <!-- loading state via #fallback slot -->
    <template #fallback> Loading... </template>
  </suspense>
</template>