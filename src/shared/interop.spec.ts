import { BBAuthInterop } from './interop';

describe('Interop', () => {

  it('should validate that incoming messages originate from the omnibar', () => {
    function validate(source: string, origin: string, valid: boolean) {
      const isFromOmnibar = BBAuthInterop.messageIsFromOmnibar({
        data: {
          source
        },
        origin
      });

      expect(isFromOmnibar).toBe(valid);
    }

    // Valid source, invalid origin
    validate('skyux-spa-omnibar', 'https://example.com', false);

    // Invalid source, valid origin
    validate('skyux-spa-foo', 'https://app.blackbaud.com', false);

    // Valid source, valid origin
    validate('skyux-spa-omnibar', 'https://app.blackbaud.com', true);
  });

});
