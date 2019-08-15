<template>
  <div>
    <div style="height:40px;"></div>
    <div class="footer site-footer">
      <div class="footer-content" style="padding-top:12px;">
        
        <span style="float:left;"  @click="menuClose()"><router-link to="/about">About</router-link></span>
        <span style="float:right;" href="https://github.com/thinking-errors">v0.1-beta</span>

        <!-- <div style="float:left;" @click="toTop"><router-link to="/">Thinking Errors</router-link></div>
        <div style="float:right;"><router-link to="/cbt-app">CBT App</router-link></div> -->

      </div>
      
    </div>
  </div>
</template>

<script>
import PagesWidget from "../widgets/Pages.vue";

export default {
  components: {
    PagesWidget
  },
  data() {
    return {
      homePath: homePath
    }
  },
  methods: {
    menuClose: function () {
      this.$parent.menuOpen = false;
    },
    menuClick: function () {
      this.$parent.menuOpen = true;
      window.scrollTo(0, 0);
    },
    toTop: function() {
      window.scrollTo(0,0);
      if (this.$parent.menuOpen) {
        this.$parent.menuOpen = false;
        this.$router.push(this.homePath);
      }
    },
  }
};
</script>