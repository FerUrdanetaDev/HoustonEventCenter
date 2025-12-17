<template>
  <section id="packages" class="py-32 bg-[#F9F7F2] px-6 border-y border-gray-100 relative">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-5xl font-serif italic mb-4">Rental Collections</h2>
      <p class="text-gray-400 uppercase tracking-widest text-[10px] mb-20 font-bold">Unparalleled Sophistication, Tailored to You</p>
      
      <div class="grid md:grid-cols-2 gap-10 text-left mb-24">
        <div class="bg-white p-12 shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-500">
          <h3 class="text-2xl font-serif mb-2 uppercase tracking-tighter italic text-gray-400">Basic</h3>
          <p class="text-gray-400 text-[10px] font-bold uppercase mb-8">Essential Package</p>
          <div class="mb-10">
            <span class="text-gray-400 font-serif italic text-sm italic">starting at</span>
            <div class="text-black text-4xl font-bold">$3,000 <span class="text-gray-300 line-through text-sm font-light">$4,000</span></div>
          </div>
          <ul class="space-y-4 text-gray-500 text-sm mb-12">
            <li v-for="item in ['6 Hours of Event Time', 'Elegant White Chivari Chairs', 'Guest, Cake & Gift Table', 'Table Linens', 'Private VIP Suites']" :key="item" class="flex items-center gap-2">✦ {{ item }}</li>
          </ul>
          <button @click="openBooking('Basic')" class="w-full border-2 border-black py-4 uppercase text-[10px] font-bold hover:bg-black hover:text-white transition-all tracking-[0.3em]">Check Availability</button>
        </div>

        <div class="bg-black p-12 text-white shadow-2xl transform md:-translate-y-6 relative overflow-hidden">
          <div class="absolute top-0 right-0 bg-gold px-6 py-2 text-black text-[9px] font-bold uppercase tracking-widest">The Signature Choice</div>
          <h3 class="text-2xl font-serif mb-2 uppercase tracking-tighter text-gold italic">Gold</h3>
          <p class="text-gray-500 text-[10px] font-bold uppercase mb-8">BASIC PACKAGE PLUS:</p>
          <div class="mb-10">
            <span class="text-gray-500 font-serif italic text-sm">starting at</span>
            <div class="text-white text-4xl font-bold">$6,000 <span class="text-gray-600 line-through text-sm font-light">$9,000</span></div>
          </div>
          <ul class="space-y-4 text-gray-400 text-[11px] mb-12 italic uppercase tracking-wider">
            <li v-for="item in ['Luxury Linen Napkins', 'Charger Plates, Fine Chinaware & Utensils', 'Professional Service Staff & Bartenders', 'On-Site Security Officers', 'Professional DJ', 'Custom Buttercream Tiered Cake', 'Choice of Luxury Fruit or Dessert Table']" :key="item" class="flex items-center gap-2">✦ {{ item }}</li>
            <li class="flex items-center gap-2 font-bold text-gold">✦ Day of Coordinator</li>
          </ul>
          <button @click="openBooking('Gold')" class="w-full bg-gold py-4 uppercase text-[10px] font-bold text-black hover:bg-white transition-all tracking-[0.3em]">Secure This Collection</button>
        </div>
      </div>

      <div class="mt-20">
        <h3 class="text-3xl font-serif italic mb-2 text-gray-800">Venue Rental Only</h3>
        <p class="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-12">Exclusive Access by Day</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="day in days" :key="day.name" @click="openBooking('Rental Only - ' + day.name)" class="bg-white p-8 border border-gray-100 shadow-sm hover:border-gold transition-colors cursor-pointer group">
            <div class="mb-4 flex justify-center text-gold group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h5 class="font-serif italic text-lg text-gray-800">{{ day.name }}</h5>
            <p class="text-gold font-bold text-xl mt-2 tracking-tighter">{{ day.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="isModalOpen = false"></div>
        
        <div class="relative bg-white w-full max-w-xl rounded-[30px] shadow-2xl overflow-hidden animate-slide-up">
          <div class="p-8 md:p-12">
            <button @click="isModalOpen = false" class="absolute top-6 right-6 text-gray-400 hover:text-black">✕</button>
            
            <h4 class="text-3xl font-serif italic text-center mb-2">Book Your Date</h4>
            <p class="text-[10px] text-center uppercase tracking-widest text-gold font-bold mb-8">Selected: {{ selectedPackage }}</p>

            <form @submit.prevent="sendBooking" class="space-y-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input v-model="form.name" type="text" placeholder="FULL NAME" required class="w-full border-b border-gray-100 py-3 text-[10px] tracking-widest outline-none focus:border-gold transition-colors">
                <input v-model="form.phone" type="tel" placeholder="PHONE NUMBER" required class="w-full border-b border-gray-100 py-3 text-[10px] tracking-widest outline-none focus:border-gold transition-colors">
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="flex flex-col">
                  <label class="text-[8px] tracking-[0.2em] text-gray-400 mb-1 uppercase">Event Date</label>
                  <input v-model="form.date" type="date" required class="w-full border-b border-gray-100 py-3 text-[10px] outline-none focus:border-gold transition-colors">
                </div>
                <div class="flex flex-col">
                  <label class="text-[8px] tracking-[0.2em] text-gray-400 mb-1 uppercase">Event Time</label>
                  <input v-model="form.time" type="time" required class="w-full border-b border-gray-100 py-3 text-[10px] outline-none focus:border-gold transition-colors">
                </div>
              </div>

              <textarea v-model="form.notes" placeholder="ADDITIONAL NOTES OR VISION" rows="3" class="w-full border-b border-gray-100 py-3 text-[10px] tracking-widest outline-none focus:border-gold transition-colors resize-none"></textarea>

              <button type="submit" class="w-full bg-black text-white py-5 rounded-full uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-gold hover:text-black transition-all duration-500 mt-4">
                Accept & Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
const selectedPackage = ref('');
const form = ref({
  name: '',
  phone: '',
  date: '',
  time: '',
  notes: ''
});

const days = [
  { name: 'Mon - Thu', price: '$3,000' },
  { name: 'Friday', price: '$7,000' },
  { name: 'Saturday', price: '$9,000' },
  { name: 'Sunday', price: '$5,500' }
];

const openBooking = (packageName) => {
  selectedPackage.value = packageName;
  isModalOpen.value = true;
};

const sendBooking = () => {
  const phoneNumber = "18323016312";
  const message = `*New Booking Request*%0A%0A` +
                  `*Package:* ${selectedPackage.value}%0A` +
                  `*Client:* ${form.value.name}%0A` +
                  `*Phone:* ${form.value.phone}%0A` +
                  `*Date:* ${form.value.date}%0A` +
                  `*Time:* ${form.value.time}%0A` +
                  `*Notes:* ${form.value.notes || 'N/A'}`;
  
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  isModalOpen.value = false;
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up { animation: slide-up 0.4s ease-out; }

input[type="date"], input[type="time"] {
  background: transparent;
  text-transform: uppercase;
}
</style>