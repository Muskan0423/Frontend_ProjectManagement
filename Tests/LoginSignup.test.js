const puppeteer = require('puppeteer');

describe('LoginSignup Component', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); 
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should successfully log in', async () => {
    await page.type('input[name="email"]', 'test@example.com'); 
    await page.type('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    await page.waitForNavigation();
    
    expect(page.url()).toBe('http://localhost:3000/todo'); 
  });

  test('should successfully sign up', async () => {
  
    await page.click('.switch-link');
    
    await page.type('input[name="username"]', 'newuser'); 
    await page.type('input[name="email"]', 'newuser@example.com');
    await page.type('input[name="password"]', 'password123'); 
    await page.click('button[type="submit"]');

    await page.waitForTimeout(9000); 
    
    const alertText = await page.evaluate(() => {
      return new Promise((resolve) => {
        window.alert = (msg) => resolve(msg);
      });
    });
    
    expect(alertText).toBe('Signup successful! You can now log in.');
  });

  test('should switch between Login and Signup forms', async () => {
    const initialHeading = await page.$eval('h2', el => el.innerText);
    expect(initialHeading).toBe('Login');

    await page.click('.switch-link');
    
    const afterSwitchHeading = await page.$eval('h2', el => el.innerText);
    expect(afterSwitchHeading).toBe('Signup');
  });
});
