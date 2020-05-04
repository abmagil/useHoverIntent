import * as React from 'react';
import hoverintent from 'hoverintent';

interface useHoverIntentProps {
  hoverIn?: () => void;
  hoverOut?: () => void;
  opts?: {
    sensitivity?: number;
    interval?: number;
    timeout?: number;
    handleFocus?: boolean;
  };
}
export const useHoverIntent = <T extends HTMLElement>({
  hoverIn,
  hoverOut,
  opts,
}: useHoverIntentProps): React.Ref<T> => {
  const elementRef = React.useRef<T>(null);

  React.useEffect(() => {
    const hoverListener = hoverintent(
      elementRef.current,
      function() {
        hoverIn?.();
      },
      function() {
        hoverOut?.();
      }
    ).options(
      opts ?? {
        interval: 25,
      }
    );
    return () => {
      hoverListener.remove();
    };
  }, [elementRef.current]);

  return elementRef;
};
