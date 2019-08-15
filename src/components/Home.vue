<template>
  <div class="errors-list" style="margin-top:-10px;">
    <!-- Content -->
    <h2 style="line-height: 120%;margin-bottom:-10px;">Thinking Errors List</h2>
    <br>
    <span style="font-size:13px;">
      Originally defined by Dr. David D. Burns and Cognitive Behavioral Therapy (CBT) practice.
    </span>

    <div style="height:50px;"></div>
    <div class="stress-toy-div">
      <router-link to="all-or-nothing-thinking">
        <div class="icon-div">
          AoN
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="all-or-nothing-thinking" class="link">
          All or Nothing Thinking
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You look at things in absolute, black-and-white categories.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="discounting-positives">
        <div class="icon-div">
          DP
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="discounting-positives" class="link">
          Discounting Positives
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You insist your positive qualities don't count.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="magnification-or-minimization">
        <div class="icon-div">
          MoM
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="magnification-or-minimization" class="link">
          Magnification or Minimization
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You blow things way out of proportion or shrink them.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="labeling">
        <div class="icon-div">
          Lab
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="labeling" class="link">
          Labeling
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          Instead of saying, “I made a mistake,” you tell yourself, “I'm a jerk” or “I'm a loser.”
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="personalization">
        <div class="icon-div">
          Per
        </div>
      </router-link>  
      <div class="icon-text">
        <router-link to="personalization" class="link">
          Personalization
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You consider negative or irrelevant events as having something to do with you.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="overgeneralization">
        <div class="icon-div">
          Ovg
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="overgeneralization" class="link">
          Overgeneralization
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You view a single negative event as a never-ending pattern of defeat.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="jumping-to-conclusions">
        <div class="icon-div">
          JtC
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="jumping-to-conclusions" class="link">
          Jumping to Conclusions
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You jump to conclusions not warranted by the facts.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="mind-reading">
        <div class="icon-div">
          MR
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="mind-reading" class="link">
          Mind Reading
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You assume that people are reacting negatively to you.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="fortune-telling">
        <div class="icon-div">
          FT
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="fortune-telling" class="link">
          Fortune Telling
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You predict that things will turn out badly.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="emotional-reasoning">
        <div class="icon-div">
          ER
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="emotional-reasoning" class="link">
          Emotional Reasoning
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You reason from your feelings: “I feel like an idiot, so I must be one.”
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="self-blame">
        <div class="icon-div">
          SB
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="self-blame" class="link">
          Self Blame
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You blame yourself for something you weren't entirely responsible for.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="other-blame">
        <div class="icon-div">
          OB
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="other-blame" class="link">
          Other Blame
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You blame others and overlook ways you contributed to the problem.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="mental-filter">
        <div class="icon-div">
          MF
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="mental-filter" class="link">
          Mental Filter
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You dwell on the negatives and ignore the positives.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="should-statements">
        <div class="icon-div">
          SS
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="should-statements" class="link">
          Should Statements
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You use “shoulds,” “shouldn'ts,” “musts,” “oughts,” and “have tos.”
        </span>
      </div>
    </div>

    <div style="clear:both;"></div>
    <!-- <div style="height:20px;"></div> -->
    
    <!-- <b>Other Cognitive Distortions</b>
    <div style="height:50px;"></div>

    <div class="stress-toy-div">
      <router-link to="all-or-nothing-thinking">
        <div class="icon-div-extra">
          AoN
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="all-or-nothing-thinking" class="link">
          Need to complete
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You look at things in absolute, black-and-white categories.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="all-or-nothing-thinking">
        <div class="icon-div-extra">
          AoN
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="all-or-nothing-thinking" class="link">
          Loss avergence
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You look at things in absolute, black-and-white categories.
        </span>
      </div>
    </div>

    <div class="stress-toy-div">
      <router-link to="all-or-nothing-thinking">
        <div class="icon-div-extra">
          AoN
        </div>
      </router-link>
      <div class="icon-text">
        <router-link to="all-or-nothing-thinking" class="link">
          Loss avergence
        </router-link>
        <br>
        <div style="height:5px;"></div>
        <span class="small">
          You look at things in absolute, black-and-white categories.
        </span>
      </div>
    </div> -->
    
    <!-- <div style="clear:both;"></div>
    <div style="height:20px;"></div> -->

  </div>
</template>

<script>
export default {
  components: {

  },
  data: function () {
    return {
      homeThemeAssetsPath: homeThemeAssetsPath,
    }
  },

  head: {
    title: function () {
      return {
        inner: 'Thinking Errors',
        separator: '-',
        complement: 'CBT Cognitive Distortions List'
      }
    },
    meta: [
      { name: 'description', content: 'Thinking Errors - CBT Cognitive Distortions List', id: 'desc' }
    ]
  },

  methods: {
    
  },

  mounted() {
    
  }
};
</script>
