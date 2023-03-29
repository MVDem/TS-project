import {
  callback,
  collectSearchParams,
  renderSearchFormBlock,
  search,
} from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import {
  renderUserBlock,
  getFavoritesAmount,
  getUserData,
} from './user-render.js';
import { renderToast } from './lib.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(getUserData(), getFavoritesAmount());
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
    search(collectSearchParams(), callback);
  });
});
