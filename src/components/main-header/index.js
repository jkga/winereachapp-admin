export default {
    name: 'main-header',
    data: function () {
        return {
            count: 0
        }
    },
    template: `<v-app>
    <v-content>
      <v-container>
      Hello world
        <v-alert color="success" icon="check_circle" value="true">
            This is a success alert.
        </v-alert>
         <button v-on:click="count++">You clicked me {{ count }} times.</button>
      </v-container>
    </v-content>
  </v-app>`
}