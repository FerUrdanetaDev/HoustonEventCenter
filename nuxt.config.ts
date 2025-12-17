export default defineNuxtConfig({
  // Activamos el módulo de Tailwind
  modules: ['@nuxtjs/tailwindcss'],

  // Configuramos Tailwind para que busque estilos en pages
  tailwindcss: {
    exposeConfig: true,
    viewer: false,
  },

  // Importación de fuentes de lujo
  app: {
    head: {
      title: 'Houston Event Center | The Pinnacle of Luxury',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap' }
      ]
    }
  },

  // Deshabilitamos app.vue para usar obligatoriamente la carpeta pages
  pages: true,
  
  devtools: { enabled: false }
})