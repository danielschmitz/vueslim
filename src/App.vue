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

    <v-dialog
      v-model="dialog.show"
      max-width="290"
    >
      <v-card>
        <v-card-text>
          {{dialog.text}}
        </v-card-text>
          <v-card-text style="padding-bottom:1px">
              <p class="text-xs-center">
              <v-btn :color="dialog.color" @click="dialog.show=false">Ok</v-btn>
              </p>
          </v-card-text>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="toast.show"
      :color="toast.color"
      :timeout="toast.timeout"
    >
      {{ toast.text }}
      <v-btn
        dark
        flat
        @click="toast.show = false"
      >
      <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>

    <v-dialog v-model="confirm.show" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Please Confirm</v-card-title>
          <v-card-text>{{confirm.text}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="confirm.choice(false)">No</v-btn>
            <v-btn flat @click="confirm.choice(true)">yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    <v-content>
      <v-card>
        <v-img class="white--text" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" aspect-ratio="9">

          <div style="padding-left:15px">
            <h3 class="headline mb-0">
              <v-btn flat icon dark @click="drawer=!drawer">
                <v-icon>menu</v-icon>
              </v-btn>Welcome to Vue!
            </h3>
            <div>This app uses Vue and Vuetify in the frontend. <br />Express and Knex in the backend</div>
          </div>

        </v-img>
      </v-card>

      <div style="margin:20px">
        <v-card>
          <v-card-text>
            <router-view />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="orange" href="https://github.com/danielschmitz/vueslim" target="_blank">Github project</v-btn>
            <v-btn flat color="orange" href="http://vueslim.herokuapp.com" target="_blank">Demo app</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-content>
  </v-app>
</template>

<script>

import alertService from '@/services/alert'

export default {
  name: 'App',
  data () {
    return {
      drawer: null,
      toast: alertService.config.snackbar,
      dialog: alertService.config.dialog,
      confirm: alertService.config.confirm
    }
  }
}
</script>
