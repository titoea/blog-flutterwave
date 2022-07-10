<template>
    <div>
        <HeaderMenu />
        <HeadBlog />
        <div class="blog-container">
            <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
        </div>
        <div class="join-container">
            <h3>Join our Team of Writers</h3>
            <h5>On dasdas, writers earn a living doing what they love.<br />
                Getting started is easy. Just pay a one time <b>$25 fee</b> and everything is ready to go.
            </h5>
            <button @click="openPaymentModal">JOIN US</button>
        </div>

    </div>
</template>

<script>
import { ref, onMounted, onServerPrefetch } from 'vue'
import { useFlutterwave } from "flutterwave-vue3"
import HeaderMenu from '@/components/HeaderMenu.vue'
import HeadBlog from '@/components/HeadBlog.vue'
import BlogCard from '@/components/BlogCard.vue'
import fetchData from '@/api'

export default {
    name: 'HomePage',
    components: {
        HeaderMenu,
        HeadBlog,
        BlogCard
    },
    setup() {
        const blogs = ref([])

        onServerPrefetch(async () => {
            blogs.value = await fetchData("posts")
        })
        onMounted(async () => {
            if (blogs.value.length <= 0) {
                blogs.value = await fetchData("posts")
            }
        })

        const generateReference = () => {
            let date = new Date()
            return date.getTime().toString();
        }

        const closePaymentModal = () => {
            console.log("close")
        }
        const openPaymentModal = () => {
            useFlutterwave({
                amount: 4000,//amount
                callback(data) {
                    console.log(data)
                },
                country: "NG",
                currency: "NGN",
                customer: { email: 'ahadzi.airdem@gmail.com', name: 'Edem', phone_number: '+2348188417833' },
                customizations: { description: "Pay with yourCompanyname", logo: "", title: "YourCompany" },
                
                onclose: closePaymentModal(),

                payment_options: "card",
                public_key: "FLWPUBK_TEST-23839aba926aef8b976ecb9db2b2806b-X",
                redirect_url: "",
                tx_ref: generateReference()

            })
        }
        return {
            blogs,
            openPaymentModal
        }
    }
}

</script>

<style lang="scss" scoped>
.blog-container {
    margin-top: 60px;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    row-gap: 48px;
}

.join-container {
    text-align: center;
    margin-top: 165px;

    h3 {
        color: $primary-black;
        font-size: $text-xl;
        font-weight: 500;
        margin-bottom: 12px;
    }

    h5 {
        font-size: $text-lg;
        font-weight: 400;
        line-height: 32px;
        color: $light-black;
    }

    button {
        background-color: black;
        padding: 12px 55px;
        color: white;
        font-size: $text-md;
        font-weight: 500;
    }
}
</style>
