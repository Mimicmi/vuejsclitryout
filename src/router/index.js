import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/Home";
import Contact from "../components/Contact";
import Shop from "../components/Shop";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component: Home
        },
        {
            path:"/shop",
            name:"Shop",
            component: Shop
        },
        {
            path:"/contact",
            name:"Contact",
            component: Contact
        }
    ]
});

export default router;