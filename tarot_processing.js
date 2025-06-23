// Advanced NLP Grammar Generator for Tarot Interpretations - REDACTED

// Tarot Card Processing Functions
function interpretCard(card) {
  // Combine factual meaning and template for a mechanical, non-mystical tone
  return `${card.icon} ${card.name}: ${card.meaning} ${card.template}`;
}

async function generateSummary(drawnCards) {
  // Use the template texts for a summary that is not mystical
  const summaryTemplates = await shuffleArray(drawnCards.map(card => card.template));
  const slicedTemplates = summaryTemplates.map(innerArray => innerArray.slice(0, 2))
    console.log(slicedTemplates)
  return `Summary: The reading includes the following operational states: ${slicedTemplates.join(" ")} Analysis complete. Your gratitude is noted.`;
}

async function processTarotDraw(drawnCards) {
//  const cardSentences = drawnCards.map(interpretCard);
  const summary = await generateSummary(drawnCards);
  return summary;
}

// Example usage:
//const drawnCards = [
//  TAROT_CONFIG.CARDS.find(c => c.name === "The Tower"),
//  TAROT_CONFIG.CARDS.find(c => c.name === "The Fool"),
//  TAROT_CONFIG.CARDS.find(c => c.name === "The Sun")
//];
//console.log(processTarotDraw(drawnCards));
/*
🗼 The Tower: The Tower represents abrupt change and the breakdown of established structures. This card is observed when disruption occurs. 🃏 The Fool: The Fool represents the start of a process or journey. It is associated with inexperience and the potential for development. This card is often drawn at the beginning of a sequence. ☀️ The Sun: The Sun denotes successful outcomes and favorable conditions. This card is present when results are positive. Summary: The reading includes the following operational states: This card is observed when disruption occurs. This card is often drawn at the beginning of a sequence. This card is present when results are positive. Analysis complete.
*/

// Simple hash function for seeding
function stringHash(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
    }
    return hash >>> 0;
}

// Seeded pseudo-random generator (Mulberry32)
function mulberry32(seed) {
    return function() {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

// Helper to get current position as a Promise
function getCurrentPositionPromise() {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve(null);
        } else {
            navigator.geolocation.getCurrentPosition(
                (pos) => resolve({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                }),
                () => resolve(null), // On error, resolve as null
                {timeout: 5000}
            );
        }
    });
}

/**
 * Shuffles an array using a seed based on input string, current GMT date-time, and user location.
 * @param {Array} array - The array to shuffle.
 * @param {string} inputStr - The input string.
 * @returns {Promise<Array>} - Promise resolving to the shuffled array.
 */
