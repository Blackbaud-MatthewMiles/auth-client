const HOST_ORIGIN = 'https://app.blackbaud.com';

export class BBAuthInterop {
  /* istanbul ignore next */
  public static postOmnibarMessage(iframeEl: HTMLIFrameElement, message: any, origin?: string) {
    message.source = 'auth-client';
    iframeEl.contentWindow.postMessage(message, origin || HOST_ORIGIN);
  }

  public static messageIsFromOmnibar(event: {origin: string, data: any}): boolean {
    if (event.origin === HOST_ORIGIN) {
      const message = event.data;
      return !!message && message.source === 'skyux-spa-omnibar';
    }

    return false;
  }
}
