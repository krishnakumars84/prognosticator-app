// Main Tarot Application Script
// Integrates all components and manages the user interface

class TarotApplication {
    constructor() {
        this.processor = new TarotProcessor();
        this.characterCounter = null;
        this.cardAnimationController = null;
        this.buttonStateManager = null;
        this.flippedCardsCount = 0;
        
        this.initializeApplication();
    }

    initializeApplication() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApplication());
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        // Get DOM elements
        this.elements = {
            questionInput: document.getElementById('questionInput'),
            charCounter: document.getElementById('charCounter'),
            drawButton: document.getElementById('drawButton'),
            buttonIcon: document.getElementById('buttonIcon'),
            buttonText: document.getElementById('buttonText'),
            cardsContainer: document.getElementById('cardsContainer'),
            interpretation: document.getElementById('interpretation'),
            interpretationText: document.getElementById('interpretationText')
        };

        // Validate that all elements exist
        if (!this.validateElements()) {
            console.error('Required DOM elements not found');
            return;
        }

        // Initialize components
        this.initializeComponents();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Initialize character counter
        this.characterCounter.updateCounter();
        
        console.log('Tarot Application initialized successfully');
    }

    validateElements() {
        const requiredElements = [
            'questionInput', 'charCounter', 'drawButton', 'buttonIcon', 
            'buttonText', 'cardsContainer', 'interpretation', 'interpretationText'
        ];
        
        return requiredElements.every(elementName => {
            const exists = this.elements[elementName] !== null;
            if (!exists) {
                console.error(`Element ${elementName} not found`);
            }
            return exists;
        });
    }

    initializeComponents() {
        // Initialize character counter
        this.characterCounter = new CharacterCounter(
            this.elements.questionInput,
            this.elements.charCounter,
            TAROT_CONFIG.UI.MAX_CHAR_LIMIT
        );

        // Initialize card animation controller
        this.cardAnimationController = new CardAnimationController(
            this.elements.cardsContainer
        );

        // Initialize button state manager
        this.buttonStateManager = new ButtonStateManager(
            this.elements.drawButton,
            this.elements.buttonIcon,
            this.elements.buttonText
        );
    }

    setupEventListeners() {
        // Draw button click handler
        this.elements.drawButton.addEventListener('click', () => {
            this.handleDrawCards();
        });

        // Enter key handler for question input
        this.elements.questionInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.handleDrawCards();
            }
        });

        // Input validation handler
        this.elements.questionInput.addEventListener('input', () => {
            this.updateDrawButtonState();
        });
    }

    updateDrawButtonState() {
        const isValid = this.characterCounter.isValid();
        const isDrawing = this.processor.getDrawingState();
        
        this.buttonStateManager.setDisabled(!isValid || isDrawing);
    }

    async handleDrawCards() {
        // Validate input
        if (!this.characterCounter.isValid()) {
            this.showError('Please enter a valid question (1-20000 characters)');
            return;
        }

        // Prevent multiple simultaneous draws
        if (this.processor.getDrawingState()) {
            return;
        }

        try {
            // Start drawing process
            this.processor.setDrawing(true);
            this.buttonStateManager.setShuffling(true);
            
            // Clear previous results
            this.clearPreviousReading();
            
            // Get question
            const question = this.elements.questionInput.value.trim();
            
            // Simulate shuffling delay
            await this.simulateShuffling();
            
            // Draw cards
            const drawnCards = await this.processor.drawCards(TAROT_CONFIG.EXPANDED_CARDS, question);
            
            // Create and display cards
            this.displayCards(drawnCards);
            
            // Setup card flip handlers
            this.setupCardFlipHandlers(question);
            
        } catch (error) {
            console.error('Error during card draw:', error);
            this.showError('An error occurred while drawing cards. Please try again.');
        } finally {
            // Reset button state
            this.buttonStateManager.setShuffling(false);
            this.processor.setDrawing(false);
            this.updateDrawButtonState();
        }
    }

    clearPreviousReading() {
        // Clear cards
        this.cardAnimationController.clearCards();
        
        // Hide interpretation
        this.elements.interpretation.classList.add('hidden');
        this.elements.interpretationText.textContent = '';
        
        // Reset counters
        this.flippedCardsCount = 0;
    }

    async simulateShuffling() {
        return new Promise(resolve => {
            setTimeout(resolve, TAROT_CONFIG.UI.SHUFFLING_DURATION);
        });
    }

    async displayCards(cards) {
        cards.forEach((card, index) => {
            // Delay card appearance for staggered effect
            setTimeout(() => {
					this.cardAnimationController.createCard(
                    card, 
                    index, 
                    (cardElement, cardIndex) => this.handleCardClick(cardElement, cardIndex)
                );
            }, index * TAROT_CONFIG.UI.CARD_ANIMATION_DELAY);
        });
    }

    setupCardFlipHandlers(question) {
        // Setup callbacks for when cards are flipped
        for (let i = 0; i < TAROT_CONFIG.UI.CARD_COUNT; i++) {
            this.cardAnimationController.onCardFlipped(i, () => {
                this.handleCardFlipped(question);
            });
        }
    }

    handleCardClick(cardElement, cardIndex) {
        // Attempt to flip the card
        const wasFlipped = this.cardAnimationController.flipCard(cardElement, cardIndex);
        
        if (wasFlipped) {
            // Play flip sound effect (if available)
            this.playFlipSound();
        }
    }

    async handleCardFlipped(question) {
        this.flippedCardsCount++;
        
        // Check if all cards are flipped
        if (this.flippedCardsCount >= TAROT_CONFIG.UI.CARD_COUNT) {
            // Small delay before showing interpretation
            setTimeout(() => {
                this.showInterpretation(question);
            }, TAROT_CONFIG.UI.INTERPRETATION_REVEAL_DELAY);
        }
    }

    async showInterpretation(question) {
        try {
            // Generate interpretation
 /*           const interpretation = this.processor.generateInterpretation(
                question,
                TAROT_CONFIG.CARD_MEANINGS
            );*/
			const interpretation = await this.processor.generateInterpretation(
                question
            );	
            // Display interpretation
			this.elements.interpretationText.style.whiteSpace = "pre-line";
            this.elements.interpretationText.textContent = interpretation;
            this.elements.interpretation.classList.remove('hidden');
            
            // Scroll to interpretation
            this.scrollToInterpretation();
            
        } catch (error) {
            console.error('Error generating interpretation:', error);
            this.showError('An error occurred while generating the interpretation.');
        }
    }

    scrollToInterpretation() {
        setTimeout(() => {
            this.elements.interpretation.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 100);
    }

    playFlipSound() {
        // Optional: implement sound effects
        // This could be expanded to include audio feedback
        try {
            // Create a simple audio context for a flip sound
            if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
                const audioContext = new (AudioContext || webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            }
        } catch (error) {
            // Silently fail if audio context is not available
        }
    }

    showError(message) {
        // Simple error display - could be enhanced with a modal or toast
        alert(message);
    }

    // Public API methods
    reset() {
        this.elements.questionInput.value = '';
        this.characterCounter.updateCounter();
        this.clearPreviousReading();
        this.updateDrawButtonState();
    }

    getLastReading() {
        return {
            cards: this.processor.getDrawnCards(),
            interpretation: this.elements.interpretationText.textContent
        };
    }
}

