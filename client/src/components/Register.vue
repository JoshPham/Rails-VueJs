<template>
  <div>
    <h2>Register</h2>
    <form @submit="registerUser">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async registerUser(event) {
      event.preventDefault();
      try {
        const response = await axios.post('/api/users', {
          user: {
            email: this.email,
            password: this.password,
          },
        });
        console.log(response.data); // Handle success or redirect
      } catch (error) {
        console.error(error.response.data); // Handle error
      }
    },
  },
};
</script>
