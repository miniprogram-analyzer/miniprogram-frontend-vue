<template>
    <div>
        <el-divider content-position="center">你还没有登录</el-divider>
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handlerelogin">去登录</el-button>
    </div>
</template>

<script>

import Vue from 'vue'

export default {
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods:{
      handlerelogin() {
      this.$store.dispatch('user/relogin')
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
  }
}
</script>