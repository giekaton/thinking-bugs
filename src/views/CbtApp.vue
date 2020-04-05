<template>

  <div class="links-content">

    <div v-if="thoughts.length == 0">

      <div style="padding:10px;padding-left:15px;padding-bottom:11px;border-radius:5px;" class="content-quickstart" >
        <h1 style="letter-spacing:1px;margin-top:5px;font-size:25px;">CBT App</h1>
        <div style="height:8px;"></div>
        <span style="line-height:150%;font-size:19px;">
        Cognitive Behavioral Therapy Online
        </span>
      </div>
      <div style="height:10px;"></div>
      <div class="app-button-2 noselect" @click="loadExamples()">Example</div>

      <div style="height:120px;"></div>

    </div>

    <cbt-record           
      v-for="thought in thoughts" 
      v-bind:key="thought.id" 
      v-bind:note="thought.text"
      v-bind:id="thought.id"
      v-bind:errors="thought.errors"
      @card-delete="cardDelete" 
      @card-update="cardUpdate" 
    />

    <br>
    
    <div style="float:left;display:inline-block;margin-top:-40px;">
      <a @click.prevent="cardCreate">
        <div class="app-button-2 noselect">New</div>
      </a>
      <a class="link-basic" @click="cbtDeleteAll">
        <div class="app-button-2 noselect">Delete all</div>
      </a>
      <a @click="cbtExport" class="link-basic">
        <div class="app-button-2 noselect">Export</div>
      </a>
      <a @click="cbtImport" class="link-basic">
        <div class="app-button-2 noselect">Import</div>
      </a>
    </div>
    
    <div style="clear:both;height:50px;"></div>

    <div class="content-quickstart" style="font-size:15px;padding:20px;padding-top:30px;border-radius:3px;">

      <p>
        <b>Quick start</b>
      </p>

      <ul>
        <li>Create a new thought record and type your thought.</li>
        <li>Then identify and select the cognitive distortions in your thought.</li>
        <li>Rewrite each cognitive distortion in a rational and realistically positive way.</li>
        <li>Finally, click the distortion's red circle to turn it green and mark it as fixed.</li>
      </ul>

      <br>

      <p>
        <b>Tips</b>
      </p>

      <!-- <p>
        This technique does not work if you keep your thoughts in the head. The thought needs to be written down and then challenged by spotting and fixing cognitive distortions.
      </p>

      <p>
        When you identify the cognitive distortions in your though, these thinking bugs need to be challenged one by one. Each thinking error needs to be rewritten in a new, rational and realistically positive way. Then it can be marked as fixed.
      </p> -->

      <p>
        Thinking Bugs is an offline-first progressive web app (PWA) - it can be <a @click="installPWA()">installed</a> on most mobile and desktop devices and used even without the internet.
      </p>

      <p>
        The CBT app is privacy-focused by design. Your records are saved on your local device only, in the browser you are currently using. There are no accounts. If you delete your records, they are deleted permanently.
      </p>

      <p>
        You can export your records, and import them later if you want to have them on a different computer, mobile device, or just in another browser. Export allows to keep 
        records' archive or to share them with other people.
      </p>

      <p>
        When you import records from a backup, the existing data in the app (if any) is deleted and replaced with new records from the imported archive. If you want to work with multiple backup files, you can use separate browsers, separate devices or work in incognito mode.
      </p>
      
      <div style="height:10px;"></div>

      <!-- <p><a href="/about" target="_blank">Read more...</a></p> -->

    </div>

    <div style="height:50px;"></div>

  </div>

</template>

<script>

import CbtRecord from '../components/CbtRecord.vue';
import ResizableTextarea from '../components/ResizableTextarea.vue';

