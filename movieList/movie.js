const {By} = require('selenium-webdriver')

const addMovie = async (driver, title)=> {
    await driver.findElement(By.xpath(`//input`)).sendKeys(title)
    await driver.findElement(By.xpath('//button')).click()
    const movieText = await driver.findElementA(By.xpath('//li/span')).getText()
    // const displayed = movie.isDisplayed()

    // expect(displayed).toBeTruthy()
}

module.exports = {
    addMovie
}