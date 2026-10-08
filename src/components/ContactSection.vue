<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile'

const copied = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}
</script>

<template>
  <section id="contacto" class="section">
    <div class="container">
      <div class="card reveal">
        <span class="eyebrow">04 — contacto</span>
        <h2 class="big">¿Tenés un proyecto?<br /><span>Hablemos.</span></h2>
        <p class="lead">
          Estoy abierto a trabajos freelance, posiciones full-time y colaboraciones.
          Escribime y te respondo a la brevedad.
        </p>
        <div class="actions">
          <a :href="`mailto:${profile.email}`" class="btn btn-primary">Enviar email →</a>
          <button class="btn copy" @click="copyEmail">
            {{ copied ? '¡Copiado! ✓' : profile.email }}
          </button>
        </div>
        <ul class="socials">
          <li v-for="s in profile.socials" :key="s.label">
            <a :href="s.url" target="_blank" rel="noopener">{{ s.label }} ↗</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: clamp(32px, 6vw, 72px);
  background: radial-gradient(circle at 100% 0%, rgba(198, 244, 50, 0.12), transparent 50%), var(--bg-2);
}
.big {
  font-size: clamp(2.2rem, 6vw, 4.2rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  margin: 12px 0 20px;
}
.big span {
  color: var(--accent);
}
.lead {
  max-width: 540px;
  color: var(--muted);
  margin: 0 0 32px;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 36px;
}
.copy {
  background: transparent;
  color: var(--text);
  cursor: pointer;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.socials {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.socials a {
  font-family: var(--mono);
  font-size: 0.9rem;
  color: var(--muted);
  text-decoration: none;
  border-bottom: 1px solid var(--line);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}
.socials a:hover {
  color: var(--accent);
  border-color: var(--accent);
}
</style>
