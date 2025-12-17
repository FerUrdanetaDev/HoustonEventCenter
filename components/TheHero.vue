<template>
  <header class="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
    
    <div class="absolute inset-0 z-10 bg-[radial-gradient(circle,_transparent_20%,_rgba(0,0,0,0.7)_100%)]"></div>
    
    <div class="absolute inset-0 bg-black/20 z-[11]"></div>

    <img 
      src="/hero-background.png" 
      alt="Houston Event Center Grand Hall"
      class="absolute inset-0 w-full h-full object-cover animate-slow-zoom" 
    />
    
    <div class="relative z-20 px-4 max-w-5xl">
      <span class="text-gold uppercase tracking-[0.6em] text-xs mb-6 block font-bold">
        Houston's Premier Private Estate
      </span>
      <h1 class="text-6xl md:text-[10rem] font-serif italic mb-8 leading-tight">
        A Legacy of <br class="hidden md:block"> Grandeur
      </h1>
      <p class="text-sm md:text-lg font-light max-w-2xl mx-auto opacity-90 uppercase tracking-[0.3em] leading-relaxed">
        Where your most precious moments <br class="hidden md:block"> find their majestic home.
      </p>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-50">
      <div class="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
    </div>
  </header>
</template>

<style scoped>
@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.15); }
}
.animate-slow-zoom { 
  animation: slowZoom 25s infinite alternate ease-in-out; 
  will-change: transform;
}

/* Tipografía extra para el efecto Royal */
h1 {
  text-shadow: 0px 4px 20px rgba(0,0,0,0.3);
}
</style>