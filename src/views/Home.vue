<template>
  <div class="errors-list">
    <!-- Content -->

    <span style="font-size:20px">
      CBT Thinking Errors
    </span>

    <h3 style="font-size:15px;margin-top:20px;" class="links-content">
      <!-- Below are the classical cognitive distortions, as defined by the practice of Cognitive Behavioral Therapy (CBT). -->
      <!-- Originally defined by Dr. David D. Burns for the practice of Cognitive Behavioral Therapy (CBT). -->

      Cognitive Behavioral Therapy (CBT) is a scientific, well-tested and most proven logical approach for challenging distorted thoughts and transforming them from intrusive and unhelpful into realistic and beneficial.

      The irrational, unrealistic and often negative thoughts are common to different people. These thoughts are classified into different types, named together as cognitive distortions, also known as thinking errors or <a href="https://twitter.com/thinkingbugs/status/1182119140267569154" target="_blank">thinking bugs</a>.

      By deconstructing and changing irrational thoughts, we can greatly improve our life quality, peformance, and general well-being. CBT is also efficient for know conditions such as anxiety, panic attacks, depression, OCD, ADHD and other disorders.

      The list of classical cognitive distortions is presented below. These thinking bugs can be spotted in our mind patterns and fixed using the <router-link to="/cbt-app">CBT App</router-link>.

      <br><br>
      <router-link to="/about">About the Thinking Bugs</router-link>
    </h3>

    <div style="height:30px;"></div>

    <div>
      
      <div class="te-div bug-link">
        <router-link to="/all-or-nothing-thinking">
          <div class="icon-div">
            AoN
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/all-or-nothing-thinking" class="link bug-title">
            All or Nothing Thinking
          </router-link>
          <br>
          <div class="bug-spacer"></div>
          <div class="link-black">
            You look at things in absolute, black-and-white categories.
          </div>
        </div>
      </div>
      
          

      <div class="te-div bug-link">
        <router-link to="/magnification-or-minimization">
          <div class="icon-div">
            MoM
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/magnification-or-minimization" class="link bug-title">
            Magnification or Minimization
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="link-black">
            You blow things way out of proportion or shrink them.
          </span>
        </div>
      </div>

      <div class="te-div bug-link">
        <router-link to="/mental-filter">
          <div class="icon-div">
            MF
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/mental-filter" class="link bug-title">
            Mental Filter
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="link-black">
            You dwell on the negatives and ignore the positives.
          </span>
        </div>
      </div>

      <div class="te-div">
        <router-link to="/discounting-positives">
          <div class="icon-div">
            DP
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/discounting-positives" class="link bug-title">
            Discounting Positives
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="link-black">
            You insist your positive qualities don't count.
          </span>
        </div>
      </div>

      <div class="te-div">
        <router-link to="/labeling">
          <div class="icon-div">
            Lab
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/labeling" class="link bug-title">
            Labeling
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            Instead of saying, “I made a mistake,” you tell yourself, “I'm a jerk” or “I'm a loser.”
          </span>
        </div>
      </div>

      <div class="te-div">
        <router-link to="/personalization">
          <div class="icon-div">
            Per
          </div>
        </router-link>  
        <div class="icon-text">
          <router-link to="/personalization" class="link bug-title">
            Personalization
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            You consider negative or irrelevant events as having something to do with you.
          </span>
        </div>
      </div>

      <!-- <div class="te-div">
        <router-link to="/jumping-to-conclusions">
          <div class="icon-div">
            JtC
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/jumping-to-conclusions" class="link bug-title">
            Jumping to Conclusions
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            You jump to conclusions not warranted by the facts.
          </span>
        </div>
      </div> -->

      <div class="te-div">
        <router-link to="/fortune-telling">
          <div class="icon-div">
            FT
          </div>
        </router-link>
          <div class="icon-text">
            <router-link to="/fortune-telling" class="link bug-title">
              Fortune Telling
            </router-link>
            <br>
            <div style="height:5px;"></div>
            <span class="small" style="text-decoration:none!important;">
              You jump to conclusions not warranted by the facts.
            </span>
          </div>
      </div>

      <div class="te-div">
        <router-link to="/mind-reading">
          <div class="icon-div">
            MR
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/mind-reading" class="link bug-title">
            Mind Reading
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            You assume that people are reacting negatively to you.
          </span>
        </div>
      </div>


      <div class="te-div">
        <router-link to="/overgeneralization">
          <div class="icon-div">
            Ovg
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/overgeneralization" class="link bug-title">
            Overgeneralization
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            You view a single negative event as a never-ending pattern of defeat.
          </span>
        </div>
      </div>

      <div class="te-div">
        <router-link to="/should-statements">
          <div class="icon-div">
            SS
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/should-statements" class="link bug-title">
            Should Statements
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            You use “shoulds,” “shouldn'ts,” “musts,” “oughts,” and “have tos.”
          </span>
        </div>
      </div>

      <div class="te-div">
        <router-link to="/self-blame">
          <div class="icon-div">
            SB
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/self-blame" class="link bug-title">
            Self Blame
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            You blame yourself for something you weren't entirely responsible for.
          </span>
        </div>
      </div>

      <div class="te-div">
        <router-link to="/other-blame">
          <div class="icon-div">
            OB
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/other-blame" class="link bug-title">
            Other Blame
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            You blame others and overlook ways you contributed to the problem.
          </span>
        </div>
      </div>
      
      <div class="te-div">
        <router-link to="/emotional-reasoning">
          <div class="icon-div">
            ER
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/emotional-reasoning" class="link bug-title">
            Emotional Reasoning
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            You reason from your feelings: “I feel like an idiot, so I must be one.”
          </span>
        </div>
      </div>

      
      <div class="te-div">
        <router-link to="/magical-thinking">
          <div class="icon-div">
            Mag
          </div>
        </router-link>
        <div class="icon-text">
          <router-link to="/magical-thinking" class="link bug-title">
            Magical Thinking
          </router-link>
          <br>
          <div style="height:5px;"></div>
          <span class="small">
            The Fallacy of Fairness, If Only..., Control Tendencies, etc.
          </span>
        </div>
      </div>
    </div>

    <div style="clear:both;height:10px;"></div>

  </div>
</template>


<script>
export default {

  components: {

  },

  data: function () {
    return {
      
    }
  },

};
</script>


<style>
  a, a:visited, a:active, a:hover {
    color:#467ed2;
  }

  /* a:hover, a:active {
    text-decoration: underline;
  } */

  
.link-black {
  color: black;
  text-decoration: none!important;
}

.link-black a:hover {
  text-decoration: none!important;
}

.links-content a:hover {
  text-decoration: underline;
}
</style>