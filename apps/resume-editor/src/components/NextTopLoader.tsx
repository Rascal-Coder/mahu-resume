'use client';
import * as React from 'react';

import * as NProgress from 'nprogress';

export type NextTopLoaderProps = {
  color?: string;
  initialPosition?: number;
  crawlSpeed?: number;
  height?: number;
  crawl?: boolean;
  showSpinner?: boolean;
  easing?: string;
  speed?: number;
  shadow?: string | false;
  template?: string;
  zIndex?: number;
  showAtBottom?: boolean;
};

const NextTopLoader = ({
  color: propColor,
  height: propHeight,
  showSpinner,
  crawl,
  crawlSpeed,
  initialPosition,
  easing,
  speed,
  shadow,
  template,
  zIndex = 1600,
  showAtBottom = false,
}: NextTopLoaderProps): JSX.Element => {
  const defaultColor = '#29d';
  const defaultHeight = 3;

  const color = propColor ?? defaultColor;
  const height = propHeight ?? defaultHeight;

  const boxShadow =
    !shadow && shadow !== undefined
      ? ''
      : shadow
        ? `box-shadow:${shadow}`
        : `box-shadow:0 0 10px ${color},0 0 5px ${color}`;

  const positionStyle = showAtBottom ? 'bottom: 0;' : 'top: 0;';
  const spinnerPositionStyle = showAtBottom ? 'bottom: 15px;' : 'top: 15px;';

  const styles = (
    <style>
      {`#nprogress{pointer-events:none}#nprogress .bar{background:${color};position:fixed;z-index:${zIndex};${positionStyle}left:0;width:100%;height:${height}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${boxShadow};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:${zIndex};${spinnerPositionStyle}right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${color};border-left-color:${color};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}
    </style>
  );

  React.useEffect(() => {
    NProgress.configure({
      showSpinner: showSpinner ?? true,
      trickle: crawl ?? true,
      trickleSpeed: crawlSpeed ?? 200,
      minimum: initialPosition ?? 0.08,
      easing: easing ?? 'ease',
      speed: speed ?? 200,
      template:
        template ??
        '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
    });

    function handleRouteChangeStart() {
      NProgress.start();
    }

    function handleRouteChangeComplete() {
      NProgress.done();
    }

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      handleRouteChangeStart();
      originalPushState.apply(this, args);
      handleRouteChangeComplete();
    };

    history.replaceState = function (...args) {
      console.log('replaceState');

      handleRouteChangeStart();
      originalReplaceState.apply(this, args);
      handleRouteChangeComplete();
    };

    window.addEventListener('popstate', handleRouteChangeComplete);

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href) {
        const newUrl = new URL(anchor.href);
        const currentUrl = new URL(window.location.href);
        if (newUrl.pathname !== currentUrl.pathname || newUrl.search !== currentUrl.search) {
          handleRouteChangeStart();
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', handleRouteChangeComplete);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return styles;
};

export default NextTopLoader;
