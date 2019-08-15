<template>
  <div v-cloak>
    <template v-if="allPagesLoaded">
      <h1><span v-html="pageContent.title.rendered"></span></h1>
      <div v-html="pageContent.content.rendered"></div>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import Loader from "../partials/Loader.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      page: "page",
      allPagesLoaded: "allPagesLoaded"
    }),

    pageContent() {
      return this.page(this.$route.params.pageSlug);
    },

    title() {
      switch (this.$route.params.pageSlug) {
        case "all-or-nothing-thinking":
          return "All or Nothing Thinking";
          break;
        case "discounting-positives":
          return "Discounting Positives";
          break;
        case "magnification-or-minimization":
          return "Magnification or Minimization";
          break;
        case "labeling":
          return "Labeling";
          break;
        case "personalization":
          return "Personalization";
          break;
        case "overgeneralization":
          return "Overgeneralization";
          break;
        case "jumping-to-conclusions":
          return "Jumping to Conclusions";
          break;
        case "mind-reading":
          return "Mind Reading";
          break;
        case "fortune-telling":
          return "Fortune Telling";
          break;
        case "emotional-reasoning":
          return "Emotional Reasoning";
          break;
        case "self-blame":
          return "Self Blame";
          break;
        case "other-blame":
          return "Other Blame";
          break;
        case "mental-filter":
          return "Mental Filter";
          break;
        case "should-statements":
          return "Should Statements";
          break;
        case "about":
          return "About";
          break;
      }
    }
      
  },

  data() {
    return {

    }
  },

  head: {
    title: function () {
      return {
        inner: this.title,
        separator: '-',
        complement: 'Thinking Errors'
      }
    },
  },

  components: {
    Loader
  },

  mounted() {
    if (this.$route.params.pageSlug == 'cbt-app') {
      this.$parent.menuOpen = true;
    }
  }
};
</script>
