describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show hello screen after tap', async () => {
    const btn = await element(by.id('button_test'));
    await expect(btn).toBeVisible();
  });
});
