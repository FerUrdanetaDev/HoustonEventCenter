<template>
  <section id="spaces" class="py-32 bg-[#FDFCFB] px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-24">
        <span class="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-4 block">The Collections</span>
        <h2 class="text-5xl md:text-7xl font-serif italic mb-6 text-gray-900">Six Venues, One Legacy</h2>
        <div class="w-24 h-[1px] bg-gold/30 mx-auto mb-8"></div>
        <p class="text-gray-500 font-light max-w-xl mx-auto text-sm uppercase tracking-widest leading-loose">
          From starlit gardens to high-energy galas. Discover the perfect stage for your story.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="relative group lg:col-span-2">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-video lg:aspect-auto lg:h-[500px]">
            <img src="/1.png" alt="Grand Ballroom" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 class="text-white font-serif text-4xl italic mb-2 transition-colors duration-500 group-hover:text-gold">The Grand Ballroom</h3>
              <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Classic Luxury</p>
            </div>
          </div>
        </div>

        <div class="relative group lg:mt-12">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/5]">
            <img src="/2.png" alt="Gardens" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-serif text-3xl italic mb-2 transition-colors duration-500 group-hover:text-gold">Al Fresco Gardens</h3>
              <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Outdoor Serenity</p>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/5]">
            <img src="/3.png" alt="Quinceañera" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-serif text-3xl italic mb-2 transition-colors duration-500 group-hover:text-gold">Quinceañera Dream</h3>
              <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Magical Celebrations</p>
            </div>
          </div>
        </div>

        <div class="relative group lg:-mt-12">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/5]">
            <img src="/4.png" alt="Wedding" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-serif text-3xl italic mb-2 transition-colors duration-500 group-hover:text-gold">Eternal Union</h3>
              <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Majestic Weddings</p>
            </div>
          </div>
        </div>

        <div class="relative group lg:col-span-1">
          <div class="relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/5]">
            <img src="/5.png" alt="Mariachi Night" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#450a0a]/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-serif text-3xl italic mb-2 transition-colors duration-500 group-hover:text-gold">Mariachi Nights</h3>
              <p class="text-red-500 uppercase tracking-[0.3em] text-[10px] font-bold group-hover:text-gold transition-colors">Heritage & Passion</p>
            </div>
          </div>
        </div>

        <div class="relative group md:col-span-2 lg:col-span-3 mt-8">
          <div class="relative rounded-[40px] overflow-hidden shadow-2xl h-[400px]">
            <img src="/6.png" alt="Comedy Show" class="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-12">
              <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h3 class="text-white font-serif text-5xl italic mb-2 transition-colors duration-500 group-hover:text-gold">Houston Comedy Show</h3>
                  <p class="text-gold uppercase tracking-[0.4em] text-[11px] font-bold">Unforgettable Laughter</p>
                </div>
                <div class="hidden md:block">
                  <span class="px-6 py-2 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-widest backdrop-blur-md">Featured Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-32 text-center">
        <div class="inline-block relative">
          <span class="text-8xl absolute -top-12 -left-16 text-gold/10 font-serif opacity-50">“</span>
          <p class="text-gray-500 font-light italic text-2xl max-w-2xl relative z-10 leading-relaxed">
            Every corner of our estate is masterfully designed to transform your imagination into a majestic reality.
          </p>
          <span class="text-8xl absolute -bottom-24 -right-16 text-gold/10 font-serif opacity-50">”</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Transición suave para todos los h3 al hacer hover en el grupo */
.group:hover h3 {
  text-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

/* Optimización para imágenes en carga */
img {
  background-color: #f3f4f6;
}
</style>