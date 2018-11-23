<script>
  import userService from '@/services/user';

  export default {
    name: 'Users',
    data() {
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
          { text: 'First Name', value: 'firstname' },
          { text: 'Last Name', value: 'lastname' },
          { text: 'Email', value: 'email' }
        ]
      };
    },
    mounted() {
      userService.getAll().then(users => {
        this.users = users;
      });
    },
    methods: {
      onNewUserButtonClick() {
        this.user = {};
        this.dialog = true;
      }
    }
  };
</script>
<template>
  <div>
    <v-card class="elevation-0">
      <v-card-title
        ><h3>Users</h3>
        <v-spacer></v-spacer>
        <v-btn @click="onNewUserButtonClick()" color="primary">New User</v-btn>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="users"
          class="elevation-0"
          v-if="users.length>0"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="999">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Usuário
        </v-card-title>

        <v-card-text>
          <v-form model="valid">
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="user.firstname"
                    label="First Name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="user.lastname"
                    label="Last Name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md4>
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="onSaveUserClick()">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