async function shuffleArray(array, inputStr) {
    const shuffled = [...array];
    const nowGMT = new Date().toISOString();
//    const location = await getCurrentPositionPromise();
    const locStr = location ? `${location.latitude},${location.longitude}` : 'unknown';
    const seedStr = `${inputStr}|${nowGMT}|${locStr}`;
    const seed = stringHash(seedStr);
    const random = mulberry32(seed);

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

class TarotProcessor {
    constructor() {
        
        this.drawnCards = [];
        this.isDrawing = false;
    }

/*    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
*/
    async drawCards(tarotCards, input_str) {
        const shuffledCards = await shuffleArray(tarotCards, input_str);
        this.drawnCards = shuffledCards.slice(0, 3);
        return this.drawnCards;
    }

 /*   generateInterpretation(question, tarotCardMeanings) {
        const cardNames = this.drawnCards.map(card => card.name);
        
        // Collect all meanings from the three cards
        const allMeanings = [];
        cardNames.forEach(cardName => {
            const meanings = tarotCardMeanings[cardName] || [];
            allMeanings.push(...meanings);
        });
        
        // Generate completely unique interpretation using advanced NLP
        return this.nlpGenerator.generateUniqueReading(allMeanings, cardNames, question);
    }
*/
	async generateInterpretation(question) {
		//Keeping question as a variable in case we want to do something with it in the future
		const cardNames = this.drawnCards.map(card => card.name);
		return await processTarotDraw(this.drawnCards)		
	}
    getDrawnCards() {
        return this.drawnCards;
    }

    setDrawing(state) {
        this.isDrawing = state;
    }

    getDrawingState() {
        return this.isDrawing;
    }
}

// Character Counter Utility
class CharacterCounter {
    constructor(inputElement, counterElement, maxLength = 20000) {
        this.inputElement = inputElement;
        this.counterElement = counterElement;
        this.maxLength = maxLength;
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.inputElement.addEventListener('input', () => this.updateCounter());
        this.inputElement.addEventListener('keyup', () => this.updateCounter());
        this.inputElement.addEventListener('paste', () => {
            setTimeout(() => this.updateCounter(), 0);
        });
    }

    updateCounter() {
        const currentLength = this.inputElement.value.length;
        this.counterElement.textContent = `${currentLength} / ${this.maxLength}`;
        
        // Check for error conditions
        const isEmpty = currentLength === 0;
        const isOverLimit = currentLength > this.maxLength;
        const isError = isEmpty || isOverLimit;
        
        // Update styling
        if (isError) {
            this.inputElement.classList.add('error');
            this.counterElement.classList.add('error');
        } else {
            this.inputElement.classList.remove('error');
            this.counterElement.classList.remove('error');
        }
        
        return !isError; // Return true if valid
    }

    isValid() {
        const currentLength = this.inputElement.value.length;
        return currentLength > 0 && currentLength <= this.maxLength;
    }
}

// Card Animation Controller
class CardAnimationController {
    constructor(cardsContainer) {
        this.cardsContainer = cardsContainer;
        this.animationCallbacks = new Map();
    }

    async createCard(cardData, index, clickCallback) {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = index * 0.2 + 's';
        let meanings = await shuffleArray(cardData.meaning);;
        card.innerHTML = `
            <div class="card-face card-back">
                <div class="card-back-pattern"></div>
            </div>
            <div class="card-face card-front">
                <div class="card-icon">${cardData.icon}</div>
                <h3 class="card-title">${cardData.name}</h3>
                <p class="card-meaning">${meanings.slice(0,2).join(" ")}</p>
            </div>
        `;
        
        card.addEventListener('click', () => clickCallback(card, index));
        this.cardsContainer.appendChild(card);
        
        return card;
    }

    flipCard(card, index) {
        if (card.classList.contains('flipped')) return false;
        
        card.classList.add('flipped');
        
        // Store callback for this card
        if (this.animationCallbacks.has(index)) {
            setTimeout(() => {
                this.animationCallbacks.get(index)();
            }, 600);
        }
        
        return true;
    }

    onCardFlipped(index, callback) {
        this.animationCallbacks.set(index, callback);
    }

    checkAllCardsFlipped() {
        const allCards = this.cardsContainer.querySelectorAll('.card');
        const flippedCards = this.cardsContainer.querySelectorAll('.card.flipped');
        
        return allCards.length === flippedCards.length && allCards.length > 0;
    }

    clearCards() {
        this.cardsContainer.innerHTML = '';
        this.animationCallbacks.clear();
    }
}

// Button State Manager
class ButtonStateManager {
    constructor(buttonElement, iconElement, textElement) {
        this.buttonElement = buttonElement;
        this.iconElement = iconElement;
        this.textElement = textElement;
        this.originalIcon = '🂠';
        this.originalText = 'DRAW CARDS';
        this.shufflingIcon = '🃏';
        this.shufflingText = 'SHUFFLING...';
    }

    setShuffling(isShuffling) {
        if (isShuffling) {
            this.iconElement.textContent = this.shufflingIcon;
            this.iconElement.classList.add('shuffling-animation');
            this.textElement.textContent = this.shufflingText;
            this.buttonElement.disabled = true;
        } else {
            this.iconElement.classList.remove('shuffling-animation');
            this.iconElement.textContent = this.originalIcon;
            this.textElement.textContent = this.originalText;
            this.buttonElement.disabled = false;
        }
    }

    setDisabled(isDisabled) {
        this.buttonElement.disabled = isDisabled;
    }
}

// Export classes for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TarotProcessor,
        CharacterCounter,
        CardAnimationController,
        ButtonStateManager
    };
} else {
    // Browser environment - attach to window
    window.TarotProcessor = TarotProcessor;
    window.CharacterCounter = CharacterCounter;
    window.CardAnimationController = CardAnimationController;
    window.ButtonStateManager = ButtonStateManager;
}