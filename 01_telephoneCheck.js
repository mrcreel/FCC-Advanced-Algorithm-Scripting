/***
https://www.freecodecamp.org/challenges/validate-us-telephone-numbers

For this challenge you will be presented with a string such as 800-692-7753 or
 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number
  based on any combination of the formats provided above. The area code is
 required. If the country code is provided, you must confirm that the country
 code is 1. Return true if the string is a valid US phone number; otherwise
 return false.
*/
function telephoneCheck (str, target) {
  function funcNumbersOnly (str) {
    return str.replace(/\D/g, '')
  }
  function funcRemoveSpaces (str) {
    return str.replace(/ /g, '')
  }
  var patterns = [
    /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/,
    /^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^1[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/,
    /^1[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^1\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/
  ]
  let numbersOnly = funcNumbersOnly(str).length
  if (numbersOnly < 10 || numbersOnly > 11) {
    console.log(false, str, target, target === false)
    return false
  }
  str = funcRemoveSpaces(str)
  for (var i in patterns) {
    const pattern = patterns[i]
    if (pattern.test(str)) {
      console.log(str, true, target, target === true)
      return true
    }
  }
  console.log(false, str, target, target === false)
  return false
}

telephoneCheck('555-555-5555', 'boolean')
telephoneCheck('1 555-555-5555', true)
telephoneCheck('1 (555) 555-5555', true)
telephoneCheck('5555555555', true)
telephoneCheck('555-555-5555', true)
telephoneCheck('(555)555-5555', true)
telephoneCheck('1(555)555-5555', true)
telephoneCheck('555-5555', false)
telephoneCheck('5555555', false)
telephoneCheck('1 555)555-5555', false)
telephoneCheck('1 555 555 5555', true)
telephoneCheck('1 456 789 4444', true)
telephoneCheck('123**&!!asdf#', false)
telephoneCheck('55555555', false)
telephoneCheck('(6505552368)', false)
telephoneCheck('2 (757) 622-7382', false)
telephoneCheck('0 (757) 622-7382', false)
telephoneCheck('-1 (757) 622-7382', false)
telephoneCheck('2 757 622-7382', false)
telephoneCheck('10 (757) 622-7382', false)
telephoneCheck('27576227382', false)
telephoneCheck('(275)76227382', false)
telephoneCheck('2(757)6227382', false)
telephoneCheck('2(757)622-7382', false)
telephoneCheck('555)-555-5555', false)
telephoneCheck('(555-555-5555', false)
telephoneCheck('(555)5(55?)-5555', false)
