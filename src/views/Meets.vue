<template>
  <div class="meets">
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
                    :rules="requiredRule"
                    label="Meet name*"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <div class="meet-date flex-column">
                    <v-dialog
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
                          label="Date start*"
                          prepend-icon="mdi-calendar-range"
                          :rules="requiredRule"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-if="datepickerFrom"
                        v-model="date.from"
                        :max="date.to"
                        required
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
                          label="Time start*"
                          prepend-icon="mdi-alarm"
                          :rules="requiredRule"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="timepickerFrom"
                        v-model="time.from"
                        :max="maxTime"
                        format="24hr"
                        full-width
                        required
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="timepickerFrom = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.timepickerFrom.save(time.from)">OK</v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="meet-date flex-column">
                    <v-dialog
                      ref="datepickerTo"
                      v-model="datepickerTo"
                      :close-on-content-click="false"
                      :return-value.sync="date.to"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date.to"
                          v-on="on"
                          label="Date end*"
                          prepend-icon="mdi-calendar-range"
                          :rules="requiredRule"
                          readonly
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-if="datepickerTo"
                        v-model="date.to"
                        :min="date.from"
                        required
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="datepickerTo = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.datepickerTo.save(date.to)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                    <v-dialog
                      ref="timepickerTo"
                      v-model="timepickerTo"
                      :return-value.sync="time.to"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="time.to"
                          label="Time end*"
                          prepend-icon="mdi-alarm"
                          :rules="requiredRule"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="timepickerTo"
                        v-model="time.to"
                        format="24hr"
                        :min="minTime"
                        full-width
                        required
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="timepickerTo = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.timepickerTo.save(time.to)">OK</v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </div>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="formValues.facilitator"
                    :items="filteredUsers"
                    label="Change facilitator*"
                    :rules="requiredRule"
                    :item-text="getUserText"
                    :item-value="getUserValue"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="formValues.secretary"
                    :items="filteredUsers"
                    label="Change secretary*"
                    :rules="requiredRule"
                    :item-text="getUserText"
                    :item-value="getUserValue"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="formValues.members"
                    :items="filteredUsers"
                    label="Members*"
                    :item-text="getUserText"
                    :item-value="getUserValue"
                    multiple
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="$refs.form.reset()">Reset</v-btn>
            <v-btn color="blue darken-1" text @click="modal = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="createMeet">Create</v-btn>
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
      requiredRule: [
        v => !!v || 'This field is required',
      ],
    };
  },
  computed: {
    ...mapState(['meets', 'users']),
    maxTime() {
      if (this.date.from === this.date.to) return this.time.to;
      return '';
    },
    minTime() {
      if (this.date.from === this.date.to) return this.time.from;
      return '';
    },
    filteredUsers() {
      if (!this.date.to) return [];
      if (!this.date.from) return [];
      if (!this.time.to) return [];
      if (!this.time.from) return [];
      this.formatDateTime();
      return this.users.filter(u => !u.reservationTimes.find(t => (
        this.formValues.date.from >= t.from && this.formValues.date.from < t.to
      ) || (
        this.formValues.date.to >= t.from && this.formValues.date.to < t.to
      )));
    },
  },
  methods: {
    getUserText(val) {
      return `${val.firstName} ${val.lastName}`;
    },
    getUserValue(val) {
      return val.id;
    },
    formatDateTime() {
      const { from: dateFrom, to: dateTo } = this.date;
      const { from: timeFrom, to: timeTo } = this.time;
      const hoursFrom = timeFrom.match(/^(\d+)/)[1];
      const minutesFrom = timeFrom.match(/:(\d+)/)[1];
      const hoursTo = timeTo.match(/^(\d+)/)[1];
      const minutesTo = timeTo.match(/:(\d+)/)[1];
      this.formValues.date.from = Date.parse(dateFrom)
        + new Date(dateFrom).getTimezoneOffset() * 60 * 1000
        + hoursFrom * 60 * 60 * 1000
        + minutesFrom * 60 * 1000;
      this.formValues.date.to = Date.parse(dateTo)
        + new Date(dateTo).getTimezoneOffset() * 60 * 1000
        + hoursTo * 60 * 60 * 1000
        + minutesTo * 60 * 1000;
    },
    addReservationTimes() {
      const meetUsers = new Set([...this.formValues.members, this.formValues.secretary, this.formValues.facilitator]);
      meetUsers.forEach(u => this.$store.commit('setReservationTimes', [u, this.formValues.date]));
    },
    createMeet() {
      if (this.$refs.form.validate()) {
        this.formatDateTime();
        this.$store.commit('setMeet', this.formValues);
        this.addReservationTimes();
        this.modal = false;
      }
    },
  },
};
</script>
