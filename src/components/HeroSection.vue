<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/profile'

// Efecto de tipeo sobre las tecnologías
const words = ['Laravel', 'Vue.js', 'MySQL', 'PHP', 'JavaScript']
const typed = ref('')
let wi = 0
let ci = 0
let deleting = false
let timer

const tick = () => {
  const word = words[wi]
  typed.value = deleting ? word.slice(0, --ci) : word.slice(0, ++ci)
  let delay = deleting ? 55 : 110
  if (!deleting && ci === word.length) {
    deleting = true
    delay = 1500
  } else if (deleting && ci === 0) {
    deleting = false
    wi = (wi + 1) % words.length
    delay = 300
  }
  timer = setTimeout(tick, delay)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typed.value = words[0]
  } else {
    tick()
  }
})
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <section id="inicio" class="hero">
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="container hero-inner">
      <div class="hero-text">
        <p v-if="profile.available" class="badge">
          <span class="dot"></span> Disponible para proyectos
        </p>
        <p class="hello">Hola, soy</p>
        <h1 class="name">{{ profile.name }}</h1>
        <h2 class="role">
          {{ profile.role }} con <span class="typed">{{ typed }}</span><span class="caret">_</span>
        </h2>
        <p v-if="profile.degree" class="degree">{{ profile.degree }}</p>
        <p class="tagline">{{ profile.tagline }}</p>
        <div class="actions">
          <a href="#proyectos" class="btn btn-primary">Ver proyectos →</a>
          <a href="#contacto" class="btn">Contactarme</a>
          <a v-if="profile.cvUrl" :href="profile.cvUrl" class="btn" download>Descargar CV</a>
        </div>
      </div>

      <div class="terminal" aria-hidden="true">
        <div class="term-bar">
          <span></span><span></span><span></span>
          <em>~/portfolio</em>
        </div>
        <pre class="term-body"><span class="c">// routes/api.php</span>
<span class="k">Route</span>::<span class="f">get</span>(<span class="s">'/dev'</span>, <span class="k">fn</span>() => [
  <span class="s">'nombre'</span>   => <span class="s">'{{ profile.name }}'</span>,
  <span class="s">'backend'</span>  => [<span class="s">'PHP'</span>, <span class="s">'Laravel'</span>],
  <span class="s">'frontend'</span> => [<span class="s">'Vue'</span>, <span class="s">'HTML'</span>, <span class="s">'CSS'</span>, <span class="s">'JS'</span>],
  <span class="s">'database'</span> => <span class="s">'MySQL'</span>,
  <span class="s">'cafe'</span>     => <span class="k">true</span>,
]);</pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: 110px 0 70px;
  overflow: hidden;
}
.grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 56px 56px;
  opacity: 0.35;
  mask-image: radial-gradient(ellipse at 70% 40%, #000 10%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 70% 40%, #000 10%, transparent 70%);
}
.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 56px;
  align-items: center;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 0.8rem;
  padding: 6px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  margin: 0 0 28px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgba(198, 244, 50, 0.6);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  70% {
    box-shadow: 0 0 0 10px rgba(198, 244, 50, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(198, 244, 50, 0);
  }
}
.hello {
  font-family: var(--mono);
  color: var(--accent);
  margin: 0;
}
.name {
  font-size: clamp(2.8rem, 7vw, 5.2rem);
  line-height: 1;
  letter-spacing: -0.035em;
  margin: 8px 0 16px;
}
.role {
  font-size: clamp(1.15rem, 2.4vw, 1.6rem);
  font-weight: 500;
  color: var(--muted);
  margin: 0 0 22px;
  min-height: 2.6em;
}
.typed {
  color: var(--text);
  font-family: var(--mono);
}
.caret {
  color: var(--accent);
  font-family: var(--mono);
  animation: blink 1s steps(1) infinite;
}
.degree {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--mono);
  font-size: 0.9rem;
  color: var(--muted);
  margin: -8px 0 22px;
}
.degree::before {
  content: '';
  flex-shrink: 0;
  width: 28px;
  height: 1px;
  background: var(--accent);
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.tagline {
  max-width: 520px;
  color: var(--muted);
  margin: 0 0 34px;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.terminal {
  background: var(--bg-2);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.7), 12px 12px 0 -1px var(--accent);
  overflow: hidden;
}
.term-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--line);
}
.term-bar span {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--line);
}
.term-bar span:first-child {
  background: var(--accent-2);
}
.term-bar em {
  margin-left: auto;
  font-family: var(--mono);
  font-style: normal;
  font-size: 0.75rem;
  color: var(--muted);
}
.term-body {
  margin: 0;
  padding: 22px;
  font-family: var(--mono);
  font-size: 0.85rem;
  line-height: 1.8;
  overflow-x: auto;
  color: var(--text);
}
.c {
  color: #6f6a5f;
}
.k {
  color: var(--accent-2);
}
.f {
  color: #7dd3fc;
}
.s {
  color: var(--accent);
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }
  .terminal {
    box-shadow: 8px 8px 0 -1px var(--accent);
  }
}
@media (max-width: 480px) {
  .term-body {
    font-size: 0.72rem;
    padding: 16px;
  }
}
</style>
