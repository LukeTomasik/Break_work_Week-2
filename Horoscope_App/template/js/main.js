/*

1.Get user data form the inputs (DOM)
2. store the inputs in a container (variables)
    - target display in HTML (h2) so we can alter
3. create function that displays horoscope
    -If / else statements
    - display our result in HTML
4. attach the function to  the button
5. horoscope app is done

*/

// 1.Get user data from the inputs (DOM)
// let displayMonth = document.querySelector('#month')
// let displayDay = document.querySelector('#day')
const button = document.querySelector("#button")
const displayResult = document.querySelector("#displayResult")
const hLink = document.querySelector("#link")



button.addEventListener('click', horoscopeLogic)

function horoscopeLogic () {
    let displayMonth = document.querySelector('#month').value.toLowerCase()
    let displayDay = document.querySelector('#day').value
    
    if (displayMonth === 'january') {
        if(displayDay <= 20){
            zodiacSign('capricornLogo')
            zodiacText(capricorn)
            displayResult.innerText = 'Capricorn'
        } else {
            zodiacSign('aquariusLogo')
            zodiacText(aquarius)
            displayResult.innerText = 'Aquarius'
        }
    }
    if (displayMonth === 'february') {
        if (displayDay <= 18) {
            zodiacSign('aquariusLogo')
            zodiacText(aquarius)
            displayResult.innerText = 'Aquarius'
        } else {
            zodiacSign('piscesLogo')
            zodiacText(pisces)
            displayResult.innerText = 'Pisces'
        }
    }
    if (displayMonth === 'march') {
        if (displayDay <= 19) {
            zodiacSign('piscesLogo')
            zodiacText(pisces)
            displayResult.innerText = 'Pisces'
        } else {
            zodiacSign('ariesLogo')
            zodiacText(aries)
            displayResult.innerText = 'Aries'
        }
    }
    if (displayMonth === 'april') {
        if (displayDay <= 19) {
            zodiacSign('ariesLogo')
            zodiacText(aries)
            displayResult.innerText = 'Aries'
        } else {
            zodiacSign('taurusLogo')
            zodiacText(taurs)
            displayResult.innerText = 'Taurus'
        }
    }
    if (displayMonth === 'may') {
        if (displayDay <= 20) {
            zodiacSign('taurusLogo')
            zodiacText(taurs)
            displayResult.innerText = 'Taurus'
        } else {
            zodiacSign('geminiLogo')
            zodiacText(gemini)
            displayResult.innerText = 'Gemini'
        }
    }
    if (displayMonth === 'june') {
        if (displayDay <= 20) {
            zodiacSign('geminiLogo')
            zodiacText(gemini)
            displayResult.innerText = 'Gemini'
        } else {
            zodiacSign('cancerLogo')
            zodiacText(cancer)
            displayResult.innerText = 'Cancer'
        }
    }
    if (displayMonth === 'july') {
        if (displayDay <= 22) {
            zodiacSign('cancerLogo')
            zodiacText(cancer)
            displayResult.innerText = 'Cancer'
        } else {
            zodiacSign('leoLogo')
            zodiacText(leo)
            displayResult.innerText = 'Leo'
        }
    }
    if (displayMonth === 'august') {
        if (displayDay <= 22) {
            zodiacSign('leoLogo')
            zodiacText(leo)
            displayResult.innerText = 'Leo'
        } else {
            zodiacSign('virgoLogo')
            zodiacText(virgo)
            displayResult.innerText = 'Virgo'
        }
    }
    if (displayMonth === 'september') {
        if (displayDay <= 22) {
            zodiacSign('virgoLogo')
            zodiacText(virgo)
            displayResult.innerText = 'Virgo'
        } else {
            zodiacSign('libraLogo')
            zodiacText(libra)
            displayResult.innerText = 'Libra'
        }
    }
    if (displayMonth === 'october') {
        if (displayDay <= 22) {
            zodiacSign('libraLogo')
            zodiacText(libra)
            displayResult.innerText = 'Libra'
        } else {
            zodiacSign('scorpioLogo')
            zodiacText(scorpio)
            displayResult.innerText = 'Scorpio'
        }
    }
    if (displayMonth === 'november') {
        if (displayDay <= 21) {
            zodiacSign('scorpioLogo')
            zodiacText(scorpio)
            displayResult.innerText = 'Scorpio'
        } else {
            zodiacSign('sagittariusLogo')
            zodiacText(sagittarius)
            displayResult.innerText = 'Sagittarius'
        }
    }
    if (displayMonth === 'december') {
        if (displayDay <= 21) {
            zodiacSign('sagittariusLogo')
            zodiacText(sagittarius)
            displayResult.innerText = 'Sagittarius'
        } else {
            zodiacSign('capricornLogo')
            zodiacText(capricorn)
            displayResult.innerText = 'Capricorn'
        }
    }
}

function zodiacSign (sign) {
    // add a class to section to remove hidden
        document.querySelector('.resultsSection').classList.remove('hidden')
    // change background URL depening on zodiac sign
    let zodiacImg =document.querySelector('#imgHolder')
    zodiacImg.style.background = `url(./${sign}.png)`;
    zodiacImg.style.backgroundPosition = `center`;
    zodiacImg.style.backgroundSize = `contain`;
    zodiacImg.style.backgroundRepeat = `no-repeat`;
}

