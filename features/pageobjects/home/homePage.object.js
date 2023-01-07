import {locators,generic} from '../../../index'
import getByXpath from '../../../src/lib/locators/getByXpath'
const {getById, getByCss} = locators

const pageObjects = {

  'GamesFeedHeritage': getByXpath("//div[@class= 'top'] //div[@class= 'logo animate']"),

}

module.exports =  class gamesFeedPage extends generic {
  constructor() {
    super(pageObjects)
  }
}
