<template>
  <v-card>
    <v-card-title>{{ meet.name }}</v-card-title>
    <v-card-subtitle>Дата проведения (с/до):
      {{ meet.date.from | getFormattedDate }} / {{ meet.date.to | getFormattedDate }}</v-card-subtitle>
    <v-card-subtitle class="pt-0">Статус встречи: {{ status }}</v-card-subtitle>
    <v-list
      v-if="meet.members.length > 0"
      class="pb-5"
    >
      <v-list-item class="flex flex-column align-start">
        <UserCard
          v-for="(members, index) in meet.members"
          :key="index"
          :user="members"
          :class="{ 'mt-3': index > 0 }"
        ></UserCard>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import UserCard from '@/components/UserCard.vue';

export default {
  filters: {
    getFormattedDate(msec) {
      if (!msec) return '';
      const time = new Date();
      const months = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
      ];
      const month = time.getMonth();
      const day = time.getDate();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      return `${
        day < 10 ? `0${day}` : day
      } ${
        months[month]
      } ${
        hours < 10 ? `0${hours}` : hours
      }:${
        minutes < 10 ? `0${minutes}` : minutes
      }`;
    },
  },
  props: {
    meet: Object,
  },
  components: {
    UserCard,
  },
  computed: {
    status() {
      if (!this.meet.date?.from || !this.meet.date?.to) return '';
      const now = Date.now();
      if (now < this.meet.date.from) return 'Запланирована';
      if (now > this.meet.date.to) return 'Завершена';
      return 'Проходит';
    },
  },
};
</script>
