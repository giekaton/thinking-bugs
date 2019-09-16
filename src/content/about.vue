<template>

  <div><h1>About</h1> <div>

  <div style="height:10px;"></div>

  <p>Thinking Errors is an offline-first web-app where you can find the cognitive distortions list and the CBT app.</p>

  <p>Being a Progressive Web App (PWA), it can be <span @click="installPWA()" class="link">installed</span> on most of mobile and desktop devices and used even without the internet.</p>

  <p>The app and the content is still in beta phase. Feel free to suggest content editions and ideas for new features.</p>

  <br>

  <p>Follow us on <a rel="noreferrer noopener" href="https://twitter.com/thinkingerrors_" target="_blank">Twitter</a></p>
  
  <p>Thinking Errors is open-source, fork it on <a href="https://github.com/giekaton/thinking-errors" target="_blank">GitHub</a>.</p>

  </div></div>

</template>


<script>

export default {

  methods: {
    installPWA: function() {
      window.deferredPrompt.prompt();
    }
  }

}

</script>