import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import UserProfilePage from "./pages/UserProfilePage.vue";
import HomePage from "./pages/HomePage.vue";
import ProductManage from "./pages/ProductManage.vue";

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/home",
          component: HomePage,
        },
        {
          path: "/productdetail/:productId",
          component: ProductDetailPage,
        },
        {
          path: "/products",
          component: ProductsPage,
        },
        {
          path: "/shopping",
          component: ShoppingCartPage,
        },
        {
          path: "/manageproduct",
          component: ProductManage,
        },
        {
          path: "/profile",
          component: UserProfilePage,
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFoundPage,
        },
      ],
    })
  )
  .mount("#app");
