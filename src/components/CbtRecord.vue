<template>

  <div class="cbt-app">

    <div class="card">

      <!-- Move icon -->
      <div class="card-move" @click="cardMoveDialog" title="Move">
        <svg class="svg-icon">
          <use xlink:href="#svg-clear"></use>
        </svg>
      </div>

      <resizable-textarea>
        <textarea 
          v-bind:id="'card-'+id" 
          v-bind:value="note" 
          @input="cardUpdate"
          placeholder="Type your thought"
        >
        </textarea>
      </resizable-textarea>

    </div>
    
    <div class="card-errors">
      <div v-for="error in errors" v-bind:key="error.short">
        <div class="icon-errors icon-div-card-errors-off" v-bind:class="{ 'icon-div-card-errors': error.is }" @click="errorSwitch(error.short)" v-bind:title="error.full">
          {{ error.short }}
        </div>
      </div>
    </div>

    <div v-for="error in errors" v-bind:key="error.short">
      <div class="card-errors-selected" v-if="error.is">
        <div @click="errorFixed(error.short)" style="cursor:pointer;">
          <div class="circle" v-bind:class="{ 'circle-green': error.fixed }"></div>
          <div class="error-title" v-bind:class="{ 'error-title-grey': error.fixed }">{{ error.title }}</div>
        </div>
        <div style="height:30px;"></div>
        <resizable-textarea fixed="true">
          <textarea
            v-bind:id="'fixed-'+error.short" 
            v-bind:value="error.text" 
            @input="cardUpdateFixed"
            placeholder="Rewrite the thought in a positive and rational way"
          >
          </textarea>
        </resizable-textarea>
      </div>
    </div>

  </div>

</template>

<script>

import ResizableTextarea from './ResizableTextarea.vue';

export default {
  data: function() {
    return {
      cardMoveDialogShow: false,
    }
  },

  components: {
    ResizableTextarea
  },

  methods: {
    cardUpdate: function (e) {
      let noteNew = e.target.value;

      this.$emit('card-update', { id: this.id, note: noteNew });

    },
    cardUpdateFixed: function (e) {
      let text = e.target.value;
      let errorId = e.target.id.slice(6);

      this.errors[errorId].text = text;

      dexie.notes.update(this.id, {errors: this.errors, edit: Date.now()})
      .catch(e => {console.log('errorFixed', e)} );
    },
    cardMove: function () {
      dexie.notes.where('id').equals(this.id).delete();
      this.$emit('card-delete', this.id);
    },
    cardMoveDialog: function () {
      this.cardMove();
    },
    moveNotesToChange: function(e) {
      this.$parent.moveNotesTo = e.target.value;
    },
    cardResizeControl: function() {
      this.cardResize = !this.cardResize;
      dexie.notes.update(this.id, {edit: Date.now(), mini: this.cardResize});
    },
    errorSwitch(el) {
      
      let currentDig = this.$parent.digs.find(dig => dig.id === this.id);

      console.log(this.errors[el]);

      this.errors[el].is = !this.errors[el].is

      dexie.notes.update(this.id, {errors: this.errors, edit: Date.now()})
      .catch(e => {console.log('7', e)} );

    },
    errorFixed(el) {
      this.errors[el].fixed = !this.errors[el].fixed;

      dexie.notes.update(this.id, {errors: this.errors, edit: Date.now()})
      .catch(e => {console.log('errorFixed', e)} );
    }
  },
  props: ['note', 'id', 'mini', 'errors'],
}

</script>


<style scoped>

.cbt-app {
  margin-bottom: 80xp;
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