// Application State Manager
class ApplicationStateManager {
    constructor() {
        this.history = [];
        this.maxHistorySize = 10;
    }

    saveReading(question, cards, interpretation) {
        const reading = {
            timestamp: new Date().toISOString(),
            question: question,
            cards: cards.map(card => ({
                name: card.name,
                meaning: card.meaning,
                icon: card.icon
            })),
            interpretation: interpretation
        };

        this.history.unshift(reading);
        
        // Limit history size
        if (this.history.length > this.maxHistorySize) {
            this.history = this.history.slice(0, this.maxHistorySize);
        }

        // Save to localStorage if available (note: not available in Claude artifacts)
        try {
            localStorage.setItem('tarotHistory', JSON.stringify(this.history));
        } catch (error) {
            // Silently fail if localStorage is not available
        }
    }

    getHistory() {
        return [...this.history];
    }

    clearHistory() {
        this.history = [];
        try {
            localStorage.removeItem('tarotHistory');
        } catch (error) {
            // Silently fail if localStorage is not available
        }
    }

    loadHistory() {
        try {
            const saved = localStorage.getItem('tarotHistory');
            if (saved) {
                this.history = JSON.parse(saved);
            }
        } catch (error) {
            // Silently fail if localStorage is not available
            this.history = [];
        }
    }
}

// Global application instance
let tarotApp = null;
let stateManager = null;

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    tarotApp = new TarotApplication();
    stateManager = new ApplicationStateManager();
    stateManager.loadHistory();
});

// Global functions for external access
window.resetTarotApp = function() {
    if (tarotApp) {
        tarotApp.reset();
    }
};

window.getTarotHistory = function() {
    if (stateManager) {
        return stateManager.getHistory();
    }
    return [];
};

window.clearTarotHistory = function() {
    if (stateManager) {
        stateManager.clearHistory();
    }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TarotApplication, ApplicationStateManager };
}