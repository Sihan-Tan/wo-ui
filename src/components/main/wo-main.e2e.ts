import { newE2EPage } from '@stencil/core/testing';

describe('woo-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<wo-main></wo-main>');
    const element = await page.find('wo-main');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<wo-main></wo-main>');
    const component = await page.find('wo-main');
    let element = await page.find('wo-main >>> .local>span');
    expect(element.textContent).toEqual(``);

    component.setProperty('local', '客厅');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`客厅`);

    component.setProperty('isOpen', 'true');
    element = await page.find('wo-main >>> main');
    await page.waitForChanges();
    expect(element.className).toEqual(`active`);

    component.setProperty('imageUrl', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg');
    element = await page.find('wo-main >>> img');
    await page.waitForChanges();
    expect(element.getAttribute('src')).toEqual(`https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg`);
  });
});
