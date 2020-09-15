<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import visitorDashboard from './visitor'
import dengluDashboard from './denglu'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard, visitorDashboard,dengluDashboard},
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (this.roles.includes('editor')) {
      this.currentRole = 'editorDashboard'
    }
    if (this.roles.includes('visitor')) {
      this.currentRole = 'visitorDashboard'
    }
    if (this.roles.includes('denglu')) {
      this.currentRole = 'dengluDashboard'
    }
  }
}
</script>
