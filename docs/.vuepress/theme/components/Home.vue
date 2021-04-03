<template>
<div>
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
            <ins class="adsbygoogle"
                style="display:block; margin: auto;"
                data-ad-client="ca-pub-3283982605864712"
                data-ad-slot="6943902825"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
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
            <SocialComponent/>
            <p>{{ data.footer }}<br/>
            <a href="https://www.netlify.com">This site is powered by Netlify</a></p>
        
        </div>
        <div id="content"></div>
        <script>
            window.cookieconsent.initialise({
                container: document.getElementById('content'),
                palette:{
                popup: {background: '#fff'},
                button: {background: '#aa0000'},
                },
                revokable:true,
                onStatusChange: function(status) {
                console.log(this.hasConsented() ?
                'enable cookies' : 'disable cookies');
                },
                law: {
                regionalLaw: true,
                },
                location: true,
            });
        </script>
    </div>
</div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import MapComponent from './MapComponent.vue'
import SocialComponent from './SocialComponent.vue'
import BlockComponent from './BlockComponent.vue'
export default {
  name: 'Home',

  components: { NavLink,
    BlockComponent,
    MapComponent,
    SocialComponent, },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding 0 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    margin 2% 0
    padding 1.2rem 0
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