export default {


  data: function() {
    return {
      examples: [{"id":3,"errors":{"AoN":{"is":true,"title":"All or Nothing Thinking","full":"All or Nothing Thinking - You look at things in absolute, black-and-white categories.","short":"AoN","fixed":true,"text":"Actually, some of the apps did help me, and while I tried many of them, there are still many different promising approaches that I have not tried."},"MoM":{"is":false,"title":"Magnification or Minimization","full":"Magnification or Minimization - You blow things way out of proportion or shrink them.","short":"MoM","fixed":false,"text":""},"MF":{"is":true,"title":"Mental Filter","full":"Mental Filter - You dwell on the negatives and ignore the positives.","short":"MF","fixed":true,"text":"It's a bad idea to keep identifying with the thought that \"I already tried, and nothing can help\". This thought blocks me from experiencing new things. Maybe it also protects me from failures, but in order to experience life, I need to accept the possibility of a failure."},"DP":{"is":false,"title":"Discounting Positives","full":"Discounting Positives - You insist your positive qualities don't count.","short":"DP","fixed":false,"text":""},"Lab":{"is":true,"title":"Labeling","full":"Labeling - Instead of saying, “I made a mistake,” you tell yourself, “I'm a jerk” or “I'm a loser.","short":"Lab","fixed":true,"text":"I should not label all self-help type of apps as \"bad\" or \"fake\", because I know for sure that many people get a lot of benefit from similar apps and methodologies."},"Per":{"is":true,"title":"Personalization","full":"Personalization - You consider negative or irrelevant events as having something to do with you.","short":"Per","fixed":true,"text":"I'm looking at this from my individual perspective. A person without previous similar negative app experience would be much more open-minded than I am now. Also, such a person would probably get better results from this app. Obviously, I can learn from this imagined person a thing or two."},"MR":{"is":true,"title":"Mind Reading","full":"Mind Reading - You assume that people are reacting negatively to you.","short":"MR","fixed":true,"text":"I imagine that the creator of this app has dark motives, because why else he or she did create this app? This doesn't sound right, as I assume that all app creators are evil."},"FT":{"is":true,"title":"Fortune Telling","full":"Fortune Telling - You predict that things will turn out badly.","short":"FT","fixed":true,"text":"I'm predicting that the app experience will be bad, which is an unrealistic and irrational jump to a conclusion. Actually, the app experience can be either good or bad."},"Ovg":{"is":true,"title":"Overgeneralization","full":"Overgeneralization - You view a single negative event as a never-ending pattern of defeat.","short":"Ovg","fixed":true,"text":"I think that if I had a poor experience with previous apps, I will also have a similarly poor experience with all apps. That is just not true because in the world there are both good and bad apps, not only bad."},"SS":{"is":true,"title":"Should Statements","full":"Should Statements - You use “shoulds,” “shouldn'ts,” “musts,” “oughts,” and “have tos.”","short":"SS","fixed":true,"text":"I insist that my experience should be good. By avoiding any experience which can potentially be bad, I'm imposing my irrational rules upon reality, and by doing so, I avoid life. I need to see experiences the way they are and not how I'd like them to be. I can then accept or change them."},"SB":{"is":false,"title":"Self Blame","full":"Self Blame - You blame yourself for something you weren't entirely responsible for.","short":"SB","fixed":false,"text":""},"OB":{"is":true,"title":"Other Blame","full":"Other Blame - You blame others and overlook ways you contributed to the problem.","short":"OB","fixed":true,"text":"Well, ok. It is possible that some of the previous apps were promising, but I just didn't put the effort."},"ER":{"is":true,"title":"Emotional Reasoning","full":"Emotional Reasoning - You reason from your feelings: “I feel like an idiot, so I must be one.”","short":"ER","fixed":true,"text":"I often feel a slight fear and discomfort when faced with new things. I bet this contributes to my prejudice against similar apps, but actually has nothing to do with this particular app."},"Mag":{"is":true,"title":"Magical Thinking","full":"Magical Thinking - The Fallacy of Fairness, If Only, Control Tendencies etc.","short":"Mag","fixed":true,"text":"I admit that on some level I believe that the app should solve my problems almost in a magical way. Actually, in order to get results, I need to do the work, and the app can only help and guide, but is not an effortless quick fix."}},"text":"This app is not worth my time because I already tried many of them, and none helped."}],

      cbtTutorial: true,
      thoughts: [],
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
        'MoM': { 
          'is': false,
          'title': 'Magnification or Minimization',
          'full': 'Magnification or Minimization - You blow things way out of proportion or shrink them.',
          'short': 'MoM',
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
        'DP': { 
          'is': false,
          'title': 'Discounting Positives',
          'full': 'Discounting Positives - You insist your positive qualities don\'t count.',
          'short': 'DP',
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
        // 'JtC': { 
        //   'is': false,
        //   'title': 'Jumping to Conclusions',
        //   'full': 'Jumping to Conclusions - You jump to conclusions not warranted by the facts.',
        //   'short': 'JtC',
        //   'fixed': false,
        //   'text': ''
        // },
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
        'Ovg': { 
          'is': false,
          'title': 'Overgeneralization',
          'full': 'Overgeneralization - You view a single negative event as a never-ending pattern of defeat.',
          'short': 'Ovg',
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
        'ER': { 
          'is': false,
          'title': 'Emotional Reasoning',
          'full': 'Emotional Reasoning - You reason from your feelings: “I feel like an idiot, so I must be one.”',
          'short': 'ER',
          'fixed': false,
          'text': ''
        },
        'Mag': { 
          'is': false,
          'title': 'Magical Thinking',
          'full': 'Magical Thinking - Different types of irrational and unrealistic thinking.',
          'short': 'Mag',
          'fixed': false,
          'text': ''
        },
        // 1: { 'AoN', DP', 'MoM', 'Lab', 'Per', 'Ovg', 'JtC', 'MR', 'FT', 'ER', 'SB', 'OB', 'MF', 'SS' }
      },

    }
  },

  watch: {
    '$parent.createNew': function(to, from) {
      if (to == true) {
        // console.log('check');
        this.cardCreate();
        this.$parent.createNew = false;
      }
    },
    '$parent.themeLight': function(to, from) {

      setTimeout(() => {      
        let thoughtsTemp = this.thoughts;
        this.thoughts = [];
        setTimeout(() => {  
          this.thoughts = thoughtsTemp;
        }, 200);
      }, 100);
    }
  },

  components: {
    ResizableTextarea,
    CbtRecord
  },

  beforeMount: function() {

    // load notes from indexedDB
    dexie.notes.toArray( notes => {      
      notes.forEach ( (note, idx, array) => {
        // console.log(note);
        // self.thoughts.unshift({id: note.id, errors: note.errors, text: note.text });

        this.thoughts.unshift({id: note.id, errors: note.errors, text: note.text });

        // if (idx === array.length - 1) { 
        //   // console.log("Last callback call at index " + idx + " with value " + note.id );
        // }

      });
    })
    .catch(e => {console.log('E020', e)} );

  },

  mounted: function() {


  },

  methods: {

    installPWA: function() {
      window.deferredPrompt.prompt();
    },
    
    cardCreate: function() {
      this.toTop();
      let self = this;

      dexie.notes.add({text: '', errors: self.errors, edit: Date.now()})
      .then(function (id) {
        dexie.notes.where({id: id}).first(function (note) {
          self.thoughts.unshift({id: note.id, errors: note.errors, text: note.text });
        });
      })
      .catch(e => {console.log('4', e)} );;
    },

    cbtDeleteAll: function() {
      if (confirm('Are you sure you want to delete all data?')) {
        dexie.notes.clear();
        this.thoughts = [];
        this.toTop();
      }
    },

    cbtExport: function() {

      let data = JSON.stringify(this.thoughts);

      let txtContent = "data:text;charset=utf-8,";
      txtContent += data;

      let fileName = "CBT-App-"+new Date().toJSON().slice(0,19)+"-"+this.$parent.version+".txt";
      let encodedUri = encodeURI(txtContent);
      let link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", fileName);
      document.body.appendChild(link); // Required for FF
      link.click();

    },

    cbtImport: function() {

      let element = document.createElement('div');
      element.innerHTML = '<input type="file">';
      let fileInput = element.firstChild;

      fileInput.addEventListener('change', () => {
        let file = fileInput.files[0];

        if (file.name.match(/\.(txt)$/)) {
          let reader = new FileReader();

          reader.onload = () => {

            dexie.notes.clear();
            this.thoughts = [];

            let plainNotes = JSON.parse(reader.result);
            console.log(plainNotes[0]);
            // plainNotes = JSON.parse(plainNotes[0]);

            let plainNotesArray = [];
            let i = 0;
            plainNotes.forEach ( note => {
              plainNotesArray.push(note);
              i++;
              if (i == plainNotes.length) {
                // update db
                dexie.notes.bulkAdd( plainNotesArray )
                .then(() => {
                  dexie.notes.toArray( (notes) => {      
                    notes.forEach ( note => {
                      console.log(note);
                      this.thoughts.unshift({id: note.id, errors: note.errors, text: note.text });
                    });
                  })
                  .catch(e => {console.log('20', e)} );
                })
              }
            });
          };

          reader.readAsText(file);  
        } else {
            alert("File not supported, .txt files only");
        }
      });
      fileInput.click();

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
        for(var i = 0; i < self.thoughts.length; i += 1) {
          if(self.thoughts[i].id == id) { return i; }
        }
      }
      let index = getIndex();
      
      this.thoughts[index].text = noteNew;

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
        for(var i = 0; i < self.thoughts.length; i += 1) {
          if(self.thoughts[i].id == id) { return i; }
        }
      }
      let index = getIndex();
      
      // delete from dynamic store
      self.thoughts.splice(index, 1);
    },

    errorSwitch(id, err) {

      let self = this;
      function getIndex () {
        for(var i = 0; i < self.thoughts.length; i += 1) {
          if(self.thoughts[i].id == id) { return i; }
        }
      }
      let index = getIndex();

      this.thoughts[index].errors[err].is = !this.thoughts[index].errors[err].is;

      dexie.notes.update(id, {errors: this.thoughts[index].errors, edit: Date.now()})
      .catch(e => {console.log('7', e)} );

    },

    errorFixed (el) {
      this.errors[el].fixed = !this.errors[el].fixed;

      dexie.notes.update(this.id, {errors: this.errors, edit: Date.now()})
      .catch(e => {console.log('errorFixed', e)} );
    },

    loadExamples() {
      dexie.notes.clear();
      this.thoughts = [];

      let plainNotes = this.examples;

      let plainNotesArray = [];
      let i = 0;
      plainNotes.forEach ( note => {
        plainNotesArray.push(note);
        i++;
        if (i == plainNotes.length) {
          // update db
          dexie.notes.bulkAdd( plainNotesArray )
          .then(() => {
            dexie.notes.toArray( (notes) => {      
              notes.forEach ( note => {
                console.log(note);
                this.thoughts.unshift({id: note.id, errors: note.errors, text: note.text });
              });
              this.toTop();
            })
            .catch(e => {console.log('20', e)} );
          })
        }
      });
    },

    // utils
  
    toTop: function() {
      window.scrollTo(0,0);
      scrollTo(document.getElementById('scroll-to-top'), 0, 0);
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
  
    color:#000!important;
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
    /* color:var(--icon-div-card-errors-off-color); */
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