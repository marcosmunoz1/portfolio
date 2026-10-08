<script setup>
import { projects } from '../data/profile'
</script>

<template>
  <section id="proyectos" class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">03 — proyectos</span>
        <h2 class="section-title">Cosas que construí.</h2>
      </div>

      <div class="list">
        <article v-for="(p, i) in projects" :key="p.title" class="project reveal">
          <div class="media">
            <img v-if="p.image" :src="p.image" :alt="p.title" loading="lazy" />
            <div v-else class="placeholder" aria-hidden="true">
              <span>{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
          </div>
          <div class="info">
            <h3>{{ p.title }}</h3>
            <p>{{ p.description }}</p>
            <ul class="stack">
              <li v-for="t in p.stack" :key="t">{{ t }}</li>
            </ul>
            <div class="links">
              <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener" class="btn btn-primary">Ver demo ↗</a>
              <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="btn">Código ↗</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list {
  display: grid;
  gap: 28px;
}
.project {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: center;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg-2);
  transition: border-color 0.2s, opacity 0.7s ease, transform 0.7s ease;
}
.project:hover {
  border-color: var(--muted);
}
.project:nth-child(even) .media {
  order: 2;
}
.media {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--line);
}
.media img {
  width: 100%;
  height: auto;
}
.placeholder {
  width: 100%;
  aspect-ratio: 16 / 10;
  display: grid;
  place-items: center;
  background: repeating-linear-gradient(-45deg, var(--surface) 0 14px, var(--bg-2) 14px 28px);
}
.placeholder span {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 4rem;
  color: var(--accent);
}
h3 {
  margin: 0 0 10px;
  font-size: 1.6rem;
  letter-spacing: -0.01em;
}
.info p {
  color: var(--muted);
  margin: 0 0 18px;
}
.stack {
  list-style: none;
  padding: 0;
  margin: 0 0 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.stack li {
  font-family: var(--mono);
  font-size: 0.78rem;
  padding: 4px 10px;
  border-radius: 6px;
  background: var(--surface);
  border: 1px solid var(--line);
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
@media (max-width: 800px) {
  .project {
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 18px;
  }
  .project:nth-child(even) .media {
    order: 0;
  }
}
</style>
