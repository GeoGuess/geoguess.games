<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>
    <div>
    <MapComponent />

    <div class="home">
        <div
        v-if="data.features && data.features.length"
        class="features"
        >
          <div
              v-for="(feature, index) in data.features"
              :key="index"
              class="feature"
          >
              <h2>{{ feature.title }}</h2>
              <p>{{ feature.details }}</p>
          </div>
        </div>
    </div>
        <div         
        class="blocks"
        v-if="data.blocks && data.blocks.length"
        >
          
          <BlockComponent
            v-for="(block, index) in data.blocks"
            :key="index"
            :title="block.title"
            :text="block.text"
            :srcImg="block.srcImg"
            :altImg="block.altImg"
            :reverse="(index%2!==0)"
          />
          </div>
        </div>
    <div class="home">
        <Content class="theme-default-content custom" />

        <div
        v-if="data.footer"
        class="footer"
        >
        {{ data.footer }}
        </div>
    </div>
    </div>
</div>
</template>

<script>
import MapComponent from './MapComponent.vue'
import BlockComponent from './BlockComponent.vue'
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '@theme/util'
export default {
  name: 'HomeLayout',

  components: {
    BlockComponent,
    MapComponent,
    Home,
    Sidebar,
    Navbar
  },
  
  data () {
    return { 
      isSidebarOpen: false,
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return false
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
<style>
#app .home{
    padding-top: 0;
}
    
</style>