import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home";
import Contact from "../views/Contact";
import Shop from "../views/Shop";

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