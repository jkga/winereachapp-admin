import sidebar from '../../components/app-sidebar/'
import appbar from '../../components/app-bar/'
export default {
    name: 'auth-section',
    data: {},
    components: {
        'app-sidebar': sidebar,
        'app-bar': appbar
    },
    template: `<v-app>
    <app-bar></app-bar>
    <app-sidebar></app-sidebar>
    <v-content>
        <v-container>
            
        </v-container>
    </v-content>
  </v-app>`
}