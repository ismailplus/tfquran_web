<template>
  <v-flex xs12 :class="classes">
    <base-card :height="value.prominent ? 450 : 350" color="grey lighten-1" dark href="#!">
      <v-img
        :src="require(`@/assets/articles/${value.hero}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-layout v-if="!value.prominent" fill-height wrap text-xs-right ma-0>
          <v-flex xs12>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop
            >{{ value.category }}</v-chip>
            <h3 class="title font-weight-bold mb-2">{{ value.title }}</h3>
            <h3 class="title font-weight-bold mb-3">
              {{ value.author }}
              <br>Date
            </h3>
          </v-flex>
          <!-- <v-flex align-self-end>
            <v-chip class="text-uppercase ma-0" color="primary" label small @click.stop>Read More</v-chip>
          </v-flex>-->
          <v-flex align-self-end>
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              large
              @click="popup()"
            >Read Now</v-chip>
          </v-flex>
        </v-layout>
      </v-img>
    </base-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    classes() {
      return {
        md6: this.size === 2,
        md4: this.size === 3,
        md3: this.size === 4
      };
    }
  },

  methods: {
    popup() {
      let route = this.$router.resolve({ path: "/tags" });
      window.open(route.href, "_blank");
    }
  }
};
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
</style>
