<template>
  <header class="mousepack-header">
    <nav id="navigation" :class="{ expanded: isMenuOpen }" class="header-nav container-xxl">
      <ul class="header-nav-items row">
        <li v-for="link in NAV_LINKS" :key="link.name" class="header-nav-item">
          <NuxtLink
            :to="link.to"
            :class="{ 'header-nav-link-home': isHome }"
            class="header-nav-link"
            @click="closeMenu"
            >{{ link.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>

    <BurgerMenu :expanded="isMenuOpen" class="header-burger-menu" name="navigation" @click="toggleMenu" />

    <IconHeaderShape class="header-logo-shape" />
    <NuxtLink to="/" class="header-logo-link" aria-label="go to home page" @click="closeMenu">
      <IconLogo class="header-logo-icon" />
    </NuxtLink>
  </header>

  <main class="mousepack-main">
    <NuxtPage />
  </main>

  <footer class="mousepack-footer">
    <div class="container">
      <div class="footer-wrapper row">
        <div class="footer-mail col-12 col-lg-4">
          <h3 class="footer-mail-title">Get in touch!</h3>
          <NuxtLink :to="`mailto:${GET_IN_TOUCH_MAIL}`" class="footer-mail-link" target="_blank" external>
            {{ GET_IN_TOUCH_MAIL }}
          </NuxtLink>
        </div>

        <div class="footer-form col-12 col-md-6 col-lg-4">
          <p class="footer-form-label" for="subscribe-input">Join MousePack newsletter:</p>
          <p v-if="isSubscribePopupError" class="footer-form-error">Oops! It seems you're using ads blocker</p>
          <button v-else class="footer-form-submit" type="button" @click="subscribe">
            <span v-if="isSubscribePopupLoading" class="submit-loader" />
            <span v-else class="submit-text">Subscribe</span>
          </button>
        </div>

        <div class="footer-socials col-12 col-md-6 col-lg-4">
          <h3 class="footer-socials-title">Let’s be friends!</h3>
          <NuxtLink
            to="https://www.linkedin.com/company/mousepack/"
            class="footer-socials-link"
            target="_blank"
            external
            title="Go to our LinkedIn"
            aria-label="go to MousePack LinkedIn"
          >
            <IconLinkedIn />
          </NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/mousepack.co/"
            class="footer-socials-link"
            target="_blank"
            external
            title="Go to our Instagram"
            aria-label="go to MousePack Instagram"
          >
            <IconInstagram />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconHeaderShape from '~/components/icons/IconHeaderShape.vue';
import IconLogo from '~/components/icons/IconLogo.vue';
import IconInstagram from '~/components/icons/IconInstagram.vue';
import IconLinkedIn from '~/components/icons/IconLinkedIn.vue';
import BurgerMenu from '~/components/BurgerMenu.vue';

const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'Play', to: '/play' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const GET_IN_TOUCH_MAIL = 'alex@mousepack.com';

const { lgAndDown } = useDisplay();
const route = useRoute();
const config = useRuntimeConfig();

const isMenuOpen = ref<boolean>(false);
const isSubscribePopupLoading = ref<boolean>(false);
const isSubscribePopupError = ref<boolean>(false);

useServerHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
    { rel: 'icon', type: 'image/png', sizes: '180x180', href: '/favicon-180x180.png' },
    { rel: 'apple-touch-icon', type: 'image/png', href: '/favicon-180x180.png' },
  ],
  htmlAttrs: { lang: 'en' },
});

useServerSeoMeta({
  ogLocale: 'en',
  ogImageUrl: '/favicon.png',
  ogImageAlt: 'MousePack',
  ogType: 'website',
  twitterImage: '/favicon.png',
  twitterImageAlt: 'MousePack',
  twitterCard: 'summary_large_image',
  twitterSite: '@AlexBradt',
  robots: { noindex: true }, // TODO: remove when go to production
});

const isHome = computed<boolean>(() => route.path === '/');

const openMenu = () => {
  isMenuOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = 'auto';
};

