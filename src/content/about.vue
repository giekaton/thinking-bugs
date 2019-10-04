<template>

  <div><h1>About</h1> <div>

  <div style="height:10px;"></div>

  <p>Thinking Errors is an offline-first web-app where you can find the cognitive distortions list and the CBT app.</p>

  <p>Being a Progressive Web App (PWA), it can be <span @click="installPWA()" class="link">installed</span> on most of mobile and desktop devices and used even without the internet.</p>

  <p>The app and the content is still in beta phase. Feel free to suggest content editions and ideas for new features.</p>

  <br>

  <p>Contact us by <a href="&#109;&#x61;&#105;&#x6c;&#116;&#x6f;:&#x68;i&#x40;t&#104;&#x69;&#110;&#x6b;&#105;&#x6e;&#103;&#x65;r&#x72;o&#x72;s&#46;&#x6f;&#114;&#x67;">email</a></p>

  <p>Follow on <a rel="noreferrer noopener" href="https://twitter.com/thinkingerrors_" target="_blank">Twitter</a></p>
  
  <p>Thinking Errors is open-source, fork it on <a href="https://github.com/giekaton/thinking-errors" target="_blank">GitHub</a></p>

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