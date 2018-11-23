<script>
  import userService from '@/services/user';
  import alertService from '@/services/alert';

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
          { text: 'First Name', value: 'first_name' },
          { text: 'Last Name', value: 'last_name' },
          { text: 'Email', value: 'email' },
          { text: '', value: 'name', sortable: false }
        ],
        valid: false,
        rules: {
          firstNameRules: [v => !!v || 'First Name is required'],
          lastNameRules: [v => !!v || 'Last Name is required'],
          emailRules: [
            v => !!v || 'Email is required',
            v => (v != null && /.+@.+/.test(v)) || 'E-mail must be valid'
          ]
        },
        tableUserLoadingVisible: false,
        buttonSaveLoadingVisible: false
      };
    },
    mounted() {
      this.refreshUsers();
    },
    methods: {
      refreshUsers() {
        this.tableUserLoadingVisible = true;
        userService
          .getAll()
          .then(result => {
            this.users = result.data;
          })
          .catch(error => {
            console.log('error', error);
          })
          .finally(() => {
            this.tableUserLoadingVisible = false;
          });
      },
      onNewUserButtonClick() {
        this.user = {};
        this.dialog = true;
      },
      onSaveUserButtonClick() {
        this.buttonSaveLoadingVisible = true;
        userService
          .save(this.user)
          .then(result => {
            this.dialog = false;
            //alertService.toast("Usuário inserido com sucesso")
            alertService.ok('Operação realizada com sucesso!');

            this.refreshUsers();
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.buttonSaveLoadingVisible = false;
          });
      },
      onItemEditClick(user) {
        this.user = user;
        this.dialog = true;
      },
      onDeleteUserButtonClick(user) {
        alertService.confirm('Tem certeza?', r => {
          if (r) {
            this.tableUserLoadingVisible = true;

            userService
              .delete(user.id)
              .then(result => {
                this.dialog = false;
                this.refreshUsers();
              })
              .catch(error => {
                console.log('error', error);
              })
              .finally(() => {
                this.tableUserLoadingVisible = false;
              });
          }
        });
      }
    }
  };
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
        <v-data-table
          :headers="headers"
          :items="users"
          :loading="tableUserLoadingVisible"
          class="elevation-0"
          v-if="users.length>0"
        >
          <v-progress-linear
            slot="progress"
            color="blue"
            indeterminate
          ></v-progress-linear>
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.first_name }}</td>
            <td>{{ props.item.last_name }}</td>
            <td>{{ props.item.email }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="onItemEditClick(props.item)">
                edit
              </v-icon>
              <v-icon small @click="onDeleteUserButtonClick(props.item)">
                delete
              </v-icon>
            </td>
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
                  <v-text-field
                    v-model="user.first_name"
                    :rules="rules.firstNameRules"
                    label="First Name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="user.last_name"
                    :rules="rules.lastNameRules"
                    label="Last Name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md4>
                  <v-text-field
                    v-model="user.email"
                    :rules="rules.emailRules"
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
          <v-btn
            color="warning"
            v-if="user.id!=null"
            flat
            @click="onDeleteUserButtonClick(user)"
          >
            Delete
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            :disabled="!valid"
            :loading="buttonSaveLoadingVisible"
            flat
            @click="onSaveUserButtonClick()"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
