<template>
  <div class="users">
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="mb-3 pa-4"
          height="100%"
          block
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-form ref="form">
          <v-card-title>
            <span class="headline">User info</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="formValues.firstName"
                    :rules="nameRules"
                    label="Legal first name*"
                    required>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formValues.lastName"
                    :rules="nameRules"
                    label="Legal middle name*"
                    required>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="createUser">Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <UserCard
      v-for="(user, index) in users"
      :key="index"
      :user="user"
      :class="{ 'mt-3': index > 0 }"
    >
    </UserCard>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import UserCard from '@/components/UserCard.vue';

export default {
  components: {
    UserCard,
  },
  data: () => ({
    dialog: false,
    formValues: {
      id: '',
      firstName: '',
      lastName: '',
      reservationTimes: [],
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
  }),
  computed: {
    ...mapState(['users']),
  },
  methods: {
    ...mapMutations(['setUser']),
    createUser() {
      if (this.$refs.form.validate()) {
        this.formValues.id = `f${(Math.floor((Math.random() * 1e8))).toString(16)}`;
        this.setUser(this.formValues);
        this.$refs.form.reset();
        this.dialog = false;
      }
    },
  },
};
</script>
