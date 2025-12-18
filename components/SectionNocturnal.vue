<template>
  <section id="nightlife" class="py-32 bg-[#080808] text-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px]"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px]"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="text-center mb-24">
        <span class="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">Beyond the I Do</span>
        <h2 class="text-5xl md:text-7xl font-serif italic mb-8">
          Where Celebrities & <br/> 
          <span class="text-gold">Grand Galas Meet.</span>
        </h2>
        <div class="h-[1px] w-24 bg-gold/30 mx-auto mb-8"></div>
        <p class="max-w-3xl mx-auto text-gray-400 font-light text-lg leading-relaxed italic">
          "From high-profile celebrity after-parties to corporate galas. Our venue transforms into a nocturnal sanctuary with concert-grade production."
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="group relative h-[500px] overflow-hidden rounded-[40px] border border-white/5 transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800" 
            class="w-full h-full object-cover transition duration-[2s] group-hover:scale-110 opacity-50 group-hover:opacity-80" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
            <h4 class="text-3xl font-serif italic mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">Concert Sound</h4>
            <div class="h-px w-0 group-hover:w-full bg-gold/50 transition-all duration-700 mb-4"></div>
            <p class="text-[9px] uppercase tracking-[0.3em] text-gold font-bold">L-Acoustics Integration</p>
          </div>
        </div>

        <div class="group relative h-[500px] overflow-hidden rounded-[40px] border border-white/5 transition-all duration-700 md:translate-y-12">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800" 
            class="w-full h-full object-cover transition duration-[2s] group-hover:scale-110 opacity-50 group-hover:opacity-80" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
            <h4 class="text-3xl font-serif italic mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">Signature Mixology</h4>
            <div class="h-px w-0 group-hover:w-full bg-gold/50 transition-all duration-700 mb-4"></div>
            <p class="text-[9px] uppercase tracking-[0.3em] text-gold font-bold">Premium Open Bar Excellence</p>
          </div>
        </div>

        <div class="group relative h-[500px] overflow-hidden rounded-[40px] border border-white/5 transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800" 
            class="w-full h-full object-cover transition duration-[2s] group-hover:scale-110 opacity-50 group-hover:opacity-80" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
            <h4 class="text-3xl font-serif italic mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">Private Access</h4>
            <div class="h-px w-0 group-hover:w-full bg-gold/50 transition-all duration-700 mb-4"></div>
            <p class="text-[9px] uppercase tracking-[0.3em] text-gold font-bold">VIP Secrecy Guaranteed</p>
          </div>
        </div>

      </div>

      <div class="mt-40 text-center flex flex-col items-center">
        <div class="h-16 w-px bg-gradient-to-b from-gold/50 to-transparent mb-8"></div>
        <p class="text-xs uppercase tracking-[0.5em] text-gray-500">Exclusively at Houston Event Center</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Sombras suaves para las tarjetas oscuras */
.rounded-\[40px\] {
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
}

h2 {
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

/* Efecto de máscara de suavizado para las imágenes */
img {
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}
</style>