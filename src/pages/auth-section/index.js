export default {
    name: 'auth-section',
    data: {},
    template: `<v-app>
    <v-content>
        <v-container>
            <v-layout row wrap class="mt-5">
                <v-flex lg6 md6 sm6 offset-lg4 offset-md4 offset-sm3 class="mt-5">
                    <h3>Login</h3>
                    <v-form>
                        <v-text-field label="Name" required></v-text-field>
                        <v-text-field label="Password" type="password" required></v-text-field>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
  </v-app>`
}