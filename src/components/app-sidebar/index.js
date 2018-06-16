export default {
    name: 'app-sidebar',
    data: {},
    template: `
        <v-navigation-drawer app>
            <v-toolbar flat light>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Application
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list dense class="pt-0">
            <v-list-tile>
                <v-list-tile-action>
                <v-icon></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                <v-list-tile-title></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            </v-list>
        </v-navigation-drawer>`
}

