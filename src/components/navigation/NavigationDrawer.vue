<template>
  <v-navigation-drawer app v-model="isDrawerOpen">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in navigationItems" :key="item.id" @click="navigateTo(item.id)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';

type titles = {
    [key: string]: string;
};

const routingTitles: titles = {
    '': '',
    login: 'Авторизация',
    home: 'Домашний экран',
    profile: 'Профиль',
    timeline: 'График',
    dashboard: 'Дашборд',
    chat: 'Сообщения'
};

export default Vue.extend({
    props: ['drawer'],
    data() {
        return {
            navigationItems: [
                {
                    title: 'Profile',
                    id: 'profile',
                    icon: 'account_circle'
                },
                {
                    title: 'Home',
                    id: 'home',
                    icon: 'home'
                },
                {
                    title: 'Kanban',
                    id: 'kanbanBoards',
                    icon: 'table_chart'
                }
            ],
            selectedModule: '',
            isDrawerOpen: this.drawer
        };
    },
    watch: {
        drawer: {
            handler(val, oldVal) {
                this.isDrawerOpen = !this.isDrawerOpen;
            }
        }
    },
    methods: {
        navigateTo(newModule: any) {
            switch (newModule) {
                case 'home': {
                    this.selectedModule = 'home';
                    break;
                }
                case 'profile': {
                    this.selectedModule = 'profile';
                    break;
                }
                case 'kanbanBoards': {
                    this.selectedModule = 'KanbanBoards';
                    break;
                }
                default:
                    break;
            }

            this.navigateToModule(this.selectedModule);
        },

        navigateToModule(moduleId: string) {
            this.$router.push({ name: this.selectedModule });
            this.isDrawerOpen = false;
        }
    }
});
</script>
