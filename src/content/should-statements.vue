<template>
  <div>
    <h1>
      Should Statements
    </h1>
    
    <h3>You use “shoulds,” “shouldn’ts,” “musts,” “oughts,” and “have tos”.</h3>

    <h4>Example</h4>

    <p>Alice got angry because she couldn’t use new software efficiently. She was becoming more and more anxious and frustrated, stuck in her internal dialog: “This should have not happened to me, it’s not fair. This software must work instantly as the old one did.”</p>

    <h4>Explained</h4>

    <p>When we engage in the Should Statements cognitive distortion, we think that we know the universal rules, and we insist that things should follow them.</p>

    <p>Should statements can be directed at other people, or at oneself. They can also be directed at non-human objects, e.g. "It shouldn’t rain today. This is not right!"</p>

    <p>There can be good should statements, e.g. it is not allowed to steal, and we cross the street only when the green light is on. These statements help us to organize society.</p>

    <p>Should statements are thinking errors when we look at things from a subjective perspective and insist that our subjective rules are the only true ones. In similar cases, the rules imposed on others or oneself, spring not from the common reality upon which people agree collectively, but are subjective and specific to a particular individual or a relatively small group of individuals.</p>

    <h4>How to fix it</h4>

    <p>
      You can fix your thinking bugs with the help of the <a href="https://thinkingbugs.com/cbt-app" target="_blank">CBT app</a> - a digital version of the classical Cognitive Behavioral Therapy practice.
    </p>

    <p>
      Write the dysfunctional thought in the CBT app. Then try to see the situation from a more objective and realistic perspective, try to understand other peoples’ motivations, links between causes and effects. Finally, challenge the thought and rewrite it in a rational and realistically positive way.
    </p>

    <menu-bottom v-bind:current="'SS'"></menu-bottom>
    
  </div>
</template>

<script>
  import MenuBottom from '../components/MenuBottom.vue';

  export default {
    components: {
      MenuBottom
    }
  }
</script>