<template>
  <header class="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
    <div class="absolute inset-0 bg-black/50 z-10"></div>
    <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000" class="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
    <div class="relative z-20 px-4">
      <span class="text-gold uppercase tracking-[0.6em] text-xs mb-4 block font-bold">Houston's Premier Private Estate</span>
      <h1 class="text-6xl md:text-9xl font-serif italic mb-6">A Legacy of Grandeur</h1>
      <p class="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-80 uppercase tracking-widest">Where your most precious moments find their majestic home.</p>
    </div>
  </header>
</template>

<style scoped>
@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}
.animate-slow-zoom { animation: slowZoom 20s infinite alternate linear; }
</style>