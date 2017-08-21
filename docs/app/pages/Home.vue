<template>
  <app-content>
    <ul>
      <li @click="changeName">
        Name: {{ user.name }}
      </li>

      <li @click="changeLastName">
        Full Name: {{ fullName }}
      </li>

      <li @click="changeRole">
        Role: {{ user.role }}
      </li>
    </ul>

    <button @click="setUserName">Action</button>
  </app-content>
</template>

<script>
  export default {
    name: 'Home',
    state: {
      default: ['user']
    },
    actions: {
      default: ['setFullName']
    },
    getters: {
      default: ['fullName']
    },
    methods: {
      changeName () {
        this.user.name = 'MM'
      },
      changeLastName () {
        this.user.lastName = 'Moura'
      },
      changeRole () {
        this.user.role = 'Senior Front End Engineer'
      },
      setUserName () {
        this.setFullName()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
