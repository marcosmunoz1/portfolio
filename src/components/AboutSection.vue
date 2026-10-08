<script setup>
import { profile } from '../data/profile'

const facts = [
  { k: 'Ubicación', v: profile.location },
  { k: 'Enfoque', v: 'Full-stack' },
  { k: 'Stack principal', v: 'Laravel + Vue' },
  { k: 'Base de datos', v: 'MySQL' },
]
</script>

<template>
  <section id="sobre-mi" class="section">
    <div class="container about reveal">
      <div class="section-head">
        <span class="eyebrow">01 — sobre mí</span>
        <h2 class="section-title">Del modelo de datos<br />al último píxel.</h2>
      </div>
      <div class="about-body">
        <div class="text">
          <p v-for="(p, i) in profile.about" :key="i">{{ p }}</p>
        </div>
        <dl class="facts">
          <div v-for="f in facts" :key="f.k">
            <dt>{{ f.k }}</dt>
            <dd>{{ f.v }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-body {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 56px;
}
.text p {
  margin: 0 0 18px;
  color: var(--muted);
}
.text p:first-child {
  color: var(--text);
  font-size: 1.2rem;
}
.facts {
  margin: 0;
  border-top: 1px solid var(--line);
}
.facts div {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
}
dt {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--muted);
}
dd {
  margin: 0;
  font-weight: 500;
  text-align: right;
}
@media (max-width: 800px) {
  .about-body {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
