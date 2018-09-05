<template>
  <mdc-layout-app>
  <mdc-toolbar slot="toolbar">
    <mdc-toolbar-row>
      <mdc-toolbar-section align-start >
        <mdc-toolbar-menu-icon event="toggle-drawer">
        </mdc-toolbar-menu-icon>
        <mdc-toolbar-title>Title</mdc-toolbar-title>
      </mdc-toolbar-section>
      <mdc-toolbar-section align-end>
        <mdc-toolbar-icon event="show-help" icon="help">
        </mdc-toolbar-icon>
      </mdc-toolbar-section>
    </mdc-toolbar-row>
  </mdc-toolbar>
  
  <mdc-drawer slot="drawer" toggle-on="toggle-drawer" persistent>
    <mdc-drawer-list>
      <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
      <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
      <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
 
  <main>
    <mdc-card class="card-demo">
      <mdc-card-header title="Title goes here" 
                       subtitle="Subtitle goes  here " large-title>
      </mdc-card-header>
        <mdc-card-text>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </mdc-card-text> 
        <mdc-card-actions>
          <mdc-card-action-button>Action 1</mdc-card-action-button>
          <mdc-card-action-button>Action 2</mdc-card-action-button>
        </mdc-card-actions>
      </mdc-card>
    <mdc-fab fixed icon="edit"/>     
  </main>
  
</mdc-layout-app>
</template>

<script>
import Vue from 'vue'
import VueMDCAdapter from 'vue-mdc-adapter'

Vue.use(VueMDCAdapter)

export default {
  name: 'Mdc',
  data () {   
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
