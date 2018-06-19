import sidebar from '../../components/app-sidebar/'
import appbar from '../../components/app-bar/'
import appStyle from '../../components/app-style/'
import style from './index.styl'

export default {
  name: 'home-section',
  data: { },
  components: {
    'app-sidebar':  sidebar,
    'app-bar':  appbar,
    'app-style':  appStyle,
  },
  template: `
    <v-app>
      <app-style>${style.toString()}</app-style>
      <app-bar></app-bar> 
      <app-sidebar></app-sidebar>
      <v-content row >
        <v-layout row wrap fill-height>
          <v-flex fill-height xs12 sm12 md3 lg3 class="list-section"></v-flex>
          <v-flex fill-height xs12 sm12 md3 lg3></v-flex>
        </v-layout>
      </v-content>
    </v-app>`
}