import HomePage from "@/pages/HomePage.vue"
import BlogDetailsPage from "@/pages/BlogDetailsPage.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/:id/details",
        name: "blog-details",
        component: BlogDetailsPage
    }
]

export default routes