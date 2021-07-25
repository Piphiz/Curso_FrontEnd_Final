<template>
  <v-app>
    <div>
    <v-app-bar
      color="red accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Vacation Course - Vuetify/FrontEnd</v-toolbar-title>

      <v-spacer></v-spacer>
      Piphiz
      <v-avatar size="35" class="ml-1">
        <v-img
            src="@/assets/BergAsa.png"
          ></v-img>
      </v-avatar>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="red--text text--accent-4"
        >
          <v-list-item v-for="item in items" :key="item.title" :to="item.redirect">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
    <v-main class="align-center">
      <v-container class="d-flex justify-center">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    items: [{
      title: "Home",
      redirect: "/",
      icon: "mdi-home"
    },{
      title: "Homework 1",
      redirect: "/homework_01",
      icon: "mdi-notebook"
    },{
      title: "Homework 2",
      redirect: "/homework_02",
      icon: "mdi-notebook"
    },{
      title: "Homework 3",
      redirect: "/homework_03",
      icon: "mdi-notebook"
    },{
      title: "Homework 4",
      redirect: "/homework_04",
      icon: "mdi-notebook"
    },{
      title: "Homework 5",
      redirect: "/homework_05",
      icon: "mdi-notebook"
    },{
      title: "Homework 6",
      redirect: "/homework_06",
      icon: "mdi-notebook"
    },{
      title: "Homework 7",
      redirect: "/homework_07",
      icon: "mdi-notebook"
    },{
      title: "Homework 8",
      redirect: "/homework_08",
      icon: "mdi-notebook"
    },{
      title: "Homework 9",
      redirect: "/homework_09",
      icon: "mdi-notebook"
    },{
      title: "Homework 10",
      redirect: "/homework_10",
      icon: "mdi-notebook"
    },{
      title: "Homework 11",
      redirect: "/homework_11",
      icon: "mdi-notebook"
    },{
      title: "Homework 12",
      redirect: "/homework_12",
      icon: "mdi-notebook"
    },{
      title: "Extra 1",
      redirect: "/extra_01",
      icon: "mdi-notebook-plus"
    }],
    drawer: false,
    group: null,
  }),
};
</script>
