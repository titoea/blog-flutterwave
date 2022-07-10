<template>
    <div class="blog">
        <div class="blog__image-wrapper">
            <img :src="blog.jetpack_featured_media_url" :alt="title" class="blog__image" />
        </div>
        <div class="blog__details">
            <h4><span>Front-end</span> . 1 Month Ago</h4>
            <h3 v-html="title"></h3>
            <p class="blog__content" v-html="content">
            </p>
            <div class="bottom-text">
                <h4>12 Min Read</h4>
                <router-link :to="`/${blog.id}/details`">Read Full</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    name: "BlogCard",
    props: {
        blog: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const title = computed(() => props.blog.title?.rendered)
        const content = computed(() => props.blog.excerpt?.rendered)
        return {
            title,
            content
        }
    }
}
</script>

<style lang="scss" scoped>
.blog {
    position: relative;
    width: 350px;
    height: 420px;
    padding: 8px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;

    &__image-wrapper{
        width: 100%;
        height: 200px;
        background-color: #fbf4ef;
        border-radius: 5px;
        overflow: hidden;
    }
    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    &__content {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__details {
        margin-top: 16px;

        h3 {
            margin: 8px 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

}
</style>