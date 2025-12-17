<template>
  <section id="nightlife" class="py-32 bg-[#080808] text-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <span class="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Beyond the I Do</span>
      <h2 class="text-5xl md:text-7xl font-serif italic mb-10">Where Celebrities & <br/> <span class="text-gold">Grand Galas Meet.</span></h2>
      
      <p class="max-w-3xl mx-auto text-gray-400 font-light text-lg mb-20 leading-relaxed">
        From high-profile celebrity after-parties to corporate galas and legendary social events. Our venue transforms into a nocturnal sanctuary with concert-grade production.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="group overflow-hidden relative h-[400px]">
          <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
          <div class="absolute inset-0 flex flex-col justify-end p-8 text-left bg-gradient-to-t from-black/80 to-transparent">
            <h4 class="text-2xl font-serif">Concert Sound</h4>
            <p class="text-[10px] uppercase tracking-widest text-gold font-bold">L-Acoustics Integration</p>
          </div>
        </div>
        <div class="group overflow-hidden relative h-[400px] md:translate-y-12">
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
          <div class="absolute inset-0 flex flex-col justify-end p-8 text-left bg-gradient-to-t from-black/80 to-transparent">
            <h4 class="text-2xl font-serif">Signature Mixology</h4>
            <p class="text-[10px] uppercase tracking-widest text-gold font-bold">Premium Open Bar</p>
          </div>
        </div>
        <div class="group overflow-hidden relative h-[400px]">
          <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
          <div class="absolute inset-0 flex flex-col justify-end p-8 text-left bg-gradient-to-t from-black/80 to-transparent">
            <h4 class="text-2xl font-serif">Celebrity Private Access</h4>
            <p class="text-[10px] uppercase tracking-widest text-gold font-bold">VIP Secrecy Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>