const toggleMenu = () => (isMenuOpen.value ? closeMenu() : openMenu());

const onSubscribePopupError = () => {
  isSubscribePopupLoading.value = false;
  isSubscribePopupError.value = true;
};

const subscribe = () => {
  isSubscribePopupLoading.value = true;
  useCookie('MCPopupClosed').value = null;
  useCookie('MCPopupSubscribed').value = null;
  useHead({
    script: [
      {
        key: Math.random().toString(16).slice(2),
        id: 'mcjs',
        src: config.public.mailchimpPopupSrc,
        type: 'text/javascript',
        onerror: onSubscribePopupError,
      },
    ],
  });
  setTimeout(() => (isSubscribePopupLoading.value = false), 1500);
};

watch(() => lgAndDown.value, closeMenu);
</script>

<style scoped lang="scss">
$header-height: 60px;
$header-shape-width: 390px;
$header-shape-bottom: 40px;
$header-item-transition-cubic: cubic-bezier(0.4, 0.01, 0.165, 0.99);
$nav-links: 4;

.mousepack {
  &-header {
    position: relative;
    height: $header-height;
    background-color: $primary;
  }

  &-footer {
    background-color: $primary;
  }
}

.header {
  &-nav {
    position: relative;
    top: $header-height - 1px;
    z-index: 100;
    height: 0;
    overflow: hidden;
    background-color: $primary;
    transition: all 500ms ease-out;
    transition-delay: 200ms;

    &-item {
      width: fit-content;
      opacity: 0;
      transition:
        transform 500ms $header-item-transition-cubic,
        opacity 600ms $header-item-transition-cubic;
      transform: scale(1.15);

      @for $i from 1 through $nav-links {
        &:nth-child(#{$i}) {
          transition-delay: #{560 - ($i * 7)}ms;
        }
      }
    }

    &-items {
      position: absolute;
      top: 100px;
      left: 50%;
      flex-direction: column;
      gap: 26px;
      align-items: center;
      justify-content: center;
      height: fit-content;
      margin: 0;
      transform: translateX(-50%);
    }

    &.expanded {
      height: 100vh;
      transition: all 300ms ease-in;
      transition-delay: 250ms;

      .header-nav-item {
        opacity: 1;
        transform: scale(1);

        @for $i from 1 through $nav-links {
          &:nth-child(#{$i}) {
            transition-delay: #{25 * $i + 400}ms;
          }
        }
      }
    }

    &-link {
      font-size: 58px;
      font-weight: 700;
      line-height: 76px;
      color: $white;

      &:hover,
      &.router-link-active {
        color: $secondary;
      }
    }
  }

  &-burger-menu {
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 15;
  }

  &-logo {
    &-shape {
      position: absolute;
      bottom: $header-shape-bottom;
      left: 50%;
      z-index: 5;
      order: 2;
      width: 100%;
      max-width: $header-shape-width;
      color: $primary;
      transform: translate(-50%, 100%);
    }

    &-link {
      position: absolute;
      top: 35px;
      left: 50%;
      z-index: 105;
      transform: translateX(-50%);
    }

    &-icon {
      order: 1;
      width: 100px;
    }
  }
}

