<template>
<Page>
  <div class="home">
    <img alt="Vue logo" src="../assets/van.png">
    <HelloWorld msg="Breizh Vidéo prend la route"/>

  </div>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from "@/components/Page.vue";

export default {
  name: 'Home',
  components: {Page},
}
</script>
