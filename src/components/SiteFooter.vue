<script setup>
import { profile } from '../data/profile'
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container inner">
      <span>© {{ year }} {{ profile.name }}</span>
      <span class="mono">Hecho con Vue.js · Desplegado en Vercel</span>
      <a href="#inicio" class="mono">Volver arriba ↑</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--line);
  padding: 28px 0;
  font-size: 0.85rem;
  color: var(--muted);
}
.inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
}
.mono {
  font-family: var(--mono);
  font-size: 0.78rem;
}
a {
  text-decoration: none;
}
a:hover {
  color: var(--accent);
}
</style>
