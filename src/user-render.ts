import { renderBlock } from './lib.js';
import { FavouritePlace } from './search-results.js';
import { User } from './user.js';

export function getUserData(): User {
  const user: unknown = JSON.parse(localStorage.getItem('user'));
  if (user === null) {
    console.log('Данные для user отсутствуют');
    return;
  }
  if (user instanceof User) {
    return user;
  } else {
    console.log('Данные для user некорректны');
    return null;
  }
}

export function getFavoritesAmount(): number {
  const favoritesAmount: FavouritePlace[] = JSON.parse(
    localStorage.getItem('favoritesAmount')
  );
  if (favoritesAmount === null) {
    console.log('Данные для favoritesAmount отсутствуют');
    return null;
  }
  return favoritesAmount?.length;
}

export function renderUserBlock(
  user: User,
  favoriteItemsAmount?: number
): void {
  const favoritesCaption = favoriteItemsAmount
    ? favoriteItemsAmount
    : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${
        user?.userAvatarUrl ? user?.userAvatarUrl : './img/avatar.png'
      }" alt="Wade Warren" />
      <div class="info">
          <p class="name">${user?.userName ? user?.userName : 'Joe Jonson'}</p>
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
