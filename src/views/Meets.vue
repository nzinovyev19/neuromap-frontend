<template>
  <div class="meets">
    <pre>{{time}}</pre>
    <v-dialog
      v-model="modal"
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
            <span class="headline">Meet info</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="formValues.name"
                    :rules="nameRules"
                    label="Meet name*"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <div class="meet-date flex-column">
                    <v-datetime-picker
                      label="Select Datetime"
                      v-model="datetime">
                    </v-datetime-picker>
                    <!-- <v-dialog
                      ref="datepickerFrom"
                      v-model="datepickerFrom"
                      :close-on-content-click="false"
                      :return-value.sync="date.from"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date.from"
                          label="Date start:"
                          prepend-icon="mdi-calendar-range"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-if="datepickerFrom"
                        v-model="date.from"
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="datepickerFrom = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.datepickerFrom.save(date.from)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                    <v-dialog
                      ref="timepickerFrom"
                      v-model="timepickerFrom"
                      :return-value.sync="time.from"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="time.from"
                          label="Time start:"
                          prepend-icon="mdi-alarm"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="timepickerFrom"
                        v-model="time.from"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="timepickerFrom = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.timepickerFrom.save(time.from)">OK</v-btn>
                      </v-time-picker>
                    </v-dialog> -->
                  </div>
                </v-col>
                <v-col cols="6">
                  <!-- <div class="meet-date flex-column">
                    <v-dialog
                      ref="datepickerTo"
                      v-model="datepickerTo"
                      :close-on-content-click="false"
                      :return-value.sync="date.from"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date.from"
                          label="Date end"
                          prepend-icon="mdi-calendar-range"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-if="datepickerTo"
                        v-model="date.from"
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="datepickerTo = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.datepickerTo.save(date.from)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                    <v-dialog
                      ref="timepickerTo"
                      v-model="timepickerTo"
                      :return-value.sync="time.from"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="time.from"
                          label="Time end:"
                          prepend-icon="mdi-alarm"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="timepickerTo"
                        v-model="time.from"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="timepickerTo = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.timepickerTo.save(time.from)">OK</v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </div> -->
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="formValues.facilitator"
                    :items="filterUsers([...formValues.members, formValues.secretary])"
                    dense
                    filled
                    label="Change facilitator*"
                    :item-text="userText"
                    :item-value="userValue"
                    required
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="formValues.secretary"
                    :items="filterUsers([...formValues.members, formValues.facilitator])"
                    dense
                    filled
                    label="Change secretary*"
                    :item-text="userText"
                    :item-value="userValue"
                    required
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                  <v-autocomplete
                    v-model="formValues.members"
                    :items="filterUsers([formValues.secretary, formValues.facilitator])"
                    label="Members"
                    :item-text="userText"
                    :item-value="userValue"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text >Create</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <MeetCard
      v-for="(meet, index) in meets"
      :key="meet.index"
      :meet="meet"
      :class="{ 'mt-3': index > 0 }"
    ></MeetCard>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MeetCard from '@/components/MeetCard.vue';

export default {
  components: {
    MeetCard,
  },
  data() {
    return {
      modal: false,
      datepickerTo: false,
      datepickerFrom: false,
      timepickerTo: false,
      timepickerFrom: false,
      formValues: {
        name: '',
        members: '',
        secretary: '',
        facilitator: '',
        date: {
          from: null,
          to: null,
        },
      },
      time: {
        from: null,
        to: null,
      },
      date: {
        from: null,
        to: null,
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    };
  },
  computed: {
    ...mapState(['meets', 'users']),
  },
  methods: {
    filterUsers(excludeArray) {
      if (!this.users) return [];
      return this.users.filter(u => !excludeArray.includes(u));
    },
    userText(val) {
      return `${val.firstName} ${val.lastName}`;
    },
    userValue(val) {
      return val;
    },
  },
};
</script>
