const puppeteer = require("puppeteer");

exports.snapshot = async function(url, path) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto(url, {timeout: 120000});
  } catch (error) {
    console.error(`Open page error: ${error}`);
  }
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  });
  const clip = {
    x: dimensions.width * 0.1,
    y: 96,
    width: dimensions.width * 0.8,
    height: dimensions.height * 0.78
  };
  try {
    await page.screenshot({path, clip});
  } catch (error) {
    console.error(`Screenshot error: ${error}`);
  }
  await browser.close();
};
