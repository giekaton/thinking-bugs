<template>
  <div id="my-app" class="page-wrapper">

    <transition
      name="loader-animation"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <progress-bar :show-loader="showLoader" :loader-style="loaderStyle"/>
    </transition>

    <app-header/>
    
    <div class="box" v-cloak>
      <div class="site-content">
        <router-view v-if="!menuOpen"></router-view>

        <div v-if="menuOpen">

          <div v-if="cbtTutorial" style="margin-bottom:50px;">
            To create a new note, click the plus button.
          </div>

          <cbt-app
          v-for="dig in digs" 
          v-bind:key="dig.id" 
          v-bind:note="dig.text"
          v-bind:id="dig.id"
          v-bind:mini="dig.mini"
          v-bind:errors="dig.errors"
          @card-delete="cardDelete" 
          @card-update="cardUpdate"
          />

          <br>
          <span class="link-basic"  @click.prevent="cardCreate">New</span> | <span class="link-basic" @click="cbtDeleteAll">Delete all</span> | <span @click="cbtExport" class="link-basic">Export</span> | <span @click="cbtImport" class="link-basic">Import</span>
          <br><br>
          <br>
          <span style="font-size:13px;">
            This CBT app helps people to practice Cognitive Behavioral Therapy, based on the mood logging technique, as originally described by Dr. David D. Burns.
            <br><br>
            Anything you record in this app is private "by design". The app never sends any information to the internet. 
            Your notes are saved on your local device only. If you delete the data, there will be no traces of it left. 
            If you prefer to keep an archive, you can export/import it.
            <br><br>
            Create your first record by clicking on the New button. First, type your thought. Then identify the thinking errors and activate them by 
            clicking on their circles. Then rewrite each error in a realistically positive and rational way. Finally, click the little red circle 
            to mark the error as done.
          </span>
          <div style="height:25px;"></div>
        </div>

      </div>
    </div>
    
    <app-footer/>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
import ProgressBar from "./components/partials/ProgressBar.vue";

import CbtApp from './components/CbtApp.vue';

