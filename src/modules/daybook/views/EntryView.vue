<script>
import { defineAsyncComponent, defineComponent } from 'vue'
import { mapGetters, mapActions } from "vuex";
import getDayMonthYear from "@/modules/daybook/helpers/getDayMonthYear";

export default defineComponent({
  name: "EntryView",
  props: {
    id: {
      type: String,
      required: true
    },
  },
  components: {
    FabNew: defineAsyncComponent(() => import('../components/FabNew.vue'))
  },
  data() {
    return {
      //entrada del estado
      entry: null
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    day() {
      const {day} = getDayMonthYear(this.entry.date)
      return day
    },
    month() {
      const {month} = getDayMonthYear(this.entry.date)
      return month
    },
    yearDay() {
      const {yearDay} = getDayMonthYear(this.entry.date)
      return yearDay
    }
  },
  methods: {
    ...mapActions('journal', ['updateEntries']),
    loadEntry() {
      let entry;

      if ( this.id === 'new' ){
        entry = {
          text: 'Nova entrada',
          date: new Date().getTime()
        }
      }else{
        entry = this.getEntryById(this.id)
        if (!entry) return this.$router.push({name: 'no-entry'})
      }

      this.entry = entry
    },
    async saveEntry() {

      if( this.entry.id ) {
        await this.updateEntries( this.entry )
      } else {
        console.log("Post d'una nova entrada")
      }

      //Action del Journal Module

    },

  },

  created() {
    this.loadEntry()
  },

  watch: {
    id() {
      this.loadEntry()
    }
  }

})
</script>

<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">

      <div>
        <span class="text-success fs-3 fw-bold"> {{ day }} </span>
        <span class="mx-1 fs-3">Setembre</span>
        <span class="mx-2 fs-4 fw-light">2023, divendres</span>
      </div>

      <div>
        <button class="btn btn-danger mx-2">
          Esborrar
          <i class="fa fa-trash-all"></i>
        </button>

        <button class="btn btn-primary">
          Pujar fotografia
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
    <textarea
        v-model="entry.text"
        placeholder="Què ha passat avui?"
    ></textarea>
    </div>

    <img
      src="https://static01.nyt.com/images/2022/11/29/science/00tb-cats1/00tb-cats1-mediumSquareAt3X.jpg"
      alt="entry-picture"
      class="img-thumbnail"
  >

  </template>


  <FabNew
      icon="fa-save"
      @on:click="saveEntry"
  />


</template>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>