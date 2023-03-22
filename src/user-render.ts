import { renderBlock } from './lib.js';

export function renderUserBlock(favoriteItemsAmount, avatarUrl, name) {
  const favoritesCaption =
    favoriteItemsAmount >= 1 ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount >= 1 ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${
              hasFavoriteItems ? ' active' : ''
            }"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}
