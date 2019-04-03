import { TestWindow } from '@stencil/core/testing';
import { WoColorPicker } from './wo-color-picker';

describe('wo-color-picker', () => {
  it('should build', () => {
    expect(new WoColorPicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLWoColorPickerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [WoColorPicker],
        html: '<wo-color-picker></wo-color-picker>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
