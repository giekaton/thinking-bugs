<template>

  <div class="links-content">
    <h1>
      About
    </h1>

    <div style="height:20px;"></div>

    <p>Thinking Bugs is a web app where you will find the classical cognitive distortions list (also referred to as <a href="https://twitter.com/thinkingbugs/status/1182119140267569154" target="_blank">"bugs"</a> or "errors") and the <a href="https://thinkingbugs.com/cbt-app" target="_blank">CBT App</a> to fix your thinking 🐛🐞💥.</p>

    <p>The list of thinking errors is based on the classical Cognitive Behavioral Therapy.</p>

    <p>The CBT App is a digital version of the classical CBT practice, based on the <a href="https://feelinggood.com/tag/daily-mood-log/" target="_blank">mood logging technique</a>, as described and popularized by <a href="https://en.wikipedia.org/wiki/David_D._Burns" target="_blank">David D. Burns</a> and <a href="https://en.wikipedia.org/wiki/Aaron_T._Beck" target="_blank">Aaron T. Beck</a>.</p>

    <p>The app privacy-focused by design. It works "client-side" in an offline mode, which means that private information (e.g. thought records) never leaves the user's local device - the data is never sent over the internet.</p>

    <p>Being a Progressive Web App (PWA), Thinking Bugs can be <a @click.prevent="installPWA()">installed</a> on most mobile and desktop devices and used even without the internet.</p>

    <p>Thinking Bugs is <a href="https://github.com/giekaton/thinking-bugs" target="_blank">open source</a>.</p>

    <div style="height:15px;"></div>

    <p><b>Thinking Bugs?</b></p>

    <p>Let's consider the possibility of a bug with the ability to think. You know, the thinking bug. Sounds unrealistic. As far as we know, animals, insects, and other beings cannot think. Only humans can.</p>

    <p>Thinking is a blessing but also a curse, as uncontrolled thinking leads to depression or other problems.</p>

    <p style="font-size:14px;"><i>"Your mind is an instrument, a tool. It is there to be used for a specific task, and when the task is completed, you lay it down. As it is, I would say about 80 to 90 percent of most people’s thinking is not only repetitive and useless, but because of its dysfunctional and often negative nature, much of it is also harmful. Observe your mind and you will find this to be true. It causes a serious leakage of vital energy." – Eckhart Tolle</i></p>

    <!-- <div style="height:10px;"></div> -->

    <p>Is this constant, unstoppable, repeated thinking bugging you? Does it bug you? Most likely, yes. Anxiety, depression, anger, and similar common experiences are results of the thinking bugs. Some of the negative experiences are legitimate but a person with lots of thinking errors is suffering because of his or her own mind.</p>

    <p>There are two helpful metaphors that you can use when working with your thinking bugs.
    
    <div style="height:15px;"></div>

    <p><b>Garden metaphor</b></p>  
    
    <p>Imagine that your mind and its thinking processes are like a garden, where good things can grow. As in every garden, if not taken care of, weeds will overtake and bugs will start to dominate your garden. Your mind, like the garden, needs care and the CBT App is here to help you.</p>

    <div style="height:25px;"></div>

    <div style="width:240px;margin:0 auto;text-align: center;letter-spacing:2px;">🌲🌳🌴🌵🌾🌿☘️🍀</div>

    <div style="height:30px;"></div>

    <div style="width:240px;margin:0 auto;text-align: center;letter-spacing:2px;">🍂🐛🐛🌵🍂🐛🍂🌵</div>

    <div style="height:65px;"></div>

    <p><b>Computer metaphor</b></p>  

    <p>Prominent artificial intelligence scientists believe that human intelligence (the "thinking" part) can be compared to an extremely powerful and sophisticated computer. Like any other computer, our thinking can also have bugs.</p>
    
    <p>Because the computer metaphor is relevant and appropriate, in all thinking error examples you will see the names <a href="https://en.wikipedia.org/wiki/Alice_and_Bob" target="_blank">Alice and Bob</a> - the fictional characters  traditionally used in cryptography to describe encrypted interactions.</p>

    <div style="height:25px;"></div>

    <div style="width:240px;margin:0 auto;text-align: center;letter-spacing:2px;">💻📁🖱️📁🔒🖥️🔗📁🌐</div>

    <div style="height:30px;"></div>

    <div style="width:240px;margin:0 auto;text-align: center;letter-spacing:2px;">💥🖥️💥🐛📁💥📁🐛🕸️</div>
    
    <div style="height:65px;"></div>

    <p><b>Gamification</b></p>  

    <p>The app's intention is to make fixing bugs look like a fun thing, not hard work. No doubt, it can be very hard to work with our thinking errors, face challenges, and practice new ways of thinking and living. There is no need to stress this "hard work" even more, but instead, better to make this process user friendly and gamified.</p>

    <div style="height:25px;"></div>

    <p><b>New to CBT?</b></p>

    <p>
    If you are completely new to the Cognitive Behavioral Therapy, please seek additional sources of information before trying to work with the CBT App. The information currently available on the Thinking Bugs website functions only as a quick reminder and does not explain the CBT practice fully.
    </p>

    <div style="height:25px;"></div>

    <p><b>Contact</b></p>

    <p>Contact us by email: &#104;&#x69;&#64;&#116;&#x68;i&#110;&#x6b;i&#110;&#x67;b&#117;&#x67;s&#46;&#x63;o&#109;</p>
        
    <p>
      Follow and fork on <a href="https://twitter.com/thinkingbugs" target="_blank">Twitter</a> and <a href="https://github.com/giekaton/thinking-bugs" target="_blank">GitHub</a>.
    </p>

    <p>The aim of the Thinking Bugs is to present the information about cognitive distortions objectively, comprehensively, impartially, and in a simple and easy to understand way. If you see how the information about cognitive distortions can be improved, you are welcome to contribute on <a href="https://github.com/giekaton/thinking-bugs/blob/master/src/content/" target="_blank">GitHub</a> or by contacting us by email.
    </p>

    <div style="height:25px;"></div>

    <p><b>DISCLAIMER</b></p>

    <p style="text-transform:uppercase;">The ideas and suggestions contained on this website are not intended as a substitute for consulting with your physician. All matters regarding your health require medical supervision.</p>


  </div>

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