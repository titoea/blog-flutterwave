<template>
    <div class="card">
        <div class="card__image">
            <img src="../assets/images/rocket.png" alt="rocket" class="rocket">
            <h1>Optimizing CSS for faster page loads </h1>
            <img src="../assets/images/blog-bg.png" alt="blog background" class="bg-image">
        </div>
        <div class="card__details">
            <div class="card__details__content">
                <h4><span>Front-end</span> . 1 Hour Ago</h4>
                <h2>Optimizing CSS for faster page loads </h2>
                <p>
                    Not long ago I decided to improve the loading times of my website. It already loads pretty fast, but
                    I
                    knew there was still room for improvement and one of them was CSS loading. I will walk you through
                    the
                    process and show you how you can improve your load times as well.
                    <br /><br />
                    To see how CSS affects the load time of a webpage we first have to know how the browser converts an
                    HTML
                    document into a functional webpage...
                </p>
                <div class="bottom-text">
                    <h4>3 Min Read</h4>
                    <a>Read Full</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeadBlog",
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: row;
    margin-top: 66px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding: 8px;
    height: 280px;

    &__image {
        position: relative;
        background: $primary-red;
        height: 280px;
        padding: 0 16px;

        .rocket {
            margin-top: 64px;
        }

        .bg-image {
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }

    &__details {
        position: relative;
        width: 60%;
        height: 280px;

        &__content {
            padding: 12px 15px;
        }

        p {
            display: -webkit-box;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}

h2 {
    margin: 8px 0;
    font-weight: 900;
    color: $primary-black;
    font-size: $text-lg;
    line-height: 26px;
}

h1 {
    font-family: "Playfair Display";
    font-weight: 900;
    font-size: $text-xxl;
    color: white;
    margin: 0;
    z-index: 100;
    position: relative;
}

@media(max-width:1024px) {
    .card {
        flex-direction: column;
        height: auto;

        &__details {
            width: 100%;
        }
    }
}
</style>