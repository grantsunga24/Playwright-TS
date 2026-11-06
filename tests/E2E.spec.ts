import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { HomePage } from '../pages/home';
import { MyCartPage } from '../pages/mycart';
import { PaymentPage } from '../pages/payment';


test('Add to Cart 1 item', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const mycartPage = new MyCartPage(page);
  const paymentPage = new PaymentPage(page);

  await loginPage.gotowebsite();
  await loginPage.happylogin('grantsunga24@gmail.com', 'Hummer2497');
  await homePage.validatehomepage();
  await homePage.addtocartadidas();
  await mycartPage.validateMyCartPage();
  await mycartPage.validateAdded1Item();
  await mycartPage.CheckoutItem();
  await paymentPage.fillPaymentDetails();
  await homePage.logout();

});
test('Add to Cart 2 items', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const mycartPage = new MyCartPage(page);
  const paymentPage = new PaymentPage(page);

  await loginPage.gotowebsite();
  await loginPage.happylogin('grantsunga24@gmail.com', 'Hummer2497');
  await homePage.validatehomepage();
  await homePage.addtocartadidaszara();
  await mycartPage.validateMyCartPage();
  await mycartPage.validateAdded2Items();
  await mycartPage.CheckoutItem();
  await paymentPage.fillPaymentDetails();
  await homePage.logout();

})


