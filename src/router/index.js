import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import PlayView from '@/views/PlayView.vue'
import DownloadView from '@/views/DownloadView.vue'
import HiscoresView from '@/views/HiscoresView.vue'
import NewsView from '@/views/NewsView.vue'
import VoteView from '@/views/VoteView.vue'
import GuidesView from '@/views/GuidesView.vue'

const router = createRouter({
  history: import.meta.env.MODE === 'github-pages'
    ? createWebHashHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/play', name: 'play', component: PlayView },
    { path: '/download', name: 'download', component: DownloadView },
    { path: '/hiscores', name: 'hiscores', component: HiscoresView },
    { path: '/news', name: 'news', component: NewsView },
    { path: '/vote', name: 'vote', component: VoteView },
    { path: '/guides', name: 'guides', component: GuidesView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
