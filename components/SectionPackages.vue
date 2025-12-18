<template>
  <section id="packages" class="py-32 bg-[#FDFCFB] px-6 relative">
    <div class="max-w-7xl mx-auto text-center">
      
      <div class="mb-20">
        <span class="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-4 block">Tailored Excellence</span>
        <h2 class="text-5xl md:text-7xl font-serif italic text-gray-900 mb-6">Rental Collections</h2>
        <div class="flex items-center justify-center gap-4">
          <div class="h-[1px] w-12 bg-gold/30"></div>
          <p class="text-gray-400 font-light italic text-lg">Unparalleled Sophistication for Your Legacy</p>
          <div class="h-[1px] w-12 bg-gold/30"></div>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-10 text-left mb-32">
        
        <div class="bg-white p-12 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 group hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
          <div class="absolute top-0 right-0 p-10 text-gray-50 text-7xl font-serif italic group-hover:text-gold/5 transition-colors">B</div>
          
          <h3 class="text-3xl font-serif italic text-gray-900 mb-2">Basic Collection</h3>
          <p class="text-gold text-[10px] font-bold uppercase tracking-widest mb-10">The Essential Foundation</p>
          
          <div class="mb-10">
            <span class="text-gray-400 font-serif italic text-sm">starting at</span>
            <div class="text-gray-900 text-5xl font-bold mt-1">$3,000 <span class="text-gray-300 line-through text-lg font-light ml-2">$4,000</span></div>
          </div>

          <ul class="space-y-5 text-gray-500 text-sm mb-12">
            <li v-for="item in ['6 Hours of Event Time', 'Elegant White Chivari Chairs', 'Guest, Cake & Gift Tables', 'Premium Table Linens', 'Private Luxury VIP Suites']" :key="item" class="flex items-center gap-3">
              <span class="h-1 w-1 rounded-full bg-gold"></span> {{ item }}
            </li>
          </ul>

          <button @click="openBooking('Basic')" class="w-full rounded-full border border-gray-900 py-5 uppercase text-[10px] font-bold hover:bg-black hover:text-white transition-all tracking-[0.4em]">Check Availability</button>
        </div>

        <div class="bg-black p-12 rounded-[40px] text-white shadow-2xl transform md:-translate-y-8 relative overflow-hidden group">
          <div class="absolute top-0 right-0 bg-gold px-8 py-3 text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-bl-[20px]">The Signature Choice</div>
          
          <h3 class="text-3xl font-serif italic text-gold mb-2">Gold Collection</h3>
          <p class="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-10">Comprehensive Luxury Experience</p>
          
          <div class="mb-10">
            <span class="text-gray-500 font-serif italic text-sm">starting at</span>
            <div class="text-white text-5xl font-bold mt-1">$6,000 <span class="text-gray-600 line-through text-lg font-light ml-2">$9,000</span></div>
          </div>

          <ul class="space-y-4 text-gray-300 text-[11px] mb-12 italic uppercase tracking-wider">
            <li v-for="item in ['Luxury Linen Napkins', 'Charger Plates & Fine Chinaware', 'Professional Service Staff', 'On-Site Security Officers', 'Professional DJ & Lighting', 'Custom Tiered Cake']" :key="item" class="flex items-center gap-3">
              <span class="h-[1px] w-4 bg-gold/50"></span> {{ item }}
            </li>
            <li class="flex items-center gap-3 font-bold text-gold not-italic">
              <span class="h-[1px] w-4 bg-gold"></span> Day of Coordinator Included
            </li>
          </ul>

          <button @click="openBooking('Gold')" class="w-full bg-gold rounded-full py-5 uppercase text-[10px] font-bold text-black hover:bg-white transition-all tracking-[0.4em] shadow-lg shadow-gold/20">Secure This Collection</button>
        </div>
      </div>

      <div class="mt-20">
        <h3 class="text-4xl font-serif italic mb-4 text-gray-900">Venue Rental Only</h3>
        <p class="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-16">Exclusive Estate Access by Day</p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="day in days" :key="day.name" @click="openBooking('Rental Only - ' + day.name)" 
               class="bg-white p-10 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div class="mb-6 flex justify-center text-gold/40 group-hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h5 class="font-serif italic text-xl text-gray-800">{{ day.name }}</h5>
            <div class="h-px w-8 bg-gold/20 mx-auto my-4"></div>
            <p class="text-gray-900 font-bold text-2xl tracking-tighter">{{ day.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <div class="absolute inset-0 bg-black/90 backdrop-blur-md" @click="isModalOpen = false"></div>
        
        <div class="relative bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden animate-slide-up">
          <div class="p-10 md:p-14">
            <button @click="isModalOpen = false" class="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            
            <h4 class="text-4xl font-serif italic text-center mb-3 text-gray-900">Reserve Your Date</h4>
            <p class="text-[10px] text-center uppercase tracking-[0.3em] text-gold font-bold mb-10">Selection: {{ selectedPackage }}</p>

            <form @submit.prevent="sendBooking" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input v-model="form.name" type="text" placeholder="FULL NAME" required class="w-full border-b border-gray-200 py-3 text-[10px] tracking-widest outline-none focus:border-gold transition-colors bg-transparent">
                <input v-model="form.phone" type="tel" placeholder="PHONE NUMBER" required class="w-full border-b border-gray-200 py-3 text-[10px] tracking-widest outline-none focus:border-gold transition-colors bg-transparent">
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col">
                  <label class="text-[8px] tracking-[0.3em] text-gray-400 mb-1 uppercase font-bold">Event Date</label>
                  <input v-model="form.date" type="date" required class="w-full border-b border-gray-200 py-3 text-[10px] outline-none focus:border-gold transition-colors">
                </div>
                <div class="flex flex-col">
                  <label class="text-[8px] tracking-[0.3em] text-gray-400 mb-1 uppercase font-bold">Arrival Time</label>
                  <input v-model="form.time" type="time" required class="w-full border-b border-gray-200 py-3 text-[10px] outline-none focus:border-gold transition-colors">
                </div>
              </div>

              <textarea v-model="form.notes" placeholder="TELL US ABOUT YOUR VISION..." rows="2" class="w-full border-b border-gray-200 py-3 text-[10px] tracking-widest outline-none focus:border-gold transition-colors resize-none bg-transparent"></textarea>

              <button type="submit" class="w-full bg-black text-white py-6 rounded-full uppercase text-[10px] font-bold tracking-[0.4em] hover:bg-gold hover:text-black transition-all duration-700 shadow-xl mt-4">
                Request Availability
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
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@keyframes slide-up {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up { animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1); }

/* Ajuste sutil para inputs de fecha en navegadores modernos */
input::-webkit-calendar-picker-indicator {
  filter: invert(0.5);
  cursor: pointer;
}
</style>