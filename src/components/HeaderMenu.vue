<template>
    <header class="header">
        <div class="header__container">
            <router-link to="/">
                <img src="../assets/images/logo.png" />
            </router-link>
            <div class="icon">
                <img src="../assets/images/twitter.png" alt="twitter icon" class="icon__item">
                <span>.</span>
                <img src="../assets/images/dribbble.png" alt="dribble icon" class="icon__item">
                <span>.</span>
                <img src="../assets/images/figma.png" alt="figma icon" class="icon__item">
                <span>.</span>
                <img src="../assets/images/github.png" alt="github icon" class="icon__item">
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderMenu",
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;

    &__container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.icon {
    display: flex;
    align-items: center;

    span {
        margin: 0 10px;
        margin-bottom: 5px;
    }
}
</style>