import { newE2EPage } from '@stencil/core/testing';

describe('mouse-hover-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mouse-hover-rating></mouse-hover-rating>');

    const element = await page.find('mouse-hover-rating');
    expect(element).toHaveClass('hydrated');
  });
});
