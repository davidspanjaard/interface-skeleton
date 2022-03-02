<template>
  <div
    :class="`popup ${config.popupClass || ''}`"
    :style="style"
  >
    <v-card
      color="surface--el-8"
      elevation="8"
      height="100%"
      width="100%"
      class="d-flex flex-column"
    >
      <v-card-title
        class="js-headline"
      >
        {{ title }}
        <v-spacer />
        <v-btn
          small
          fab
          text
          @click="minimisePopup(config.id)"
        >
          <v-icon
            small
            color="grey"
          >
            close_fullscreen
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-subtitle v-if="subTitle">
        {{ subTitle }}
      </v-card-subtitle>

      <v-card-text
        id="section-main"
        class="overflow-y-auto"
        :style="'max-height:' + renderAreaHeight + 'px'"
      >
        <slot name="content" />
      </v-card-text>

      <v-spacer />
      <v-card-actions>
        <slot name="actions" />
        <v-btn
          small
          fab
          text
          @click="minimisePopup(config.id)"
        >
          <v-icon
            small
            color="grey"
          >
            close_fullscreen
          </v-icon>
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "FullScreenPopup",
  props: {
    title: {
      type: String,
      default: null,
    },
    subTitle: {
      type: String,
      default: null,
    },
    config: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      interaction: {},
      defaultHeight: 400,
      defaultWidth: 600,
      defaultMinHeight: 300,
      defaultMinWidth: 450,
    };
  },
  computed: {
    renderAreaHeight() {
      if (this.subTitle) {
        return this.interaction.height - 156;
      }else {
        return this.interaction.height - 120;
      }
    },
    style() {
      const config = Object.assign({}, this.config, this.interaction);
      return `
      top: ${config.top}px;
        left: ${config.left}px;
        display: block;
        width: ${this.maxWidth}px;
        height: ${this.maxHeight}px;
        z-index: 100px;
      `;
    },
    minWidth(){
      return this.config.minWidth || this.defaultMinWidth;
    },
    minHeight(){
      return this.config.minHeight || this.defaultMinHeight;
    },
    maxWidth(){
      return window.innerWidth - 90;
    },
    maxHeight(){
      return window.innerHeight - 140;
    },
    //Position Popup Center
    centerTop(){
      let popupHeight = this.maxHeight;
      let clientHeight = window.innerHeight;

      return (clientHeight - popupHeight +30 ) / 2;
    },
    centerLeft(){
      let popupWidth = this.maxWidth;
      let clientWidth = window.innerWidth;

      return (clientWidth - popupWidth + 50) / 2;
    }
  },

  mounted() {
    this.interaction = {
      left: this.centerLeft,
      top: this.centerTop,
      width: this.defaultWidth,
      height: this.defaultHeight,
      ...this.config
    };
  },

  methods: {
    ...mapActions("global", [
       "closePopup", "minimisePopup",
    ]),
    emitEvent(type) {
      this.$emit('on-event', type);
    },
  },

};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  display: none;
  z-index: 3;
  touch-action: none;
}
.slot-area{
  display: flex;
  overflow-y: scroll;
}
.debug {
  outline: red solid 1px;
}
</style>
