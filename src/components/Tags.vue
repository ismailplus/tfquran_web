<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <div>
            <h2 class="headline mb-0">Book Name</h2>
            <h3 class="headline mb-0">Writter Name</h3>
          </div>
        </v-card-title>

        <v-card-text>
          <h3 class="text-lg-right">Right align on large viewport sizes</h3>
          <h3 class="text-lg-left">Left align on small viewport sizes</h3>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="test" flat color="orange">BookMark</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// Utilities
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["categories"])
  },

  methods: {
    test() {
      this.$http.get("localhost:8000/api/test").then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>
