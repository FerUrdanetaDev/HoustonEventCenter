<template>
  <section id="spaces" class="py-32 bg-white px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-24">
        <span class="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Versatile Elegance</span>
        <h2 class="text-5xl md:text-7xl font-serif italic mb-6">Exquisite Settings for Every Occasion</h2>
        <div class="w-24 h-[1px] bg-gold/30 mx-auto"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-20 items-center">
        
        <div class="relative group">
          <div class="relative rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="/1.png" 
              alt="Grand Indoor Ballroom" 
              class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-12">
              <h3 class="text-white font-serif text-4xl mb-4 italic">The Grand Ballroom</h3>
              <p class="text-gray-300 font-light text-sm leading-relaxed max-w-sm uppercase tracking-widest">
                Sophisticated indoor celebrations with climate control, majestic lighting, and impeccable acoustics.
              </p>
            </div>
          </div>
          <div class="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-gold/20 rounded-tr-[60px] hidden md:block"></div>
        </div>

        <div class="relative group lg:mt-32">
          <div class="relative rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="/2.png" 
              alt="Majestic Outdoor Estate" 
              class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-12">
              <h3 class="text-white font-serif text-4xl mb-4 italic">Al Fresco Gardens</h3>
              <p class="text-gray-300 font-light text-sm leading-relaxed max-w-sm uppercase tracking-widest">
                Enchanting outdoor spaces surrounded by nature, perfect for sunset ceremonies and starlit soirées.
              </p>
            </div>
          </div>
           <div class="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-gold/20 rounded-bl-[60px] hidden md:block"></div>
        </div>

      </div>

      <div class="mt-32 text-center max-w-3xl mx-auto">
        <p class="text-gray-400 font-light italic text-xl">
          "From intimate gatherings to grand galas, our estate offers the perfect canvas for your unique vision."
        </p>
        <div class="mt-10 flex justify-center gap-8 items-center">
            <span class="text-[9px] uppercase tracking-[0.4em] font-bold text-gold">Weddings</span>
            <span class="w-1.5 h-1.5 rounded-full bg-gold/30"></span>
            <span class="text-[9px] uppercase tracking-[0.4em] font-bold text-gold">Galas</span>
            <span class="w-1.5 h-1.5 rounded-full bg-gold/30"></span>
            <span class="text-[9px] uppercase tracking-[0.4em] font-bold text-gold">Quinceañeras</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Transición suave para los grupos de imágenes */
.group:hover h3 {
  color: #D4AF37; /* Color oro al hacer hover */
  transition: color 0.5s ease;
}
</style>