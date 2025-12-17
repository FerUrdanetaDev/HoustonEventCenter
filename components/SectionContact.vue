<template>
  <section id="contact" class="py-32 bg-white px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-5xl font-serif italic mb-6">Start Your Journey</h2>
      <p class="text-gray-400 uppercase tracking-[0.3em] text-[10px] mb-16 font-bold">
        Let us craft your next masterpiece
      </p>

      <form @submit.prevent="sendToWhatsApp" class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div class="flex flex-col space-y-2">
          <label class="uppercase text-[9px] tracking-widest font-bold text-gray-400">Full Name</label>
          <input 
            v-model="form.name"
            required
            type="text" 
            placeholder="John Doe" 
            class="border-b border-gray-200 py-4 focus:border-gold outline-none transition-colors text-sm font-light"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <label class="uppercase text-[9px] tracking-widest font-bold text-gray-400">Event Type</label>
          <select 
            v-model="form.event"
            required
            class="border-b border-gray-200 py-4 focus:border-gold outline-none transition-colors text-sm font-light bg-transparent"
          >
            <option value="" disabled>Select event</option>
            <option value="Quinceañera">Quinceañera</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate Gala</option>
            <option value="Social">Social Soirée</option>
            <option value="Rental Only">Venue Rental Only</option>
          </select>
        </div>

        <div class="flex flex-col space-y-2">
          <label class="uppercase text-[9px] tracking-widest font-bold text-gray-400">Estimated Date</label>
          <input 
            v-model="form.date"
            required
            type="date" 
            class="border-b border-gray-200 py-4 focus:border-gold outline-none transition-colors text-sm font-light"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <label class="uppercase text-[9px] tracking-widest font-bold text-gray-400">Expected Guests</label>
          <input 
            v-model="form.guests"
            required
            type="number" 
            placeholder="e.g. 150" 
            class="border-b border-gray-200 py-4 focus:border-gold outline-none transition-colors text-sm font-light"
          />
        </div>

        <div class="md:col-span-2 flex flex-col space-y-2">
          <label class="uppercase text-[9px] tracking-widest font-bold text-gray-400">Additional Details</label>
          <textarea 
            v-model="form.message"
            rows="4" 
            placeholder="Tell us about your vision..." 
            class="border-b border-gray-200 py-4 focus:border-gold outline-none transition-colors text-sm font-light resize-none"
          ></textarea>
        </div>

        <div class="md:col-span-2 mt-8">
          <button 
            type="submit"
            class="w-full bg-black text-white py-6 uppercase text-[10px] font-bold tracking-[0.4em] hover:bg-gold hover:text-black transition-all duration-500 shadow-xl"
          >
            Contact Specialist
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  event: '',
  date: '',
  guests: '',
  message: ''
});

const sendToWhatsApp = () => {
  const phoneNumber = "18323016312"; // Formato internacional sin símbolos
  
  // Construcción del mensaje con formato limpio
  const text = `*New Inquiry: Houston Event Center*%0A%0A` +
               `*Name:* ${form.value.name}%0A` +
               `*Event:* ${form.value.event}%0A` +
               `*Date:* ${form.value.date}%0A` +
               `*Guests:* ${form.value.guests}%0A` +
               `*Details:* ${form.value.message || 'No additional details provided'}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
  
  // Abrir en una pestaña nueva
  window.open(whatsappUrl, '_blank');
};
</script>