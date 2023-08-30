<template>
    <div class="main-container">
        <h1 class="main-title">Posts</h1>

        <div class="post-form">
            <div class="text-input">
                <input type="text" v-model="title" placeholder="Say what's on your mind..." class="title-input" />
                <textarea type="text" v-model="body" placeholder="Tell us more..." class="body-input" rows="1" />
            </div>

            <button v-if="isEditing" @click="updatePost" class="submit-button">Update</button>
            <button v-if="isEditing" @click="cancelEdit" class="cancel-button">Cancel</button>

            <button v-else @click="createPost" class="submit-button">Post</button>
        </div>

        <div v-for="post in posts" :key="post.id">
            <div class="post">
                <h1>{{ post.title }}</h1>
                <p class="post-body">{{ post.body }}</p>

                <div>
                    <button @click="editPost(post.id)" class="post-mod-button">Edit</button>
                    <button @click="deletePost(post.id)" class="post-mod-button">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([])
const title = ref('')
const body = ref('')
const post_id = ref(0)
const isEditing = ref(false)
const API_URL = "http://localhost:3000/posts";

onMounted(async() => {
    const res = await fetch(API_URL)
    posts.value = await res.json()
})

function alertMessage(error_msg) {
  alert(error_msg);
}

const createPost = async() => {
    if (title.value) {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                body: body.value
            })
        })

        const data = await res.json()

        posts.value.push(data)
        title.value = ''
        body.value = ''
        post_id.value = 0;
    } else {
        alertMessage("Title can't be blank!")
    }
}

const updatePost = async() => {
    if (title.value) {
        const res = await fetch (`${API_URL}/${post_id.value}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                body: body.value,
                id: post_id.value
            })
        })

        const data = await res.json()

        const index = posts.value.findIndex(post => post.id === data.id)
        posts.value[index] = data

        title.value = ''
        body.value = ''
        post_id.value = 0;
        isEditing.value = false
    } else {
        alertMessage("Title can't be blank!")
    }
}

const cancelEdit = () => {
    title.value = ''
    body.value = ''
    post_id.value = 0;
    isEditing.value = false
}

const deletePost = async(id) => {
    await fetch (`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    posts.value = posts.value.filter(post => post.id !== id)
}

const editPost = async(id) => {
    const post = posts.value.find(post => post.id === id)

    title.value = post.title
    body.value = post.body
    post_id.value = post.id
    isEditing.value = true

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<style scoped>
.main-title {
    margin: 15px 0;
}

.text-input {
    background-color: rgb(35, 35, 50);
    width: 100%;
    border-radius: 5px;
    margin: auto;
    padding: 5px
}

.title-input {
    background-color: rgb(35, 35, 50);
    color: white;
    width: 100%;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 35px;
    border: hidden;
    border-radius: 5px;
    padding: 3px;
    outline: none;
}

.body-input {
    background-color: rgb(35, 35, 50);
    color: white;
    width: 100%;
    height: auto;
    font-family: "Century Gothic";
    font-size: 35px;
    border: hidden;
    border-radius: 5px;
    padding: 3px;
    display: block;
    overflow: hidden;
    outline: none;
    resize: vertical;
}

.submit-button {
    background-color: rgb(100, 100, 160);
    color: white;
    font-family: "Century Gothic";
    font-size: 35px;
    font-weight: bold;
    border: hidden;
    border-radius: 4px;
    margin: 15px 0;
    padding: 3px 5px;
    cursor: pointer;
}

.cancel-button {
    background-color: rgb(50, 50, 80);
    color: white;
    font-family: "Century Gothic";
    font-size: 35px;
    font-weight: bold;
    border: hidden;
    border-radius: 4px;
    margin: 15px;
    padding: 3px 5px;
    cursor: pointer;
}

.post-container {
    min-height: 500px;
}

.post {
    border-width: 1px 0 0 0;
    border-style: solid;
    border-color: rgb(40, 40, 40);
    margin-bottom: 30px;
}

.post > * {
    margin: 15px 0;
}

.post-body {
    font-size: 25px;
}

.post-mod-button {
    background-color: rgb(50, 50, 80);
    color: white;
    font-family: "Century Gothic";
    font-size: 25px;
    font-weight: bold;
    border: hidden;
    border-radius: 4px;
    margin-right: 10px;
    padding: 3px 5px;
    cursor: pointer;
}
</style>