function zodiacText (obj) {
       /// change the block of text depending on zodiac sign
       let zodiacText = document.querySelectorAll('dd')
       let zodiacTextBlock = document.querySelector('#textBlock')
       zodiacText[0].innerHTML = obj.textOne
       zodiacText[1].innerHTML = obj.textTwo
       zodiacText[2].innerHTML = obj.textThree
       zodiacText[3].innerHTML = obj.textFour
       zodiacTextBlock.innerHTML = obj.textFive
}

let aquarius = {
    textOne: 'Progressive, original, independent, humanitarian',
    textTwo: "Runs from emotional expression, temperamental, uncompromising, aloof",
    textThree: 'Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener',
    textFour: 'Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them',
    textFive: ` Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.
    Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.
    Aquarius is an air sign, and as such, uses his mind at every opportunity. If there is no mental stimulation, they are bored and lack a motivation to achieve the best result.`
}
let pisces = {
    textOne: 'Compassionate, artistic, intuitive, gentle, wise, musical',
    textTwo: "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
    textThree: 'Being alone, sleeping, music, romance, visual media, swimming, spiritual themes',
    textFour: 'Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind',
    textFive: `Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.
    Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity.`
}
let aries = {
    textOne: 'Courageous, determined, confident, enthusiastic, optimistic, honest, passionate',
    textTwo: "Impatient, moody, short-tempered, impulsive, aggressive",
    textThree: 'Comfortable clothes, taking on leadership roles, physical challenges, individual sports',
    textFour: "Inactivity, delays, work that does not use one's talents",
    textFive: `As the first sign in the zodiac, the presence of Aries always marks the beginning of 
    something energetic and turbulent. They are continuously looking for dynamic, speed and competition, 
    always being the first in everything - from work to social gatherings. Thanks to its ruling planet Mars 
    and the fact it belongs to the element of Fire (just like Leo and Sagittarius), Aries is one of the most
     active zodiac signs. It is in their nature to take action, sometimes before they think about it well.`
}
let taurus = {
    textOne: 'Reliable, patient, practical, devoted, responsible, stable',
    textTwo: "Stubborn, possessive, uncompromising",
    textThree: 'Gardening, cooking, music, romance, high quality clothes, working with hands',
    textFour: 'Sudden changes, complications, insecurity of any kind, synthetic fabrics',
    textFive: `Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.`
}
let gemini = {
    textOne: 'Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas',
    textTwo: "Nervous, inconsistent, indecisive",
    textThree: 'Music, books, magazines, chats with nearly anyone, short trips around the town',
    textFour: 'Being alone, being confined, repetition and routine',
    textFive: `Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.`
}
let cancer = {
    textOne: 'Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive',
    textTwo: "Moody, pessimistic, suspicious, manipulative, insecure",
    textThree: 'Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends',
    textFour: 'Strangers, any criticism of Mom, revealing of personal life',
    textFive: `Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering.`
}
let leo = {
    textOne: 'Creative, passionate, generous, warm-hearted, cheerful, humorous',
    textTwo: "Arrogant, stubborn, self-centered, lazy, inflexible",
    textThree: 'Theater, taking holidays, being admired, expensive things, bright colors, fun with friends',
    textFour: 'Being ignored, facing difficult reality, not being treated like a king or queen',
    textFive: `People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their "king of the jungle" status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.`
}
let virgo = {
    textOne: 'Loyal, analytical, kind, hardworking, practical',
    textTwo: "Shyness, worry, overly critical of self and others, all work and no play",
    textThree: 'Animals, healthy food, books, nature, cleanliness',
    textFour: 'Rudeness, asking for help, taking center stage',
    textFive: `Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.`
}
let libra = {
    textOne: 'Cooperative,diplomatic, gracious, fair-minded, social',
    textTwo: "Indecisive, avoids confrontations, will carry a grudge, self-pity",
    textThree: 'Harmony, gentleness, sharing with others, the outdoors',
    textFour: 'Violence, injustice, loudmouths, conformity',
    textFive: `People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible`
}
let scorpio = {
    textOne: 'Resourceful, brave, passionate, stubborn, a true friend',
    textTwo: "Distrusting, jealous, secretive, violent",
    textThree: 'Truth, facts, being right, longtime friends, teasing, a grand passion',
    textFour: 'Dishonesty, revealing secrets, passive people',
    textFive: `Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness.`
}
let sagittarius = {
    textOne: 'Generous, idealistic, great sense of humor',
    textTwo: "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
    textThree: 'Freedom, travel, philosophy, being outdoors',
    textFour: 'Clingy people, being constrained, off-the-wall theories, details',
    textFive: `Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.
    Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.`
}
let capricorn = {
    textOne: 'Responsible, disciplined, self-control, good managers',
    textTwo: "Know-it-all, unforgiving, condescending, expecting the worst",
    textThree: 'Family, tradition, music, understated status, quality craftsmanship',
    textFour: 'Almost everything at some point',
    textFive: `Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise.`
}



