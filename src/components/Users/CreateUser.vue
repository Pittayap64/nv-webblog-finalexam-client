<template>
  <div>
    <h1>Create Users</h1>
    <form v-on:submit.prevent="createUser">
      <p>model: <input type="text" v-model="user.model" /></p>
      <p>brand: <input type="text" v-model="user.brand" /></p>
      <p>watt: <input type="text" v-model="user.watt" /></p>
      <p>power_input: <input type="text" v-model="user.power_input" /></p>
      <p>type: <input type="text" v-model="user.type" /></p>
      <p><button type="submit">create user</button></p>
    </form>
    <hr />
    <div>
      <p>model: {{ user.model }}</p>
      <p>brand: {{ user.brand }}</p>
      <p>watt: {{ user.watt }}</p>
      <p>power_input: {{ user.power_input }}</p>
      <p>status: {{ user.status }}</p>
      <p>type: {{ user.type }}</p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";

export default {
  data() {
    return {
      user: {
        model: "",
        brand: "",
        watt: "",
        power_input: "",
        status: "not continue",
        type: "portable"
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "users"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
