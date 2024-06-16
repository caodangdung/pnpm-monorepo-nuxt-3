<template>
  <nx3-app> </nx3-app>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const config = useRuntimeConfig();

    let userName = ref("");
    let rulesName = [
      (value) => {
        return !!value || "You must enter a first name.";
      },
    ];

    const submit = (values) => {};

    return { userName, submit, rulesName };
  },
};
</script>