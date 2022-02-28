/*
Write a function that turns a string of 24-hour time into words.

You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

Handle noon and midnight specially:

timeWord("00:00")
// 'midnight'

timeWord("12:00")
// 'noon'
Otherwise, covert times to text:

timeWord("01:00")
// "one o'clock am"

timeWord("06:01")
// 'six oh one am'

timeWord("06:10")
// 'six ten am'

timeWord("06:18")
// 'six eighteen am'

timeWord("06:30")
// 'six thirty am'

timeWord("10:34")
// 'ten thirty four am'
Don’t forget to handle early morning properly:

timeWord("00:12")
// 'twelve twelve am'
For times after noon, add ‘pm’:

timeWord("12:09")
// 'twelve oh nine pm'

timeWord("23:23")
// 'eleven twenty three pm'
*/

function timeWord(str) {
    if (str === '00:00') {
        return 'midnight'
    } else if (str === '12:00') {
        return 'noon'
    }
    
    const word = {
        0: 'twelve',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
    }

    const strSplit = str.split(':')
    let hr = +strSplit[0]
    const min = +strSplit[1]

    let amPm = 'am'
    if (hr > 11) {
        if (hr > 12) {
            hr -=12
        }
        amPm = 'pm'
    }

    hr = word[hr]

    if (min === 0) {
        return `${hr} o'clock ${amPm}`
    } else if (min < 10) {
        return `${hr} oh ${word[min]} ${amPm}`
    } else if (min < 20) {
        return `${hr} ${word[min]} ${amPm}`
    }
    
    const ones = min % 10
    const tens = word[Math.floor(min / 10) * 10]
    
    if (ones === 0 ){
        return `${hr} ${tens} ${amPm}`
    } else {
        return `${hr} ${tens} ${word[ones]} ${amPm}`
    }
}

function test(func, inp, exp) {
    const res = func(inp)
    let passed = false
    if (res === exp) {
        passed = 'true '
    }
    console.log("passed:", passed, ` func: ${func.name}  inp: '${inp}'  res: '${res}'  exp: '${exp}'`)
}

test(timeWord,'00:00','midnight')
test(timeWord,'12:00','noon')
test(timeWord,'01:00',"one o'clock am")
test(timeWord,'06:01',"six oh one am")
test(timeWord,'06:13',"six thirteen am")
test(timeWord,'06:10',"six ten am")
test(timeWord,'06:18',"six eighteen am")
test(timeWord,'06:30',"six thirty am")
test(timeWord,'10:34',"ten thirty four am")
test(timeWord,'00:12',"twelve twelve am")
test(timeWord,'12:09',"twelve oh nine pm")
test(timeWord,'23:23',"eleven twenty three pm")