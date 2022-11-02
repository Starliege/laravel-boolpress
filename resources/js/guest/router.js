import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./pages/Home";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";
import BlogPage from "./pages/BlogPage";
import Contacts from "./pages/Contacts";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/chi-siamo",
            name: "about",
            component: About,
        },
        {
            path: "/blog",
            name: "blog",
            component: BlogPage,
        },
        {
            path: "/contatti",
            name: "contacts",
            component: Contacts,
        },
        {
            path: "/posts/:slug",
            name: "single-post",
            component: SinglePost,
        },
    ],
});

export default router;
