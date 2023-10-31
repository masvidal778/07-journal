<script>
import { defineAsyncComponent, defineComponent } from 'vue'
import { mapGetters, mapActions } from "vuex";
import Swal from 'sweetalert2'

import getDayMonthYear from "@/modules/daybook/helpers/getDayMonthYear";
import uploadImage from "@/modules/daybook/helpers/uploadImage"

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
      entry: null,
      localImage: null,
      file: null
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
    ...mapActions('journal', ['updateEntries', 'createEntries', 'deleteEntries']),
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

      new Swal({
        title: 'Esperi, sisplau',
        allowOutsideClick: false
      })
      Swal.showLoading()

      const picture = await uploadImage( this.file )

      this.entry.picture = picture.secure_url

      if( this.entry.id ) {
        await this.updateEntries( this.entry )
      } else {

        //Action createEntry await action
        const id = await this.createEntries( this.entry )

        //redirectTo => entry, param:id
        this.$router.push({ name: 'entry' , params: { id } })

      }

      this.file = null
      Swal.fire('Guardat', 'Entrada registrada amb èxit', 'success')
    },
    async onDeleteEntry() {

      const { isConfirmed} = await Swal.fire({
        title: "Està segur que vol esborrar l'entrada?",
        text: "Un cop esborrada, no es podrà recuperar",
        showDenyButton: true,
        confirmButtonText: "Sí, vull esborrar l'entrada"
      })

      if( isConfirmed === true ) {
        new Swal({
          title: 'Esperi, sisplau',
          allowOutsideClick: false
        })
        Swal.showLoading()

        await this.deleteEntries( this.entry.id )

        //redirect to entry
        this.$router.push({ name: 'no-entry' })

        Swal.fire('Esborrada', 'Entrada esborrada amb èxit', 'success')
      }

    },
    onSelectedImage( event ) {
      const file = event.target.files[0]

      if( !file ){
        this.localImage = null
        this.file = null
        return
      }

      this.file = file

      const fr = new FileReader()
      fr.onload = () => this.localImage = fr.result
      fr.readAsDataURL( file )
    },
    onSelectImage() {
      this.$refs.imageSelector.click()
    }
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
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>

      <input type="file"
             @change="onSelectedImage"
             ref="imageSelector"
             v-show="false"
             accept="image/png, image/jpg"
      >

      <div>
        <button
          v-if="entry.id"
          class="btn btn-danger mx-2"
          @click="onDeleteEntry">
          Esborrar
          <i class="fa fa-trash-all"></i>
        </button>

        <button
            class="btn btn-primary"
            @click="onSelectImage"
        >
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
        v-if="entry.picture && !localImage"
        :src="entry.picture"
        alt="entry-picture"
        class="img-thumbnail"
    >

    <img
        v-if="localImage"
        :src="localImage"
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