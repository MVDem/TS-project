export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId);
  element.innerHTML = html;
}

export function renderToast(message, action) {
  let messageText = '';

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `;
  }

  renderBlock('toast-block', messageText);

  const button = document.getElementById('toast-main-action');
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler();
      }
      renderToast(null, null);
    };
  }
}

export interface SearchFormData {
  startDate: number;
  endDate: number;
}

export function collectSearchParams(): SearchFormData {
  return {
    startDate: +new Date(
      (document.getElementById('check-in-date') as HTMLTextAreaElement).value
    ),
    endDate: +new Date(
      (document.getElementById('check-out-date') as HTMLTextAreaElement).value
    ),
  };
}

export interface RenderFormParams {
  checkinDate: string;
  checkoutDate: string;
  minDate: string;
  maxDate: string;
}

export function getRenderFormParams(
  checkinDate?: string,
  checkoutDate?: string
): RenderFormParams {
  const minDate = new Date().toISOString().slice(0, 10);

  const today = new Date();
  const month = new Date().getMonth() === 12 ? 1 : new Date().getMonth() + 1;
  const nextMonthLastDay = new Date(today.getFullYear(), month + 1, 0);
  const maxDate = nextMonthLastDay.toISOString().slice(0, 10);

  const tempDate = new Date();
  tempDate.setDate(today.getDate() + 1);
  checkinDate = tempDate.toISOString().slice(0, 10);
  tempDate.setDate(tempDate.getDate() + 2);
  checkoutDate = tempDate.toISOString().slice(0, 10);

  return { checkinDate, checkoutDate, minDate, maxDate };
}
