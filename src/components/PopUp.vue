<template>
  <div
    class="popup"
    :style="[{ left: `${left}px` }, { bottom: `${bottom}px` }]"
  >
    <div class="popup__header">
      <h2 class="popup_name">
        {{ guestInfo.name }}
      </h2>
      <a :href="`tel:+${guestInfo.phone}`" class="popup__contact">{{
        guestInfo.phone
      }}</a
      ><a :href="`mailto: ${guestInfo.email}`" class="popup__contact">{{
        guestInfo.email
      }}</a>
      <div class="popup__body">
        <p class="popup__roomtype">{{ guestInfo.typeOfApartments }}</p>
        <h3 class="popup__number">Number of Guests</h3>
        <p class="popup__adults">Adults: {{ guestInfo.guestInfo.adults }}</p>
        <p class="popup__children">
          Children: {{ guestInfo.guestInfo.children }}
        </p>
      </div>
    </div>
    <div class="popup__button">
      <ButtonComponent @on-click="hidePopUp"> Close </ButtonComponent>
    </div>
  </div>
</template>

<script>
/**
 * PopUp component with detailed info about hotel guest
 */
import ButtonComponent from "./ButtonComponent.vue";
export default {
  name: "PopUp",
  components: {
    ButtonComponent,
  },
  props: {
    /**
     * Information about current guest
     */
    guestInfo: {
      type: Object,
      required: true,
    },
    /**
     * Start left position (left css property)
     */
    left: {
      type: Number,
      required: false,
    },
    /**
     * Start bottom position (bottom css property)
     */
    bottom: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  emits: ["on-hide"],
  methods: {
    hidePopUp() {
      this.$emit("on-hide");
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  width: 200px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  font-weight: normal;
  cursor: default;
  -webkit-box-shadow: 0px 0px 13px 1px rgba(148, 133, 148, 1);
  -moz-box-shadow: 0px 0px 13px 1px rgba(148, 133, 148, 1);
  box-shadow: 0px 0px 13px 1px rgba(148, 133, 148, 1);

  &__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }

  &__contact {
    text-decoration: none;
    padding-left: 0;
    color: #000;
  }

  &__contact + &__contact {
    margin-top: 10px;
  }
  &__number {
    margin: 0;
  }
  &__adults {
    margin-bottom: 0;
  }
}
</style>
