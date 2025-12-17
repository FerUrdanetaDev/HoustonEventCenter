<template>
  <section id="contact" class="py-32 bg-[#FDFCFB] px-6">
    <div class="max-w-7xl mx-auto">
      
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <div class="relative order-2 lg:order-1">
          <div class="absolute -inset-4 border border-gold/20 rounded-[50px] translate-x-2 translate-y-2 hidden md:block"></div>
          
          <div class="relative overflow-hidden rounded-[50px] bg-white shadow-xl border border-gold/10 aspect-[4/5]">
            <img 
              src="/kathy.jpeg" 
              alt="Kathy Castañeda" 
              class="w-full h-full object-cover"
            />
            
            <div class="absolute bottom-8 left-8 right-8">
              <div class="bg-white/90 backdrop-blur-md p-8 rounded-[30px] border border-gold/30 shadow-lg text-center">
                <h4 class="font-serif text-3xl text-gray-900 tracking-tight">Kathy Castañeda</h4>
                <div class="flex items-center justify-center gap-3 mt-2">
                  <span class="h-[1px] w-8 bg-gold/50"></span>
                  <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Venue Manager</p>
                  <span class="h-[1px] w-8 bg-gold/50"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex flex-col justify-center px-4">
          <div class="mb-12 text-left">
            <h2 class="text-6xl font-serif italic mb-6 text-gray-900 leading-tight">Begin Your <br> <span class="text-gold">Legacy</span></h2>
            <p class="text-gray-400 uppercase tracking-[0.4em] text-[11px] font-bold mb-8">
              Personalized Consultation with our specialist
            </p>
            <p class="text-gray-500 font-light leading-relaxed max-w-md">
              Allow Kathy to guide you through our collections and help you select the perfect setting for your celebration.
            </p>
          </div>

          <form @submit.prevent="sendToWhatsApp" class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div class="flex flex-col space-y-2">
              <label class="uppercase text-[9px] tracking-widest font-bold text-gold">Full Name</label>
              <input v-model="form.name" required type="text" placeholder="John Doe" class="border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm font-light bg-transparent" />
            </div>

            <div class="flex flex-col space-y-2">
              <label class="uppercase text-[9px] tracking-widest font-bold text-gold">Email</label>
              <input v-model="form.email" required type="email" placeholder="email@example.com" class="border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm font-light bg-transparent" />
            </div>

            <div class="flex flex-col space-y-2">
              <label class="uppercase text-[9px] tracking-widest font-bold text-gold">Phone</label>
              <input v-model="form.phone" required type="tel" placeholder="(832) 000-0000" class="border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm font-light bg-transparent" />
            </div>

            <div class="flex flex-col space-y-2">
              <label class="uppercase text-[9px] tracking-widest font-bold text-gold">Event Type</label>
              <select v-model="form.event" required class="border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm font-light bg-transparent">
                <option value="" disabled>Select event</option>
                <option value="Quinceañera">Quinceañera</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate">Corporate Gala</option>
                <option value="Social">Social Soirée</option>
              </select>
            </div>

            <div class="md:col-span-2 flex flex-col space-y-2">
              <label class="uppercase text-[9px] tracking-widest font-bold text-gold">Details</label>
              <textarea v-model="form.message" rows="2" placeholder="Your vision..." class="border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm font-light resize-none bg-transparent"></textarea>
            </div>

            <div class="md:col-span-2 mt-6">
              <button type="submit" class="w-full bg-black text-white py-6 uppercase text-[10px] font-bold tracking-[0.5em] hover:bg-gold hover:text-black transition-all duration-700 shadow-2xl">
                Send Request to Kathy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  event: '',
  email: '',
  phone: '',
  message: ''
});

const sendToWhatsApp = () => {
  const phoneNumber = "18323016312"; 
  const text = `*New Lead: Houston Event Center*%0A` +
               `*Attn:* Kathy Castañeda%0A%0A` +
               `*Client:* ${form.value.name}%0A` +
               `*Email:* ${form.value.email}%0A` +
               `*Phone:* ${form.value.phone}%0A` +
               `*Event:* ${form.value.event}%0A` +
               `*Vision:* ${form.value.message || 'N/A'}`;

  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`, '_blank');
};
</script>