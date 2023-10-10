<template>
  <div id="navbar">
    <Disclosure as="nav" v-slot="{ open }">
      <div class="header">
        <div class="header-item">
          <div class="home-icon">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="disclosureBtn"
            >
              <span class="sr-only">{{ titles.OPEN_MAIN_MENU }}</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- ------------------------------  -->
          <div
            class="navbar"
          >
            <div class="navbar-icon">
              <!-- logo -->
              <router-link to="/home">
                <div>
                  <!-- <img :src="logo" class="block h-8 w-auto lg:hidden" /> -->
                  <home-logo
                  class="block h-8 w-auto lg:hidden"
                  :width="20"
                  :height="24"
                  :color="'var(--green-1)'"
                  >
                </home-logo>
                </div>
                <div>
                  <!-- <img :src="logo" class="hidden h-8 w-auto lg:block" /> -->
                  <home-logo class="hidden h-8 w-auto lg:block"
                  :width="30"
                  :height="34"
                  :color="'var(--green-1)'"
                  ></home-logo>
                </div>
              </router-link>
            </div>
            <div class="navbar-items">
              <div class="item">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-red-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
          <div
            class="user-preference"
          >
            <button
              type="button"
              class="notification"
            >
              <span class="sr-only">{{ titles.VIEW_NOTIFICATIONS }}</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="profile">
              <div>
                <MenuButton
                  class="profile-img"
                >
                  <span class="sr-only">{{ titles.OPEN_USER_MENU }}</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="profile-options"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      href="/profile"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{titles.PROFILE}}</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{titles.SETTING}}</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ titles.SIGN_OUT }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
            <!-- ------------------------------  -->
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            @onClick="test"
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
  <!-- -------------------------------- -->
  <!--  <div class="nav-bar">
      <router-link to="/products" class="products-link">
        <div class="logo-wrap">
          <img :src="logo" />
        </div>
      </router-link> 
      <router-link to="/shopping" class="cart-link">
        <button>Shopping Cart</button>
      </router-link>
    </div>-->
</template>

<script>

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

//-----
import logo from "@/assets/logo-2.svg";
import HomeLogo from "../components/icons/homeIcon.vue"
//@ = to direct to source directory

export default {
  name: "NavBar",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    HomeLogo,
  },
  data() {
    return {
      logo,
      navigation: [
        { name: "Home", href: "/home", current: true },
        { name: "Products", href: "/products", current: false },
        { name: "Shopping Cart", href: "/shopping", current: false },
        { name: "Manage Product", href: "/manageproduct", current: false },
      ],
      titles: {
        OPEN_MAIN_MENU: "Open main menu",
        VIEW_NOTIFICATIONS:"View notifications",
        OPEN_USER_MENU: "Open user menu",
        PROFILE: "Your Profile",
        SETTING: "Settings",
        SIGN_OUT: "Sign out",
      }
    };
  },
  method: {
    test (){
      console.log('titles OBJ:',this.titles);
      
    }
  }
};
</script>

<style scoped>

.navbar {
  @apply flex flex-1 items-center justify-center sm:items-stretch sm:justify-center;
}

.navbar-icon {
  @apply flex flex-shrink-0 items-center;
}

.navbar-items {
  @apply hidden sm:ml-6 sm:block;
}

.item {
  @apply flex space-x-4;
}

.user-preference {
  @apply absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0;
}

.notification {
  @apply rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800;
}

.profile {
  @apply relative ml-3;
}

.profile-img {
  @apply flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800;
}

.profile-options {
  @apply absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
}
/* Mobile  */
.disclosureBtn {
  @apply inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white;
}

.home-icon {
  @apply absolute inset-y-0 left-0 flex items-center sm:hidden;
}

.header {
  @apply mx-auto max-w-7xl px-2 sm:px-6 lg:px-8;
}

.header-item {
  @apply relative flex h-16 items-center justify-between;
}

.products-link {
  text-align: center;
  display: block;
  color: var(--link);
  font-size: var(--font-m);
  left: 32px;
  position: absolute;
  top: 16px;
  text-decoration: none;
}

.products-link h1 {
  margin: 0;
}

.cart-link {
  position: absolute;
  right: 16px;
  top: 16px;
}

.current-item {
  color: red;
}

.navbar-list-item {
  color: rgb(255, 0, 204);
}
.navbar-list-item:hover {
  color: blue;
  font-size: 20px;
}
</style>
