<script setup>
import { skillGroups } from '../data/profile'
</script>

<template>
  <section id="habilidades" class="section alt">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">02 — habilidades</span>
        <h2 class="section-title">Stack full-stack.</h2>
      </div>

      <div class="groups">
        <article
          v-for="(g, gi) in skillGroups"
          :key="g.title"
          class="group reveal"
          :style="{ transitionDelay: gi * 100 + 'ms' }"
        >
          <header>
            <h3>{{ g.title }}</h3>
            <span class="tag">{{ g.tag }}</span>
          </header>
          <ul class="chips">
            <li v-for="s in g.items" :key="s" class="chip">{{ s }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.alt {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
.group {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 28px;
  transition: border-color 0.2s, opacity 0.7s ease, transform 0.7s ease;
}
.group:hover {
  border-color: var(--accent);
}
header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 22px;
}
h3 {
  margin: 0;
  font-size: 1.35rem;
}
.tag {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
}
.chips {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 0.85rem;
  padding: 8px 15px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--bg-2);
  color: var(--muted);
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease,
    transform 0.15s ease;
}
.chip::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.5;
  transition: opacity 0.2s ease;
}
.chip:hover {
  color: var(--text);
  border-color: var(--accent);
  background: rgba(198, 244, 50, 0.07);
  transform: translateY(-2px);
}
.chip:hover::before {
  opacity: 1;
}
@media (prefers-reduced-motion: reduce) {
  .chip {
    transition: none;
  }
  .chip:hover {
    transform: none;
  }
}
</style>
