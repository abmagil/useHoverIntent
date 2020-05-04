declare module 'hoverintent';

type HoverIntent<T extends HTMLElement> = (
  el: T,
  hoverInFunction: () => void,
  hoverOutFunction: () => void
) => HoverIntentRtn

type HoverIntentOptions = {
  sensitivity?: number;
  interval?: number;
  timeout?: number;
  handleFocus?: boolean;
}

type HoverIntentRtn = {
  remove: () => void
  options: (opts?: HoverIntentOptions) => HoverIntentRtn
}