<template>
  <div>
    <h1>Edit Users</h1>
    <h1>Edit User</h1>
    <form v-on:submit.prevent="editUser">
      <p>model: <input type="text" v-model="user.model" /></p>
      <p>brand: <input type="text" v-model="user.brand" /></p>
      <p>watt: <input type="text" v-model="user.watt" /></p>
      <p>power_input: <input type="text" v-model="user.power_input" /></p>
      <p>status: <input type="text" v-model="user.status" /></p>
      <p>type: <input type="text" v-model="user.type" /></p>
      <p><button type="submit">edit user</button></p>
    </form>
    <hr />
    <div>
      <p>model: {{ user.model }}</p>
      <p>brand: {{ user.brand }}</p>
      <p>watt: {{ user.watt }}</p>
      <p>power_input: {{ user.power_input }}</p>
      <p>status: {{ user.status }}</p>
      <p>type: {{ user.type }}</p>
      <p></p>
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
        status: "active",
        type: ""

      }
    };
  },
  methods: {
    async editUser() {
      try {
        await UsersService.put(this.user);
        this.$router.push({
          name: "users"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
