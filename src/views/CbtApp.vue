<template>

  <div>

    <div v-if="digs.length == 0" style="margin-bottom:60px;">
      <h4>
        To create a new record, click Plus or New.
      </h4>
    </div>

    <cbt-record           
    v-for="dig in digs" 
    v-bind:key="dig.id" 
    v-bind:note="dig.text"
    v-bind:id="dig.id"
    v-bind:errors="dig.errors"
    @card-delete="cardDelete" 
    @card-update="cardUpdate" />

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
    <div style="height:60px;"></div>

  </div>

</template>

<script>

import CbtRecord from '../components/CbtRecord.vue';
import ResizableTextarea from '../components/ResizableTextarea.vue';

export default {

  watch: {
    '$parent.createNew': function (to, from) {
      if (to == true) {
        console.log('check');
        this.cardCreate();
        this.$parent.createNew = false;
      }
    }
  },

  data: function() {
    return {
      cbtTutorial: true,
      digs: [],
      cardMoveDialogShow: false,
      cardResize: false,
      cardResizeShow: false,

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
      },

    }
  },

  components: {
    ResizableTextarea,
    CbtRecord
  },


  mounted: function() {
    let self = this;

    // load notes from indexedDB
    dexie.notes.toArray( function(notes) {      
      notes.forEach ( note => {
        console.log(note);
        self.digs.unshift({id: note.id, errors: note.errors, text: note.text });
      });
    })
    .catch(e => {console.log('20', e)} );

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
    
    getRecordId: function (el) {
      return Number(el.target.id.split('-')[1]);
    },

    cardUpdate: function(obj) {
      let id = obj.id;
      let noteNew = obj.note;
      let dateNow = Date.now();

      // update local db
      dexie.notes.update(id, {text: noteNew, edit: dateNow})
      .catch(e => {console.error('cardUpdate', e)} );

      // update dynamic data
      let self = this;

      function getIndex () {
        for(var i = 0; i < self.digs.length; i += 1) {
          if(self.digs[i].id == id) { return i; }
        }
      }
      let index = getIndex();
      
      this.digs[index].text = noteNew;

    },

    cardUpdateFixed: function (e) {
      let text = e.target.value;
      let errorId = e.target.id.slice(6);

      this.errors[errorId].text = text;

      dexie.notes.update(this.id, {errors: this.errors, edit: Date.now()})
      .catch(e => {console.log('errorFixed', e)} );
    },

    cardDelete: function (id) {
      dexie.notes.where('id').equals(id).delete();

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

    errorSwitch(id, err) {

      let self = this;
      function getIndex () {
        for(var i = 0; i < self.digs.length; i += 1) {
          if(self.digs[i].id == id) { return i; }
        }
      }
      let index = getIndex();

      this.digs[index].errors[err].is = !this.digs[index].errors[err].is;

      dexie.notes.update(id, {errors: this.digs[index].errors, edit: Date.now()})
      .catch(e => {console.log('7', e)} );

    },

    errorFixed (el) {
      this.errors[el].fixed = !this.errors[el].fixed;

      dexie.notes.update(this.id, {errors: this.errors, edit: Date.now()})
      .catch(e => {console.log('errorFixed', e)} );
    },

    // utils
  
    toTop: function() {
      window.scrollTo(0,0);
    },

  },

}

</script>

<style scoped>
  .cbt-app {
    clear:both;
    margin-bottom:80px;
  }

  .mini {
    height:39px!important;
  }
  
  .card {
    border: 1px solid #b6b6b6;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin-bottom: 0px;
    position: relative;
    padding: 5px;
    min-height: 50px;
    overflow: hidden;
    padding-bottom: 2px;
  }

  .card-errors {
    border: 1px solid #b6b6b6;
    border-top: 0px;
    min-height:35px;
    padding: 5px;
  }

  @media only screen and (max-width: 470px)  {
    .card-errors {
      min-height:70px;
    }
    .icon-errors {
      margin-top: 3px;
      margin-bottom: 3px;
    }
  }

  .card-errors-selected {
    border: 1px solid #b6b6b6;
    border-top: 0px;
    min-height:35px;
    padding: 5px;
    padding-top: 6px;
    font-size:14px;
    font-family: 'Times New Roman', Times, serif;
  }

  /* .card-text {
    position: relative;
    outline: none;
    min-height: 38px;
  } */

  .svg-icon {
    width: 100%;
    height: 100%;
    display: block;
  }

  .card-move {
    box-sizing: content-box;
    cursor: pointer;
    position: absolute;
    height: 8px;
    width: 8px;
    right: 1px;
    top: 2px;
    padding: 2px;
  }

  .card-resize {
    box-sizing: content-box;
    cursor: pointer;
    position: absolute;
    height: 8px;
    width: 8px;
    right: 1px;
    bottom: 2px;
    padding: 2px;
    
  }

  textarea {
    width: 100%;
    border: 0px;
    box-sizing: border-box;
    outline: none;
    resize: vertical;
    font-family: 'Times New Roman', Times, serif;
    /* font-family: 'Source Sans Pro', sans-serif; */
    font-size: 15px;
    overflow: hidden!important;
    resize: none;
  }

  @media only screen and (max-width: 630px) {
    textarea {
      font-size: 14px;
    }
  }


  .textarea {
    width: 100%;
    border: 0px;
    box-sizing: border-box;
    outline: none;
    /* resize: vertical; */
    font-family: 'Times New Roman', Times, serif;
    /* font-family: 'Source Sans Pro', sans-serif; */
    font-size: 15px;
    /* overflow: hidden!important;
    resize: none; */
  }


  .icon-div-card-errors {
    background-color:#ffdada!important;
    border: 1px solid rgb(255, 170, 170)!important;
  }

  .icon-div-card-errors-extra {
    background-color:#daf0ff!important;
    border: 1px solid #a4c9c2!important;
  }

  .icon-div-card-errors-off {
    background-color:#e2e2e2;
    border: 1px solid rgb(199, 199, 199);
    margin-right:5px;
    text-align: center;
    font-size:11px;
    cursor: pointer;
    float:left;
    width:25px;
    height:25px;
    border-radius:50%;
  }

  .circle {
    width:15px;
    height:15px;
    border-radius:50%;
    background-color:#ffdada;
    border: 2px solid rgb(255, 170, 170);
    cursor: pointer;
    float:left;
    margin-top: 4px;
    margin-right: 4px;
    margin-left: 2px;
  }

  .circle-green {
    background-color:#c8ffaf!important;
    border: 2px solid rgb(38, 226, 0)!important;
  }

  .error-title {
    float:left;
    text-decoration: underline;
  }

  .error-title-grey {
    color: #b4b4b4;
  }
</style>