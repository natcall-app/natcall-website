import { expect, test } from '@playwright/test';

test.describe('NatCall public website - landing page QA suite', () => {
  test.beforeEach(async ({ page }) => {
    // Expected: each test starts from a fresh homepage visit.
    await page.goto('/');
  });

  test('TC_001 - Homepage load verification', async ({ page }) => {
    // Expected: homepage responds successfully and renders the main hero content.
    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole('heading', { name: /^Call Home Spend Less\.$/i }),
    ).toBeVisible();
  });

  test('TC_002 - NatCall logo and brand visibility', async ({ page }) => {
    // Expected: the Natcall brand link is visible in the site header.
    await expect(page.getByRole('link', { name: /^Natcall$/i })).toBeVisible();
  });

  test('TC_003 - Pricing navigation link opens pricing section', async ({ page }) => {
    // Expected: desktop Pricing navigation scrolls/navigates to the pricing section.
    const primaryNav = page.getByRole('navigation', { name: /^Primary navigation$/i });

    await expect(primaryNav).toBeVisible();
    await primaryNav.getByRole('link', { name: /^Pricing$/i }).click();

    await expect(page).toHaveURL(/#pricing$/);
    await expect(
      page.getByRole('heading', { name: /^Transparent Pricing$/i }),
    ).toBeVisible();
  });

  test('TC_004 - Contact navigation link opens contact page', async ({ page }) => {
    // Expected: desktop Contact navigation opens the Contact page.
    const primaryNav = page.getByRole('navigation', { name: /^Primary navigation$/i });

    await expect(primaryNav).toBeVisible();
    await primaryNav.getByRole('link', { name: /^Contact$/i }).click();

    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole('heading', { name: /^Need help with your calls\?$/i })).toBeVisible();
  });

  test('TC_004A - Email verified redirect page renders success state', async ({ page }) => {
    // Expected: app redirect page confirms successful email verification.
    await page.goto('/email-verified');

    await expect(page).toHaveURL(/\/email-verified$/);
    await expect(page.getByRole('heading', { name: /^Congratulations!$/i })).toBeVisible();
    await expect(page.getByText(/^Your email has been verified\.$/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /^Open Natcall$/i })).toHaveAttribute(
      'href',
      'natcallapp://auth/callback',
    );
    await expect(page.getByRole('navigation', { name: /^Primary navigation$/i })).toBeHidden();
    await expect(page.getByRole('contentinfo')).toBeHidden();
  });

  test('TC_005 - Download App CTA visibility and clickability', async ({ page }) => {
    // Expected: desktop Download App CTA is visible and links to the download section.
    const downloadApp = page.getByRole('link', { name: /^Download App$/i });

    await expect(downloadApp).toBeVisible();
    await downloadApp.click();

    await expect(page).toHaveURL(/#download$/);
    await expect(page.getByRole('heading', { name: /^Ready to Call Home\?$/i })).toBeVisible();
  });

  test('TC_009 - Unverified marketing claims are hidden', async ({ page }) => {
    await expect(page.getByText(/^4\.8\/5$/i)).toHaveCount(0);
    await expect(page.getByText(/^Join 500,000\+ users worldwide saving on international calls\.$/i)).toHaveCount(0);
    await expect(page.getByRole('heading', { name: /^Testimonials$/i })).toHaveCount(0);
  });

  test('TC_010 - How it Works section content', async ({ page }) => {
    // Expected: How it Works section explains Download, Add Credits, and Call Home steps.
    await expect(page.getByRole('heading', { name: /^How it Works$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Download$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Add Credits$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Call Home$/i })).toBeVisible();
  });

  test('TC_011 - Credit package pricing', async ({ page }) => {
    // Expected: website credit packages match the app prices.
    const pricingSection = page.locator('section#pricing');

    await expect(pricingSection.getByRole('heading', { name: /^Transparent Pricing$/i })).toBeVisible();
    await expect(pricingSection.getByText(/^\$5 credit$/i)).toBeVisible();
    await expect(pricingSection.getByText(/^69 kr$/i)).toBeVisible();
    await expect(pricingSection.getByText(/^\$10 credit$/i)).toBeVisible();
    await expect(pricingSection.getByText(/^139 kr$/i)).toBeVisible();
  });

  test('TC_012 - Country pricing table rows', async ({ page }) => {
    // Expected: country rate table lists Natcall rate, typical carrier rate, and savings.
    const table = page.getByRole('table');

    await expect(
      table.getByRole('row', { name: /^Country Natcall Rate Typical Carrier Savings$/i }),
    ).toBeVisible();
    await expect(table.getByRole('row', { name: /^Eritrea TBC TBC TBC$/i })).toBeVisible();
    await expect(table.getByRole('row', { name: /^Ghana \$0\.08 \$0\.75 89%$/i })).toBeVisible();
    await expect(table.getByRole('row', { name: /^India \$0\.03 \$0\.35 91%$/i })).toBeVisible();
    await expect(table.getByRole('row', { name: /^Ethiopia TBC TBC TBC$/i })).toBeVisible();
    await expect(table.getByRole('row', { name: /^Philippines \$0\.05 \$0\.49 90%$/i })).toBeVisible();
  });

  test('TC_013 - Security and Encryption section', async ({ page }) => {
    // Expected: security section presents encryption and account protection trust cards.
    await expect(
      page.getByRole('heading', { name: /^Built to protect every account, payment, and call route\.$/i }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: /^SSL Certificate$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Encrypted Traffic$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Private Data$/i })).toBeVisible();
  });

  test('TC_014 - Everything You Need feature cards', async ({ page }) => {
    // Expected: feature cards describe rates, quality, top-up, worldwide use, subscription, and contacts.
    await expect(page.getByRole('heading', { name: /^Everything You Need$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Affordable Rates$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^HD Quality$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Instant Top-up$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Works Worldwide$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^No Subscription$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^Easy Contacts$/i })).toBeVisible();
  });

  test('TC_015 - Footer legal identity', async ({ page }) => {
    const footer = page.getByRole('contentinfo');

    await expect(footer.getByText(/^Medhane NatCall, org\. no\. 937 941 358$/i)).toBeVisible();
    await expect(footer.getByText(/^Copyright 2026 Natcall\. All rights reserved\.$/i)).toBeVisible();
  });

  test('TC_016 - Footer CTA section', async ({ page }) => {
    // Expected: footer CTA invites users to download iOS or Android app.
    const downloadSection = page.locator('section#download');

    await expect(downloadSection.getByRole('heading', { name: /^Ready to Call Home\?$/i })).toBeVisible();
    await expect(downloadSection.getByRole('link', { name: /^Download for iOS$/i })).toBeVisible();
    await expect(downloadSection.getByRole('link', { name: /^Get it on Android$/i })).toBeVisible();
  });

  test('TC_017 - Footer brand, product, and support links', async ({ page }) => {
    // Expected: homepage footer shows current Brand, Product, and Support link groups.
    const footer = page.getByRole('contentinfo');

    await expect(footer.getByRole('heading', { name: /^Natcall$/i })).toBeVisible();
    await expect(footer.getByRole('heading', { name: /^Brand$/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /^About Us$/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /^Press$/i })).toBeVisible();
    await expect(footer.getByRole('heading', { name: /^Product$/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /^Rates$/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /^Security$/i })).toBeVisible();
    await expect(footer.getByRole('heading', { name: /^Support$/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /^Help Center$/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /^Contact Us$/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /^FAQ$/i })).toBeVisible();
  });

  test('TC_018 - Mobile viewport responsiveness', async ({ page }) => {
    // Expected: mobile viewport uses hamburger menu instead of desktop primary navigation.
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await expect(page.getByRole('link', { name: /^Natcall$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Open menu$/i })).toBeVisible();
    await expect(page.getByRole('navigation', { name: /^Primary navigation$/i })).toBeHidden();
    await expect(page.getByRole('heading', { name: /^Call Home Spend Less\.$/i })).toBeVisible();
  });

  test('TC_019 - Tablet viewport responsiveness', async ({ page }) => {
    // Expected: tablet viewport uses hamburger menu instead of desktop primary navigation.
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page.getByRole('link', { name: /^Natcall$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Open menu$/i })).toBeVisible();
    await expect(page.getByRole('navigation', { name: /^Primary navigation$/i })).toBeHidden();
    await expect(page.getByRole('link', { name: /^App Store$/i })).toBeVisible();
  });

  test('TC_020 - Basic page title and no blank render', async ({ page }) => {
    // Expected: document title is set and visible body content is not blank.
    await expect(page).toHaveTitle(/Call Home For Less|Natcall/i);
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('TC_021 - Cross-browser smoke test support', async ({ page, browserName }) => {
    // Expected: this smoke test passes on Chromium, Firefox, and WebKit projects.
    expect(['chromium', 'firefox', 'webkit']).toContain(browserName);
    await expect(page.getByRole('link', { name: /^Natcall$/i })).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /^Call Home Spend Less\.$/i }),
    ).toBeVisible();
    await expect(page.locator('body')).not.toBeEmpty();
  });
});
