<template>
  <section id="experience" class="py-32 px-6 bg-[#FDFCFB]">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-24 flex flex-col items-center">
        <img 
          src="/logo.png" 
          alt="Logo" 
          class="h-32 md:h-44 w-auto mb-10 drop-shadow-sm"
        />
        <span class="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-4 block">White Glove Service</span>
        <h2 class="text-5xl md:text-7xl font-serif italic text-gray-900 leading-tight">
          One Event. <span class="text-gold">One Sole Vision.</span>
        </h2>
        <div class="h-[1px] w-24 bg-gold/30 mt-8"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        
        <div class="md:col-span-2 group relative overflow-hidden bg-white border border-gray-100 rounded-[40px] p-10 flex flex-col justify-center transition-all duration-500 hover:shadow-2xl">
          <div class="absolute top-0 right-0 p-8 text-gold/20 text-6xl font-serif italic group-hover:text-gold/40 transition-colors">01</div>
          <h3 class="text-3xl font-serif italic text-gray-900 mb-4">Total Exclusivity</h3>
          <p class="text-gray-500 text-sm leading-relaxed max-w-md">
            We host only one event per day. Our entire 5-star staff, majestic hall, and private security are focused entirely on your legacy.
          </p>
          <div class="mt-6 flex items-center gap-2">
            <span class="h-px w-6 bg-gold"></span>
            <span class="text-[9px] uppercase tracking-widest text-gold font-bold">Priority One</span>
          </div>
        </div>

        <div class="group relative overflow-hidden bg-white border border-gray-100 rounded-[40px] p-10 flex flex-col justify-end transition-all duration-500 hover:shadow-2xl">
          <h3 class="text-2xl font-serif italic text-gray-900 mb-2">Luxury Suites</h3>
          <p class="text-gray-500 text-xs leading-relaxed">
            Private VIP & Groom suites designed for ultimate comfort.
          </p>
          <div class="absolute top-10 left-10 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all italic font-serif">S</div>
        </div>

        <div class="group relative overflow-hidden bg-white border border-gray-100 rounded-[40px] p-10 flex flex-col justify-end transition-all duration-500 hover:shadow-2xl">
          <h3 class="text-2xl font-serif italic text-gray-900 mb-2">Expert Staff</h3>
          <p class="text-gray-500 text-xs leading-relaxed">
            Certified professional waitstaff trained in royal etiquette.
          </p>
          <div class="absolute top-10 left-10 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all italic font-serif">W</div>
        </div>

        <div class="md:col-span-2 group relative overflow-hidden bg-white border border-gray-100 rounded-[40px] p-10 flex flex-col justify-center transition-all duration-500 hover:shadow-2xl">
          <div class="absolute top-0 right-0 p-8 text-gold/20 text-6xl font-serif italic group-hover:text-gold/40 transition-colors">04</div>
          <h3 class="text-3xl font-serif italic text-gray-900 mb-4">Elite Security</h3>
          <p class="text-gray-500 text-sm leading-relaxed max-w-md">
            Dedicated on-site security professionals ensuring your privacy and peace of mind from arrival to the last dance.
          </p>
          <div class="mt-6 flex items-center gap-2">
            <span class="h-px w-6 bg-gold"></span>
            <span class="text-[9px] uppercase tracking-widest text-gold font-bold">Safe Haven</span>
          </div>
        </div>

      </div>

      <div class="mt-24 text-center">
        <p class="text-gray-400 font-serif italic text-xl">"True luxury is undivided attention."</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Elimina cualquier sensación traslúcida y asegura limpieza */
section {
  background-image: radial-gradient(#e5e7eb 0.5px, transparent 0.5px);
  background-size: 40px 40px; /* Un patrón de puntos muy sutil casi imperceptible */
  background-color: #FDFCFB;
}

h2 {
  text-shadow: none;
}

/* Suavizado de las tarjetas */
.rounded-\[40px\] {
  border-radius: 40px;
}
</style>