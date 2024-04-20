export default defineNuxtConfig({
    
  plugins: [
            {src:'~/plugins/preline.client.ts'},
            { src: '~/plugins/clipboard.js', mode: 'client' }
         
          
            
            ],
    modules: [
        '@nuxtjs/tailwindcss'
      ],
      app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          title:'perline-UI',
          script:[{src:"./node_modules/clipboard/dist/clipboard.min.js"},
        ]
         
        }
      }
  });