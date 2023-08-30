<template>
  <div>
    <h2>Login</h2>
    <form @submit="loginUser">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
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
    async loginUser(event) {
      event.preventDefault();
      try {
        const response = await axios.post('/api/users/sign_in', {
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