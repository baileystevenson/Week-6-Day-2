const {Builder, Capabilities, By} = require('selenium-webdriver')


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async ()=> {
    await driver.get('http://127.0.0.1:5500/week_6/Day%202/automation/movieList/index.html')
})

afterAll(async ()=> {
    await driver.quit()
})

// test('removing movie from input', async()=>{
// deleteMovie(driver, `titanic`)
// await driver.sleep(5000)
// })

test('types word into input', async()=>{
    addMovie(driver, `titanic`)
    await driver.sleep(2000)
})

const addMovie = async (driver, title)=> {
    await driver.findElement(By.xpath(`//input`)).sendKeys(title)
    await driver.findElement(By.xpath('//button')).click()
    const movieText = await driver.findElement(By.xpath('//li/span')).getText()
   
module.exports = {
    addMovie
}
}

test('cross off if watched', async()=>{
    crossOff(driver, `titanic`)
    await driver.sleep(2000)
})

const crossOff = async (driver)=> {
    const cross = await driver.findElement(By.xpath('//li/span'))
    cross.click()


const checkDisplay = await driver.findElement(By.xpath('//main/aside')).getText()
expect(checkDisplay).toBe('titanic watched!')
}

module.exports = {
    crossOff
}


test('removes word into input', async()=>{
    deleteMovie(driver, `titanic`)
    await driver.sleep(2000)
})

const deleteMovie = async (driver, title)=> {
    await driver.findElement(By.id (`${title}`)).click()
      
module.exports = {
    deleteMovie
}
}




