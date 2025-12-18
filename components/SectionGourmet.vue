<template>
  <section id="gourmet" class="py-32 bg-[#FDFCFB] px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-24">
        <span class="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">The Royal Banquet Selection</span>
        <h2 class="text-6xl md:text-8xl font-serif italic text-gray-900 mb-6">Culinary Arts</h2>
        <div class="flex items-center justify-center gap-4">
          <div class="h-[1px] w-12 bg-gold/50"></div>
          <p class="text-gold font-serif italic text-xl">Seven World-Class Collections</p>
          <div class="h-[1px] w-12 bg-gold/50"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[340px]">
        
        <div class="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-[40px] shadow-lg">
          <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent p-10 flex flex-col justify-end">
            <span class="text-gold text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">Heritage</span>
            <h3 class="text-white text-4xl font-serif italic">Mexican Legacy</h3>
            <p class="text-white/70 text-sm mt-4 font-light max-w-xs leading-relaxed">Elevated Street-Gourmet, blue corn delicacies, and ancestral moles.</p>
          </div>
        </div>

        <div class="lg:row-span-2 relative group overflow-hidden rounded-[40px] shadow-lg">
          <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent p-8 flex flex-col justify-end">
            <span class="text-gold text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">Far East</span>
            <h3 class="text-white text-3xl font-serif italic">Imperial Japanese</h3>
            <p class="text-white/70 text-xs mt-3 font-light leading-relaxed">Artisanal Sushi bars, Wagyu presentations, and refined Nigiri excellence.</p>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-[40px] shadow-lg">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-6 flex flex-col justify-end">
            <h4 class="text-white font-serif text-xl italic">Steakhouse Prime</h4>
            <p class="text-white/60 text-[10px] uppercase tracking-widest mt-1">Aged Cuts & Premium Grill</p>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-[40px] shadow-lg">
          <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-6 flex flex-col justify-end">
            <h4 class="text-white font-serif text-xl italic">Cantonese Gold</h4>
            <p class="text-white/60 text-[10px] uppercase tracking-widest mt-1">Dim Sum & Peking Duck Heritage</p>
          </div>
        </div>

        <div class="lg:col-span-2 relative group overflow-hidden rounded-[40px] shadow-lg">
          <img src="/seafood.png" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-center">
            <span class="text-gold text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">Ocean’s Finest</span>
            <h3 class="text-white text-3xl font-serif italic">Seafood Symphony</h3>
            <p class="text-white/70 text-xs mt-2 font-light max-w-xs leading-relaxed">Exquisite Lobster tails, fresh Oysters, and Mediterranean King Prawns.</p>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-[40px] shadow-lg">
          <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-6 flex flex-col justify-end">
            <h4 class="text-white font-serif text-xl italic">Royal Patisserie</h4>
            <p class="text-white/60 text-[10px] uppercase tracking-widest mt-1">Tiered Masterpieces & Gold Leaf</p>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-[40px] shadow-lg">
          <img src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-6 flex flex-col justify-end">
            <h4 class="text-white font-serif text-xl italic">Italian Tuscany</h4>
            <p class="text-white/60 text-[10px] uppercase tracking-widest mt-1">Handmade Pasta & Black Truffles</p>
          </div>
        </div>

      </div>

      <div class="mt-40 relative">
        <div class="absolute inset-0 bg-gray-900 -skew-y-1 rounded-[50px]"></div>
        <div class="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div class="max-w-xl text-center md:text-left">
            <h3 class="text-4xl md:text-5xl font-serif italic text-white mb-4">Book Your Private Tasting</h3>
            <p class="text-gold/80 text-sm font-light uppercase tracking-[0.3em] mb-6 italic">A sensorial preview of your grand event</p>
            <p class="text-gray-400 text-sm leading-relaxed">Meet our executive chefs and customize your menu during an exclusive tasting session for you and your partner.</p>
          </div>
          <div class="flex flex-col items-center gap-6">
            <a href="#contact" class="bg-gold text-black px-12 py-6 text-[11px] font-bold uppercase tracking-[0.5em] hover:bg-white transition-all duration-500 shadow-2xl rounded-full">
              Request a Tasting
            </a>
            <span class="text-white/40 text-[9px] uppercase tracking-widest">Limited Monthly Availability</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
h3, h4 {
  text-shadow: 0 4px 10px rgba(0,0,0,0.4);
}
</style>