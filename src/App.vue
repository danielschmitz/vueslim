<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>VueSlim App</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-card>
        <v-img class="white--text" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" aspect-ratio="5">
          <v-container fill-height fluid>
            <div>
              <h3 class="headline mb-0">Welcome to Vue!</h3>
              <div>This app uses Vue and Vuetify in the frontend. <br />Express and Knex in the backend</div>
            </div>
          </v-container>
        </v-img>

        <v-card-text>
          <router-view />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="orange" href="https://github.com/danielschmitz/vueslim" target="_blank">Github project</v-btn>
          <v-btn flat color="orange" href="http://vueslim.herokuapp.com" target="_blank">Demo app</v-btn>
        </v-card-actions>
      </v-card>

    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: null
    }
  }
}
</script>
