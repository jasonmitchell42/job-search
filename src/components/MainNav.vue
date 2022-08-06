<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none md:inline-flex">
            <li
              v-for="(menuItem, index) in menuItems"
              :key="index"
              class="h-full ml-9 first:ml-0"
              main-nav-list-item
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="isLoggedIn" @click="loginUser" />
          <ActionButton v-else @click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Mitchell Careers",
      url: "htps://careers.google.com",
      menuItems: ["Teams", "Locations", "Students", "Jobs"],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
