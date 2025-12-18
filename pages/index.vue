<template>
  <div class="bg-[#FDFCFB] font-sans selection:bg-gold selection:text-white relative">
    
    <client-only>
      <vue-particles
        id="tsparticles"
        class="fixed inset-0 pointer-events-none z-0"
        :options="particlesOptions"
      />
    </client-only>

    <div class="relative z-10">
      <TheNavbar />
      <main>
        <TheHero />
        <SectionExperience class="bg-transparent" />
        <VenueSpaces class="bg-transparent" />
        <SectionGourmet class="bg-transparent" />
        <SectionPackages class="bg-transparent" />


        <SectionNocturnal />
        <SectionOffer /> 
        <SectionContact />
      </main>

     <footer class="bg-[#0A0A0A] py-20 border-t border-white/5 relative z-40">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-16 mb-16">
        
        <div class="flex justify-center md:justify-start">
          <img 
            src="/logo.png" 
            alt="Houston Event Center" 
            class="h-28 md:h-36 w-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-center md:text-left">
          
          <div class="space-y-4">
            <h4 class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Location</h4>
            <div class="space-y-3">
              <p class="text-gray-400 text-[11px] uppercase tracking-widest leading-relaxed">
                28087 Robinson Rd<br />
                Conroe, TX 77385
              </p>
              <div class="h-px w-8 bg-gold/20 mx-auto md:mx-0"></div>
              <p class="text-white text-[12px] uppercase tracking-[0.2em] italic font-light">
                 The Woodlands Area <br>
                <span class="text-[12px] text-white normal-case">(📍2.5 miles from Woodlands Mall)</span>
              </p>
            </div>
          </div>

          <div class="space-y-4 flex flex-col items-center md:items-start">
            <h4 class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Direct Contact</h4>
            <div class="space-y-4 w-full">
              
              <div class="flex items-center justify-center md:justify-start gap-4 group">
                <span class="text-gray-500 text-[9px] uppercase tracking-widest font-bold w-20">Text or Call</span>
                <a href="tel:8323016312" class="text-white text-[11px] tracking-widest hover:text-gold transition">(832) 301-6312</a>
              </div>

              <div class="flex items-center justify-center md:justify-start gap-4 group">
                <div class="w-4 flex justify-center">
                  <svg class="w-4 h-4 text-gray-500 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <a href="mailto:sales@houstoneventcenter.org" class="text-white text-[11px] tracking-widest hover:text-gold transition">sales@houstoneventcenter.org</a>
              </div>

              <div class="flex items-center justify-center md:justify-start gap-4 group">
                <div class="w-4 flex justify-center">
                  <svg class="w-4 h-4 text-gray-500 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <a href="https://instagram.com/houstoneventcenter" target="_blank" class="text-white text-[11px] tracking-widest hover:text-gold transition">@houstoneventcenter</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/5 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-700 text-[8px] uppercase tracking-[0.5em]">
          © 2025 Luxury Private Estate. Masterfully Crafted.
        </p>
        <div class="flex gap-6 opacity-30">
           <span class="h-px w-8 bg-white my-auto"></span>
           <span class="text-white text-[8px] uppercase tracking-widest font-serif italic">The Art of Celebration</span>
        </div>
      </div>

    </div>
  </footer>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { background-color: #FDFCFB; }

.bg-transparent {
  background-color: transparent !important;
}

.font-serif { font-family: 'Playfair Display', serif; }
</style>