<template>
  <div class="widget pages">
    <div v-if="allPagesLoaded">
      <span v-for="page in somePages(limit)" :key="page.id">
        <div v-if="page.slug != 'home' && page.slug != 'menu' && page.slug != 'faq' && page.slug != 'contacts'">
          <router-link :to="homePath+page.slug" v-html="page.title.rendered"></router-link><br>
        </div>
      </span>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["limit"],
  data() {
    return {
      homePath: homePath
    }
  },
  computed: {
    ...mapGetters({
      somePages: "somePages",
      allPagesLoaded: "allPagesLoaded"
    })
  },
  mounted() {
    
  }
};
</script>
