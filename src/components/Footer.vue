<template>
  <div>
    <div class="footer-top-space"></div>
    <div class="footer site-footer">
      <div class="footer-content">
        
        Thinking Bugs © 2020-2021

      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      homePath: '/',
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

<style>


  .footer {
    width: 100%;
    background-color:#444;
    left: 0;
    padding-top: 35px;
    padding-bottom: 45px;
    min-height: 70px;
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }

  .footer-link {
    color: #e7e7e7!important;
  }

  @media only screen and (max-width: 600px) {
    .footer {
      padding-left:5px;
      padding-right:6px;
    }
  }

  .footer-content {
    max-width: 640px;
    margin: 0 auto;
  }

  .footer-top-space {
    height: 90px;
  }

  @media only screen and (max-width: 600px) {
    .footer-content {
      padding-left:15px;
      padding-right:15px;
    }
    .footer-top-space {
      height: 80px;
    }
  }

  .footer-column {
    width: 310px;
    float: left;
  }

  .footer {
    font-size: 14px;
    color: rgb(226, 226, 226);
  }

  .footer a {
    font-size: 14px;
    color: rgb(226, 226, 226);
    text-decoration: underline;
    line-height:22px;
    border-bottom: 0px!important;
  }
</style>