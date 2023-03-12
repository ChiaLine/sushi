<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template lang="pug">
div
  WelcomeItem
    template(#icon='')
      DocumentationIcon
    template(#heading='') Documentation
    |       Vue&rsquo;s
    a(target='_blank', href='https://v2.vuejs.org/') official documentation
    |       provides you with all information you need to get started.
  WelcomeItem
    template(#icon='')
      ToolingIcon
    template(#heading='') Tooling
    |       This project is served and bundled with
    a(href='https://vitejs.dev/guide/features.html', target='_blank') Vite
    | . The recommended IDE
    |       setup is 
    a(href='https://code.visualstudio.com/', target='_blank') VSCode
    |  +
    a(href='https://github.com/johnsoncodehk/volar', target='_blank') Volar
    | . If you need to
    |       test your components and web pages, check out
    a(href='https://www.cypress.io/', target='_blank') Cypress
    |  and
    a(href='https://docs.cypress.io/guides/component-testing/introduction', target='_blank') Cypress Component Testing
    | .
    br
    |       More instructions are available in 
    code README.md
    | .
  WelcomeItem
    template(#icon='')
      EcosystemIcon
    template(#heading='') Ecosystem
    |       Get official tools and libraries for your project:
    a(target='_blank', href='https://pinia.vuejs.org/') Pinia
    | ,
    a(target='_blank', href='https://v3.router.vuejs.org/') Vue Router
    | ,
    a(target='_blank', href='https://vue-test-utils.vuejs.org/') Vue Test Utils
    | , and
    a(target='_blank', href='https://github.com/vuejs/devtools') Vue Dev Tools
    | . If you need
    |       more resources, we suggest paying
    a(target='_blank', href='https://github.com/vuejs/awesome-vue') Awesome Vue
    |       a visit.
  WelcomeItem
    template(#icon='')
      CommunityIcon
    template(#heading='') Community
    |       Got stuck? Ask your question on
    a(target='_blank', href='https://chat.vuejs.org') Vue Land
    | , our official Discord server, or
    a(target='_blank', href='https://stackoverflow.com/questions/tagged/vue.js') StackOverflow
    | .
    |       You should also subscribe to
    a(target='_blank', href='https://news.vuejs.org') our mailing list
    |  and follow the official
    a(target='_blank', href='https://twitter.com/vuejs') @vuejs
    |       twitter account for latest news in the Vue world.
  WelcomeItem
    template(#icon='')
      SupportIcon
    template(#heading='') Support Vue
    |       As an independent project, Vue relies on community backing for its sustainability. You can
    |       help us by
    a(target='_blank', href='https://vuejs.org/sponsor/') becoming a sponsor.
</template>