export default {
  name: 'App',
  data() {
    return {
      cbtTutorial: false,
      showLoader: true,
      menuOpen: false,
      homeThemeAssetsPath: homeThemeAssetsPath,
      version: 'v0.7.1-beta',
      digs: [],
      pages: [],
      currentPage: '1',
      currentPageName: '',
      currentPageNameRemote: '',
      view: 'notes',
      loggedIn: false,
      mobileChrome: false,
      pwaChrome: false,
      showNotes: true,
      syncDataState: '',
      initialSync: false,
      moveNotesTo: 'trash',
      splitScreen: false,
      encryptionPass: '',
      errors: { 
        'AoN': {
          'is': false,
          'title': 'All or Nothing Thinking',
          'full': 'All or Nothing Thinking - You look at things in absolute, black-and-white categories.',
          'short': 'AoN',
          'fixed': false,
          'text': ''
        },
        'DP': { 
          'is': false,
          'title': 'Discounting Positives',
          'full': 'Discounting Positives - You insist your positive qualities don\'t count.',
          'short': 'DP',
          'fixed': false,
          'text': ''
        },
        'MoM': { 
          'is': false,
          'title': 'Magnification or Minimization',
          'full': 'Magnification or Minimization - You blow things way out of proportion or shrink them.',
          'short': 'MoM',
          'fixed': false,
          'text': ''
        },
        'Lab': { 
          'is': false,
          'title': 'Labeling',
          'full': 'Labeling - Instead of saying, “I made a mistake,” you tell yourself, “I\'m a jerk” or “I\'m a loser.',
          'short': 'Lab',
          'fixed': false,
          'text': ''
        },
        'Per': { 
          'is': false,
          'title': 'Personalization',
          'full': 'Personalization - You consider negative or irrelevant events as having something to do with you.',
          'short': 'Per',
          'fixed': false,
          'text': ''
        },
        'Ovg': { 
          'is': false,
          'title': 'Overgeneralization',
          'full': 'Overgeneralization - You view a single negative event as a never-ending pattern of defeat.',
          'short': 'Ovg',
          'fixed': false,
          'text': ''
        },
        'JtC': { 
          'is': false,
          'title': 'Jumping to Conclusions',
          'full': 'Jumping to Conclusions - You jump to conclusions not warranted by the facts.',
          'short': 'JtC',
          'fixed': false,
          'text': ''
        },
        'MR': { 
          'is': false,
          'title': 'Mind Reading',
          'full': 'Mind Reading - You assume that people are reacting negatively to you.',
          'short': 'MR',
          'fixed': false,
          'text': ''
        },
        'FT': { 
          'is': false,
          'title': 'Fortune Telling',
          'full': 'Fortune Telling - You predict that things will turn out badly.',
          'short': 'FT',
          'fixed': false,
          'text': ''
        },
        'ER': { 
          'is': false,
          'title': 'Emotional Reasoning',
          'full': 'Emotional Reasoning - You reason from your feelings: “I feel like an idiot, so I must be one.”',
          'short': 'ER',
          'fixed': false,
          'text': ''
        },
        'SB': { 
          'is': false,
          'title': 'Self Blame',
          'full': 'Self Blame - You blame yourself for something you weren\'t entirely responsible for.',
          'short': 'SB',
          'fixed': false,
          'text': ''
        },
        'OB': { 
          'is': false,
          'title': 'Other Blame',
          'full': 'Other Blame - You blame others and overlook ways you contributed to the problem.',
          'short': 'OB',
          'fixed': false,
          'text': ''
        },
        'MF': { 
          'is': false,
          'title': 'Mental Filter',
          'full': 'Mental Filter - You dwell on the negatives and ignore the positives.',
          'short': 'MF',
          'fixed': false,
          'text': ''
        },
        'SS': { 
          'is': false,
          'title': 'Should Statements',
          'full': 'Should Statements - You use “shoulds,” “shouldn\'ts,” “musts,” “oughts,” and “have tos.”',
          'short': 'SS',
          'fixed': false,
          'text': ''
        },
        
        // 1: { 'AoN', DP', 'MoM', 'Lab', 'Per', 'Ovg', 'JtC', 'MR', 'FT', 'ER', 'SB', 'OB', 'MF', 'SS' }
      }
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
      loadingProgress: "loadingProgress"
    }),

    loaderStyle() {
      return `width: ${this.loadingProgress}%;`;
    }
  },

  components: {
    appHeader: Header,
    appFooter: Footer,
    ProgressBar,
    CbtApp
  },

  watch: {
    // watch the value of isLoading and once it's false hide the loader
    isLoading(val) {
      if (val == false) {
        let self = this;
        setTimeout(function() {
          self.showLoader = false;
        }, 1000);
      }
    }
  },

  methods: {
    cardCreate: function() {
      this.toTop();
      let self = this;

      dexie.notes.add({text: '', errors: self.errors, edit: Date.now()})
      .then(function (id) {
        dexie.notes.where({id: id}).first(function (note) {
          self.digs.unshift({id: note.id, errors: note.errors, text: note.text });
        });
      })
      .catch(e => {console.log('4', e)} );;

    },
    cardDelete: function(id) {
      let self = this;
      function getIndex () {
        for(var i = 0; i < self.digs.length; i += 1) {
          if(self.digs[i].id == id) { return i; }
        }
      }
      let index = getIndex();
      // delete from dynamic store
      self.digs.splice(index, 1);
    },
    cardUpdate: function(el) {
      let self = this;
      let id = el.id;
      let note = el.note;

      function getIndex () {
        for(var i = 0; i < self.digs.length; i += 1) {
          if(self.digs[i].id == id) { return i; }
        }
      }
      let index = getIndex();

      this.digs[index].text = note;
    },
    toTop: function() {
      document.body.scrollTop = 0;
      // this.view = 'notes';
    },
    initialDataLoad: function () {
      let self = this;

      // let note1 = 'Welcome\n\nKoto is a notes taking progressive web app. It is private and secure by design. It works on any device and synchronizes with all devices. To use it from anywhere, open kotonotes.com in your browser.';
      // let note2 = 'Highlights\n\n- Plain text notes.\n- Local encryption by default.\n- End-to-end encrypted sync.\n- Share encrypted notes with anyone.\n- Local backups in text files and PDF.\n- Split-screen editing.\n- Move and organize notes in pages.\n- Open source. Run it on your own.\n- Offline-first serverless architecture.\n- Simple and slick user interface.\n- Always free.';

      // let lastUpdate = Date.now();

      // dexie.notes.add({text: note1, edit: lastUpdate})
      // .then(function (id) {
      //   self.digs[id] = {text: note1, id: id};
      // });

      // dexie.notes.add({text: note2, edit: lastUpdate})
      // .then(function (id) {
      //   self.digs.unshift({id: id, text: note2, mini: true});
      // });

      // load notes from indexedDB
      dexie.notes.toArray(function(notes) {
        notes.forEach ( note => {
          self.digs.unshift({id: note.id, errors: note.errors, text: note.text });
        });
      })
      .catch(e => {console.log('20', e)} );
    },
    cbtDeleteAll: function() {
      if (confirm('Are you sure you want to delete all data?')) {
        dexie.notes.clear();
        this.digs = [];
      }
    },
    cbtExport: function() {
      alert('Soon...');
    },
    cbtImport: function() {
      alert('Soon...');
    },
  },

  mounted () {
    if (this.$route.name == 'CbtApp') {
      this.menuOpen = !this.menuOpen;
    };
    
    this.initialDataLoad();

  // console.log(this.digs[0]);

    // if (typeof(this.digs[0]) == 'undefined') {
    //   this.cbtTutorial = true;
    // }
  }
};
</script>

<style>
  .link-basic {
    color: rgb(0, 174, 255);
    cursor: pointer;
  }

  .link-basic:hover {
    text-decoration: underline;
  }
</style>