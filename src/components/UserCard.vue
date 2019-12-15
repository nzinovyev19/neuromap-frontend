<template>
  <div class="user-card">
    <v-card>
      <v-card-title>{{ user.firstName + ' ' + user.lastName }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>
