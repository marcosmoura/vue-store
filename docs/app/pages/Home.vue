<template>
  <app-content>
    <ul>
      <li>
        Title: <span @click="changeName">{{ user.name }}</span>
      </li>

      <li>
        Role: <span @click="changeRole">{{ user.role }}</span>
      </li>
    </ul>

    <button @click="logName">Action</button>
  </app-content>
</template>

<script>
  export default {
    name: 'Home',
    state: {
      default: ['user']
    },
    actions: {
      default: ['logUserName']
    },
    methods: {
      changeName () {
        this.user.name = 'Marcos Moura'
      },
      changeRole () {
        this.user.role = 'Senior Front End Engineer'
      },
      logName () {
        console.log(this.logUserName())
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