.footer {
  &-wrapper {
    max-width: 324px;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 0 auto;
  }

  &-mail {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    margin: 0 0 40px;
    font-weight: 700;

    &-title {
      font-size: 30px;
      line-height: 40px;
      color: $white;
      text-align: center;
    }

    &-link {
      width: fit-content;
      font-size: 16px;
      line-height: 22px;
      color: $white;
    }
  }

  &-form {
    display: grid;
    grid-template-rows: min-content;
    grid-template-columns: 3fr 2fr;
    gap: 9px;
    margin: 0 0 36px;
    font-size: 16px;
    line-height: 22px;

    &-label {
      display: inline-block;
      grid-column: span 2;
      width: 100%;
      margin: 0 0 3px;
      font-weight: 700;
      color: $white;
      text-align: center;
    }

    &-error {
      grid-column: span 2;
      font-weight: 600;
      color: $warning;
      text-align: center;
    }

    &-submit {
      grid-column: span 2;
      width: 100%;
      height: fit-content;
      padding: 13px;
      font-weight: 700;
      color: $white;
      text-align: center;
      background-color: $secondary;
      border-radius: 14px;
      transition: all 200ms ease-in-out;

      &:hover {
        box-shadow: rgba($typography, 0.15) 3px 3px 4px;
      }

      .submit-loader {
        box-sizing: border-box;
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid $white;
        border-bottom-color: transparent;
        border-radius: 50%;
        animation: rotation 1s linear infinite;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    }
  }

  &-socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    align-items: center;

    &-title {
      grid-column: span 2;
      margin: 0 0 -10px;
      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
      color: $white;
      text-align: center;
    }

    &-link {
      &:nth-child(2) {
        text-align: end;
      }

      &:last-child {
        text-align: start;
      }
    }
  }
}

@include media-breakpoint-up(md) {
  .header {
    &-logo {
      &-shape {
        bottom: $header-shape-bottom * 1.1;
        max-width: $header-shape-width * 1.1;
      }

      &-icon {
        width: 120px;
      }
    }
  }

  .footer {
    &-wrapper {
      max-width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    &-mail {
      gap: 12px;
      margin: 0 0 45px;

      &-title {
        font-size: 36px;
        line-height: 48px;
      }

      &-link {
        font-size: 20px;
        line-height: 28px;
      }
    }

    &-form {
      grid-template-columns: 200px 117px;
      margin: 0;
      font-size: 20px;
      line-height: 28px;

      &-label,
      &-error {
        text-align: left;
      }

      &-submit {
        grid-column: span 1;
        padding: 9px;
      }
    }

    &-socials {
      gap: 36px;

      &-title {
        margin: 0 0 -28px;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
}

@include media-breakpoint-up(lg) {
  .header {
    &-nav {
      position: relative;
      top: 0;
      height: 100%;
      background-color: transparent;
      transition: none;

      &-items {
        position: static;
        flex-direction: row;
        gap: 0;
        justify-content: space-between;
        max-width: 35%;
        height: 100%;
        margin-left: auto;
        transform: none;
      }

      &-item {
        opacity: 1;
        transition: none;
        transform: none;
      }

      &-link {
        position: relative;
        font-size: 20px;
        line-height: 28px;

        &::before {
          position: absolute;
          right: auto;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 4px;
          content: '';
          background: $secondary;
          transition: 300ms ease-in-out;
        }

        &:hover,
        &.router-link-active {
          color: $white;

          &::before {
            right: 0;
            left: auto;
            width: 100%;
          }

          &[href='/'].header-nav-link-home {
            &::before {
              display: none;
            }
          }
        }
      }
    }

    &-burger-menu {
      display: none;
    }

    &-logo {
      &-shape {
        bottom: $header-shape-bottom * 1.2;
        max-width: $header-shape-width * 1.2;
      }

      &-icon {
        width: 130px;
      }
    }
  }

  .footer {
    &-wrapper {
      padding-top: 65px;
      padding-bottom: 65px;
    }

    &-mail {
      gap: 20px;
      align-items: flex-start;
      order: 1;
      margin: 0;

      &-title {
        font-size: 40px;
        line-height: 54px;
      }
    }

    &-form {
      order: 3;

      &-label {
        text-align: start;
      }

      &-submit {
        height: 40px;
        font-size: 16px;
        line-height: 16px;
      }
    }

    &-socials {
      order: 2;
    }
  }
}

@include media-breakpoint-up(xl) {
  .header {
    &-logo {
      &-shape {
        bottom: $header-shape-bottom * 1.3;
        max-width: $header-shape-width * 1.3;
      }

      &-icon {
        width: 140px;
      }
    }
  }
}
</style>

<style lang="scss">
.mousepack {
  &-icon {
    color: $white;
    fill: currentcolor;
  }
}
</style>
