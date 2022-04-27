<template>
  <div class="loadingoverlay" v-bind:class="getClassObj">
    <div class="loadingoverlay__overlay"
         v-on:click="onOverlayClick"></div>
    <div class="loadingoverlay__wrapper">
      <div class="loadingoverlay__content__wrapper">
        <div class="filler">
          .
        </div>
        <div class="loadingoverlay__content">
          <img v-bind:src="require('@/assets/appsidebar-close.svg')"
               v-on:click="onClickCloseBtn()"
               class="loadingoverlay__close-button__svg" />
          <div class="loadingoverlay__tittle">
            Editar categoria
          </div>
          <div class="dialogitemedit__buttons__wrapper">
            <div role="button">Ativo</div>
            <div role="button">Rascunho</div>
            <div role="button">Indisponível</div>
          </div>
          <form ref="deliveryFeeForm">
            <div class="dialogitemedit__checkbox__input-wrapper">
              <input class="dialogitemedit__content-name__input"
                     type="text"
                     v-model="storeName"/>
            </div>
            <div class="dialogdeliveryrate__buttonwrapper" v-if='brandSettings'>
              <div v-on:click="cleanForm"
                   class="dialogdeliveryrate__button dialogdeliveryrate__button--is-clean"
                   role="button">
                   Excluir
              </div>
              <div v-bind:style="{borderColor: brandSettings.primary_border_color, color: brandSettings.primary_border_color}"
                   v-on:click="onClickCloseBtn()"
                   class="dialogdeliveryrate__button"
                   role="button">
                   Cancelar
              </div>
              <div v-bind:style="{ backgroundColor: brandSettings.primary_color, borderColor: brandSettings.primary_color, color: brandSettings.primary_contrast_color }"
                   v-bind:class="{ 'dialogdeliveryrate__button--is-inactive': !isValid }"
                   class="dialogdeliveryrate__button"
                   role="button"
                   v-on:click="updateObj">
                   Salvar
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="filler">
        .
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DialogBase',
  components: {},
  props: [
    'brandUuid',
    'brandSettings',
    'storeId'

  ],
  data () {
    return {
      storeName: undefined,
      isActive: false,
      isWaitingResponse: false,
    }
  },
  mounted () {
    this.$eventHub.$on('SHOW_DIALOG_', this.show);
    this.$eventHub.$on('HIDE_DIALOG_', this.hide);
    if (this.sessionLang) {
      this.$ml.change(this.sessionLang)
    }
  },
  updated () {

  },
  beforeDestroy() {
    this.$eventHub.$off('SHOW_DIALOG_');
    this.$eventHub.$off('HIDE_DIALOG_');
  },
  computed: {
      storeObj () {
        return this.$store.getters.deliveryStore || {};
      },
    getClassObj () {
      return {
        'loadingoverlay--is-active': this.isActive,
      }
    },
    sessionLang () {
      return this.$store.getters.sessionLang || undefined
    },
    handleTitle () {
      if (this.title && this.title.length) {
        return this.title
      } else {
        return this.$ml.get('loadingoverlay.loadingchange')
      }
    },
    isValid ()  {
      return this.storeName && this.storeName.length >= 3 && this.storeName.length <= 250
    },
  },
  methods: {
    show () {
      this.$eventHub.$emit('SHOW_LOADING_OVERLAY', {title: 'Carregando...'})
      this.$set(this, 'isWaitingResponse', true)
      this.loadObj().then(() => {
        this.$set(this, 'storeName', this.storeObj.name)

        this.$eventHub.$emit('HIDE_LOADING_OVERLAY')
        this.$eventHub.$emit('LOCK_APP_SCROLL')
        this.$set(this, 'isWaitingResponse', false)
        this.$set(this, 'isActive', true)
      }).catch(() => {
        this.$eventHub.$emit('HIDE_LOADING_OVERLAY')
        this.$eventHub.$emit('UNLOCK_APP_SCROLL');
        this.$set(this, 'isActive', false)
        this.$toastr.i({msg: 'Não foi possível carregar configurações', preventDuplicates: true})
      })
    },
    hide () {
      this.$eventHub.$emit('UNLOCK_APP_SCROLL');
      this.$set(this, 'isActive', false)
    },
    onOverlayClick () {
       this.hide()
    },
    onClickCloseBtn(){
      this.hide()
    },
    onClickSaveBtn(){
      self.$toastr.i(self.$ml.get('moonwalkaccount.successupdated'))
    },
    cleanForm () {
      this.$set(this, 'storeName', undefined)
    },
    updateObj () {
      if (!this.isValid || this.isWaitingResponse) {
        this.$toastr.i({msg: 'O nome da empresa deve ter entre 3 e 250 caracteres', preventDuplicates: true})
        return
      }

      let params = {
        storeId: this.storeObj.id,
        storeObj: {... this.storeObj},
      }

      params.storeObj.name = this.storeName

      this.$eventHub.$emit('SHOW_LOADING_OVERLAY', {title: 'Salvando...'})
      this.$set(this, 'isWaitingResponse', true)

      return this.$store.dispatch('updateDeliveryStore', params).then(() => {
        this.$set(this, 'isWaitingResponse', false)
        this.$eventHub.$emit('HIDE_LOADING_OVERLAY')
        this.$eventHub.$emit('HIDE_DISCOUNT_OVERLAY');
        this.$eventHub.$emit('DELIVERY_STORE_MANAGER_LOAD_DATA')
        this.$toastr.i({msg: 'Configurações salvas', preventDuplicates: true})
      }).catch(() => {
        this.$set(this, 'isWaitingResponse', false)
        this.$eventHub.$emit('HIDE_LOADING_OVERLAY')
        this.$toastr.i({msg: 'Não foi possível salvar as configurações', preventDuplicates: true})
      })
    },
    loadObj () {
      return new Promise((resolve) => {
        return resolve(this.storeObj)
      }).catch(error => {
        return Promise.reject(error)
      })
    }
  }
}
</script>
<style scoped>
.loadingoverlay__wrapper{}
.filler{
  color: transparent;
}
.loadingoverlay__content{
  position: relative;
  background-color: #ffff;
}
.loadingoverlay {
  top: 0;
  left: -100%;
  right: 100%;
  bottom: 0;
  display: block;
  position: fixed;
  z-index: 999;
  transition: all 0;
}
.loadingoverlay--is-active {
  left: 0;
  right: 0;
  transition: all 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.loadingoverlay__overlay {
  top: 0;
  left: 0;
  display: block;
  z-index: 1;
  position: fixed;
  border: 0;
  background: rgba(255, 255, 255, 0);
  transition: all 0;
  max-height: 100%;
}
.loadingoverlay--is-active .loadingoverlay__overlay {
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(237, 237, 237, 0.9);
  transition: all 300ms ease;
}
.loadingoverlay__content__wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0;
  transition: all 0ms;
  width: 370px;
}
.loadingoverlay--is-active .loadingoverlay__content__wrapper {
  opacity: 1;
  transition: all 300ms ease;
}
.loadingoverlay__close-button__svg{
  width: 10px;
  height: 19px;
  cursor: pointer;
  position: absolute;
  top: 12.5px;
  right: 12.5px;
  padding: 5px 9.5px;
  background: #e7e7e7;
  border-radius: 90px;
  font-size: 15px;
}
.loadingoverlay__tittle{
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0;
  padding: 18px 57px 45px 15px;
  font-weight: bold;
  color: #3c3b3b;
  text-shadow: rgba(60,59,59,.3) 0 0 1px;
}
.dialogitemedit__content-name__input {
  outline: none;
  width: 95%;
  padding: 7.5px 7.5px 7.5px 7.5px;
  border: 2px solid #ccc;
  font-size: 18px;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  opacity: 1;
}
.dialogdeliveryrate__buttonwrapper {
  display: flex;
  margin: 0;
  padding: 45px 15px 15px;
}
.dialogdeliveryrate__button {
  flex: 1;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding: 10px 15px;
  letter-spacing: 1px;
  border: 2px solid;
  cursor: pointer;
}
.dialogdeliveryrate__button--is-inactive {
  opacity: 0.7;
}
.dialogdeliveryrate__button--is-clean {
  border-color: red;
  color: red;
  margin-right: 15px;
}
</style>
