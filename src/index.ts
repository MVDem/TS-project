import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user-render.js';
import { renderToast, collectSearchParams } from './lib.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('1', '/img/avatar.png', 'Wade Warren');
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
  const searchFormBlock = document.getElementById('search-form-block');
  searchFormBlock.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(collectSearchParams());
  });
});
