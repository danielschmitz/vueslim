<script>
import userService from '@/services/user'

export default {
  name: 'Users',
  data () {
    return {
      dialog: false,
      user: {},
      users: [],
      headers: [
        {
          text: 'id',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'First Name', value: 'first_name' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Email', value: 'email' }
      ],
      valid: false,
      rules: {
        firstNameRules: [
          v => !!v || 'First Name is required'
        ],
        lastNameRules: [
          v => !!v || 'Last Name is required'
        ],
        emailRules: [
          v => !!v || 'Email is required',
          v => (v != null && /.+@.+/.test(v)) || 'E-mail must be valid'
        ]
      }

    }
  },
  mounted () {
    this.refreshUsers()
  },
  methods: {
    refreshUsers () {
      userService.getAll().then(result => {
        this.users = result.data
      })
    },
    onNewUserButtonClick () {
      this.user = {}
      this.dialog = true
    },
    onSaveUserButtonClick () {
      userService.save(this.user).then(result => {
        console.log(result)
        this.dialog = false
        this.refreshUsers()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<template>
  <div>
    <v-card class="elevation-0">
      <v-card-title>
        <h3>Users</h3>
        <v-spacer></v-spacer>
        <v-btn @click="onNewUserButtonClick()" color="primary">New User</v-btn>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="users" class="elevation-0" v-if="users.length>0">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.first_name }}</td>
            <td>{{ props.item.last_name }}</td>
            <td>{{ props.item.email }}</td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="999">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          User
        </v-card-title>

        <v-card-text>
          <v-form v-model="valid">
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="user.first_name" :rules="rules.firstNameRules" label="First Name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="user.last_name" :rules="rules.lastNameRules" label="Last Name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md4>
                  <v-text-field v-model="user.email" :rules="rules.emailRules" label="Email" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="!valid" flat @click="onSaveUserButtonClick()">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
