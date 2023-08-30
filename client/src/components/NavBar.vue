<template>
    <nav>
        <ul class="nav-link-container">
            <li><router-link to="/" class="nav-link">Home</router-link></li>
            <li><router-link to="/posts" class="nav-link">Posts</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>

nav {
    background: rgb(50, 50, 80);
    height: var(--navbarheight);
    width: 100%;
    position: fixed;
    z-index: 10000;
    top:0
}

nav ul li{
    display: inline-block;
    line-height: var(--navbarheight);
}

.nav-link-container{
    display: flex;
    justify-content: space-around;
    width: 30%;
}

.nav-link {
    background: rgb(40, 40, 55);
    color: white;
    /* color: rgb(200, 200, 220); */
    font-family: "Century Gothic";
    font-size: 25px;
    font-weight: bold;
    padding: 5px 10px;
    border-style: hidden;
    border-radius: 3px;
    cursor: pointer;
}
</style>