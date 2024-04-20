// plugins/clipboard.js

import ClipboardJS from 'clipboard';

export default ({ app }, inject) => {
  if (process.client) {
    window.onNuxtReady(() => {
      const clipboard = new ClipboardJS('.js-clipboard-example');
      
      clipboard.on('success', (e) => {
        e.clearSelection();
        const el = e.trigger;
        const $success = el.querySelector('.js-clipboard-success');
        const successText = el.dataset.clipboardSuccessText || '';
        
        if ($success) {
          $success.textContent = successText;
          $success.classList.remove('hidden');
          
          setTimeout(() => {
            $success.textContent = '';
            $success.classList.add('hidden');
          }, 1500);
        }
      });
    });
  }
};
