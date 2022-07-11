<template>
    <div>
        <HeaderMenu />
        <div class="content">
            <h4>By {{ postedBy }} {{ timeEllapsed }} ago</h4>
            <h2 v-html="title"></h2>
            <span v-html="content">

            </span>

        </div>
        <section class="more-articles">
            <h3>More Articles</h3>
            <div class="blog-container">
                <BlogCard v-for="blog in moreArticles" :key="blog.id" :blog="blog" />
            </div>
        </section>
    </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeaderMenu from '@/components/HeaderMenu.vue'
import BlogCard from '@/components/BlogCard.vue'
import fetchData from '@/api'
import { getTimeAgo } from '@/format-date'

export default {
    name: "BlogDetailsPage",
    components: {
        HeaderMenu,
        BlogCard
    },
    setup() {
        const route = useRoute()
        const blogs = ref([])

        const blogDetails = ref(null)
        onMounted(async () => {
            blogDetails.value = await fetchData(`posts/${route.params.id}`)


            blogs.value = await fetchData("posts")

        })

        const title = computed(() => blogDetails.value?.title?.rendered)
        const content = computed(() => blogDetails.value?.content?.rendered)
        const postedBy = computed(() => blogDetails.value?.parsely.meta.creator?.[0])
        const timeEllapsed = computed(() => getTimeAgo(blogDetails.value?.date || new Date()))
        const moreArticles = computed(() => blogs.value.filter(blog => blog.id !== route.params.id).slice(0, 3))

        watch(route, async (value) => {
            if (value) {
                blogDetails.value = await fetchData(`posts/${route.params.id}`)


                blogs.value = await fetchData("posts")
            }
        })
        return {
            blogs,
            title,
            content,
            postedBy,
            timeEllapsed,
            moreArticles
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    max-width: 768px;
    margin: 0 auto;
    margin-top: 91px;
    img{
        width: 100% !important;
        height: auto;
        object-fit: cover;
        object-position: center;
    }
    &__image {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 40px 0;

        img {
            width: 510px;
            height: 327px;
            object-fit: cover;
            object-position: center;
        }
    }
}

.more-articles {
    margin-top: 70px;
}

.blog-container {
    margin-top: 23px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}
</style>