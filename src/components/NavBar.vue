<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/profile'

const open = ref(false)
const scrolled = ref(false)

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

const onScroll = () => (scrolled.value = window.scrollY > 20)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('')
  .slice(0, 2)
  .toLowerCase()
</script>

<template>
  <header :class="['nav', { scrolled }]">
    <div class="container nav-inner">
      

      <button
        class="burger"
        :aria-expanded="open"
        aria-label="Abrir menú"
        @click="open = !open"
      >
        <span :class="{ x: open }"></span>
      </button>

      <nav :class="['links', { open }]">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 0.25s ease, border-color 0.25s ease;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(18, 17, 15, 0.85);
  backdrop-filter: blur(12px);
  border-color: var(--line);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
}
.logo {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
}
.bracket {
  color: var(--accent);
}
.links {
  display: flex;
  gap: 32px;
}
.links a {
  font-family: var(--mono);
  font-size: 0.88rem;
  text-decoration: none;
  color: var(--muted);
  transition: color 0.2s;
}
.links a:hover {
  color: var(--accent);
}
.burger {
  display: none;
  background: none;
  border: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
}
.burger span,
.burger span::before,
.burger span::after {
  position: absolute;
  left: 9px;
  width: 22px;
  height: 2px;
  background: var(--text);
  transition: transform 0.25s, opacity 0.25s;
}
.burger span {
  top: 19px;
}
.burger span::before,
.burger span::after {
  content: '';
  left: 0;
}
.burger span::before {
  top: -7px;
}
.burger span::after {
  top: 7px;
}
.burger span.x {
  background: transparent;
}
.burger span.x::before {
  transform: translateY(7px) rotate(45deg);
}
.burger span.x::after {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 760px) {
  .burger {
    display: block;
  }
  .links {
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--line);
    transform: translateY(-120%);
    transition: transform 0.3s ease;
    z-index: -1;
  }
  .links.open {
    transform: none;
  }
  .links a {
    padding: 18px 20px;
    border-top: 1px solid var(--line);
    font-size: 1rem;
  }
}
</style>
