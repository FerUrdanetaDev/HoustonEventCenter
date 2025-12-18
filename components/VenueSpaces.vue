<template>
  <section id="spaces" class="py-32 bg-[#FDFCFB] px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-24">
        <span class="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">The Collections</span>
        <h2 class="text-5xl md:text-7xl font-serif italic mb-6 text-gray-900">Five Venues, One Legacy</h2>
        <div class="w-24 h-[1px] bg-gold/30 mx-auto mb-8"></div>
        <p class="text-gray-500 font-light max-w-xl mx-auto text-sm uppercase tracking-widest leading-loose">
          Discover the perfect stage for your story, from starlit gardens to high-energy galas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="relative group lg:col-span-2">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-video lg:aspect-auto lg:h-[500px]">
            <img src="/1.png" alt="Grand Ballroom" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 class="text-white font-serif text-4xl italic mb-2">The Grand Ballroom</h3>
              <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Classic Luxury</p>
            </div>
          </div>
        </div>

        <div class="relative group lg:mt-12">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/5]">
            <img src="/2.png" alt="Gardens" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-serif text-3xl italic mb-2">Al Fresco Gardens</h3>
              <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Outdoor Serenity</p>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/5]">
            <img src="/3.png" alt="Quinceañera Party" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-serif text-3xl italic mb-2">Quinceañera Dream</h3>
              <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Magical Celebrations</p>
            </div>
          </div>
        </div>

        <div class="relative group lg:-mt-12">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/5]">
            <img src="/4.png" alt="Theater Event" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-serif text-3xl italic mb-2">The Royal Theater</h3>
              <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Arts & Culture</p>
            </div>
          </div>
        </div>

        <div class="relative group lg:col-span-1">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/5]">
            <img src="/5.png" alt="Rave Concert" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-black/40 to-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-serif text-3xl italic mb-2">Neon Rave Hall</h3>
              <p class="text-cyan-400 uppercase tracking-[0.3em] text-[10px] font-bold">Electric Energy</p>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-32 text-center">
        <div class="inline-block relative">
          <span class="text-7xl absolute -top-10 -left-10 text-gold/10 font-serif">“</span>
          <p class="text-gray-500 font-light italic text-2xl max-w-2xl relative z-10">
            Every corner of our estate is designed to transform your imagination into a majestic reality.
          </p>
          <span class="text-7xl absolute -bottom-20 -right-10 text-gold/10 font-serif">”</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover h3 {
  color: #D4AF37;
  transition: all 0.5s ease;
}

/* Efecto sutil para la imagen de Rave */
.group:hover .text-cyan-400 {
  filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.8));
}
</style>