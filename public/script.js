const quotes = [
        // Ghost of Tsushima
    "'To Master Your Blade, You Must First Control Your Emotions.' - Ghost of Tsushima",
    "'Only A Child Expects Perfection Of His Elders.'  - Ghost of Tsushima",
    "'The Path Ahead May Take A Lifetime. But I Will Walk It With You. Always.' - Ghost of Tsushima",
    "'I Trained You To Fight With Honor! ~ Honor Died On The Beach!' - Ghost of Tsushima",
    "'You Have No Honor. ~ And You Are A Slave To It.' - Ghost of Tsushima",
    "'Desperation Can Bring Out The Demon In The Best Of Men.' - Ghost of Tsushima",
    "'A Samurai Knows How To Apply The Right Amount Of Force. Too Little And You Lose Respect, Too Much And You Lose Opportunity.' - Ghost of Tsushima",
        // God of War
    "'The cycle ends here. We must be better than this.' - God of War",
    "'Do not be sorry. Be better.' - God of War",
    "'You are not your mistakes.' - God of War",
    "'A warrior’s strength comes from the heart.' - God of War",
    "'We cannot change our past, but we can shape our future.' - God of War",
    "'To be a father is to be a protector.' - God of War",
    "'The journey is what matters, not the destination.' - God of War",
    "'Let your actions speak louder than words.' - God of War",
    "'The mind is a powerful thing; harness it.' - God of War",

    // Assassin's Creed
    "'Nothing is true; everything is permitted.' - Assassin's Creed",
    "'Our lives are defined by the opportunities we take.' - Assassin's Creed",
    "'A man is not defined by the events of his life, but rather by the choices he makes.' - Assassin's Creed",
    "'The best weapon is your mind.' - Assassin's Creed",
    "'Every victory is built on the ashes of failure.' - Assassin's Creed",
    "'Stand firm in your beliefs, even if the world tries to shake them.' - Assassin's Creed",
    "'To achieve greatness, you must first endure hardship.' - Assassin's Creed",
    "'The past shapes us, but it doesn’t define us.' - Assassin's Creed",
    "'Live free or die trying.' - Assassin's Creed",
    "'True strength lies in our ability to rise after a fall.' - Assassin's Creed",

    // Elden Ring
    "'Rise, tarnished, and be guided by grace.' - Elden Ring",
    "'In the face of death, we find our true strength.' - Elden Ring",
    "'The journey is the reward.' - Elden Ring",
    "'Every challenge you face is an opportunity to grow.' - Elden Ring",
    "'What lies beyond the horizon is worth the struggle.' - Elden Ring",
    "'Embrace the darkness; it will lead you to the light.' - Elden Ring",
    "'Your will to persevere defines your fate.' - Elden Ring",
    "'Strength is not just in body, but in spirit.' - Elden Ring",
    "'Hope is a powerful weapon.' - Elden Ring",
    "'The path to greatness is paved with obstacles.' - Elden Ring",

    // Battlefield
    "'The only thing we have to fear is fear itself.' - Battlefield",
    "'The strength of a warrior lies in their resolve.' - Battlefield",
    "'Courage is not the absence of fear, but the triumph over it.' - Battlefield",
    "'Victory belongs to those who believe in it the most.' - Battlefield",
    "'When faced with adversity, rise to the occasion.' - Battlefield",
    "'Success is built on the ashes of mistakes.' - Battlefield",
    "'Every soldier is a hero in their own story.' - Battlefield",
    "'In unity, there is strength.' - Battlefield",
    "'Never give up; the fight is worth it.' - Battlefield",
    "'Be the change you wish to see on the battlefield.' - Battlefield",

    // Call of Duty
    "'Victory is not always about winning; it’s about fighting for what you believe in.' - Call of Duty",
    "'You don't have to be a hero; you just have to be brave.' - Call of Duty",
    "'We are stronger together than we are apart.' - Call of Duty",
    "'No sacrifice is too great when fighting for your cause.' - Call of Duty",
    "'The true test of a soldier is how they rise after defeat.' - Call of Duty",
    "'In the chaos of battle, focus on your mission.' - Call of Duty",
    "'The battlefield is a reflection of our resolve.' - Call of Duty",
    "'Bravery is not the absence of fear, but the courage to face it.' - Call of Duty",
    "'Every soldier has a story; make yours legendary.' - Call of Duty",
    "'Rise above the challenge; it defines your character.' - Call of Duty"
];

const quoteDisplay = document.getElementById('quote');
const quoteButton = document.getElementById('quote-button');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerText = quotes[randomIndex];
}

// Initialize with a quote
getRandomQuote();

// Event listener for button
quoteButton.addEventListener('click', getRandomQuote);

