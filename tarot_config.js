// Tarot System Configuration Layer
// Contains all data definitions, constants, and configuration

const TAROT_CONFIG = {
  UI: {
    MAX_CHAR_LIMIT: 20000,
    CARD_COUNT: 3,
    SHUFFLING_DURATION: 2000,
    CARD_ANIMATION_DELAY: 300,
    FLIP_TRANSITION_DELAY: 600,
    INTERPRETATION_REVEAL_DELAY: 500
  },
  EXPANDED_CARDS: [
  {
    "name": "The Fool",
    "icon": "🤡",
    "meaning": [
      "A leap of faith into the unknown.",
      "Innocence and fresh beginnings.",
      "Embracing spontaneity.",
      "Boundless potential awaits.",
      "Freedom from past constraints.",
      "Optimism guides your journey.",
      "A call to adventure.",
      "Trusting the universe.",
      "Unplanned opportunities arise.",
      "Letting go of fear."
    ],
    "template": [
      "This card is often drawn at the beginning of a sequence.",
      "A sign that adventure awaits if you dare to begin.",
      "The Fool invites you to take a leap of faith.",
      "Now is the time to embrace new opportunities fearlessly.",
      "Let go of expectations and trust the journey ahead.",
      "Approach life with curiosity and an open mind.",
      "Release your worries and step into the unknown.",
      "Allow yourself to explore without judgment.",
      "A fresh start is within reach—embrace it wholeheartedly.",
      "Follow your instincts and see where they lead you."
    ]
  },
  {
    "name": "The Magician",
    "icon": "🪄",
    "meaning": [
      "Manifesting your desires.",
      "Harnessing personal power.",
      "Resourcefulness and skill.",
      "Turning ideas into reality.",
      "Action and initiative.",
      "Creativity at its peak.",
      "Alignment of mind and will.",
      "Making things happen.",
      "Focused intention.",
      "Mastery over your environment."
    ],
    "template": [
      "Channel your energy into creation.",
      "You have the power to shape your reality.",
      "Manifest your intentions—now is the time to act.",
      "Trust in your abilities and take initiative.",
      "Your skills will lead you to success.",
      "A new project is ready to begin.",
      "Focus your will and see what unfolds.",
      "Use your resources wisely.",
      "A breakthrough is at hand.",
      "Let your talents shine."
    ]
  },
  {
    "name": "The High Priestess",
    "icon": "🔮",
    "meaning": [
      "Trusting your intuition.",
      "Secrets and mysteries.",
      "Inner wisdom revealed.",
      "Listening to your subconscious.",
      "The power of silence.",
      "Hidden knowledge.",
      "Spiritual insight.",
      "Patience and reflection.",
      "The unknown influences events.",
      "Letting answers emerge naturally."
    ],
    "template": [
      "Let your subconscious guide your next step.",
      "A time for inner reflection and listening.",
      "Seek answers within.",
      "Trust your instincts in this situation.",
      "The truth may be hidden for now.",
      "Patience will reveal what you seek.",
      "Look beyond the surface.",
      "Embrace the mystery.",
      "Your intuition is your strongest guide.",
      "Allow silence to speak volumes."
    ]
  },
  {
    "name": "The Empress",
    "icon": "🌸",
    "meaning": [
      "Abundance and nurturing.",
      "Creativity flourishes.",
      "Fertility and growth.",
      "Motherly energy.",
      "Comfort and support.",
      "Connection to nature.",
      "Prosperity surrounds you.",
      "Sensuality and beauty.",
      "Caring for yourself and others.",
      "Manifesting with love."
    ],
    "template": [
      "Nurture your ideas and watch them grow.",
      "Embrace your creative power.",
      "Allow abundance to flow into your life.",
      "Care for yourself and others.",
      "Let your compassion guide your actions.",
      "Connect with nature for inspiration.",
      "A time for growth and renewal.",
      "Express love freely.",
      "Celebrate life's richness.",
      "Support and kindness will be rewarded."
    ]
  },
  {
    "name": "The Emperor",
    "icon": "🦁",
    "meaning": [
      "Authority and structure.",
      "Leadership and control.",
      "Setting boundaries.",
      "Stability and order.",
      "Fatherly protection.",
      "Strategic planning.",
      "Discipline brings success.",
      "Assertive action.",
      "Building a solid foundation.",
      "Guidance through strength."
    ],
    "template": [
      "Take charge of your circumstances.",
      "Assert your authority wisely.",
      "Structure brings clarity.",
      "Lead with strength and confidence.",
      "Set firm boundaries.",
      "Plan carefully for long-term success.",
      "Stability is within reach.",
      "Your leadership is needed now.",
      "Protect your interests.",
      "Act decisively and with integrity."
    ]
  },
  {
    "name": "The Hierophant",
    "icon": "📿",
    "meaning": [
      "Tradition and wisdom guide you.",
      "Seek advice from a mentor.",
      "Spiritual learning is emphasized.",
      "Conformity may be beneficial.",
      "Honor established values.",
      "Community and belonging are important.",
      "Rituals and ceremonies hold meaning.",
      "Education and study are favored.",
      "Respect established systems.",
      "Find comfort in shared beliefs."
    ],
    "template": [
      "Look to tradition for answers.",
      "Seek guidance from a trusted source.",
      "Follow established paths.",
      "Honor your spiritual heritage.",
      "Participate in community rituals.",
      "Embrace shared wisdom.",
      "Learn from those who came before.",
      "Respect the rules.",
      "Find meaning in ceremony.",
      "Connect with your spiritual community."
    ]
  },
  {
    "name": "The Lovers",
    "icon": "💞",
    "meaning": [
      "Love and harmony are present.",
      "A significant relationship is highlighted.",
      "Choices must be made from the heart.",
      "Union and partnership are possible.",
      "Balance your desires and values.",
      "Commitment is important now.",
      "Attraction and passion are strong.",
      "Trust in your connections.",
      "Emotional bonds deepen.",
      "Shared values bring unity."
    ],
    "template": [
      "Let love guide your decision.",
      "A meaningful connection is forming.",
      "Choose with your heart.",
      "Partnership brings fulfillment.",
      "Balance passion and reason.",
      "Commit to what matters most.",
      "Celebrate harmony in relationships.",
      "Trust in shared values.",
      "Open your heart to love.",
      "Union brings strength."
    ]
  },
  {
    "name": "The Chariot",
    "icon": "🚗",
    "meaning": [
      "Victory is within reach.",
      "Harness your willpower.",
      "Stay focused on your goals.",
      "Overcome obstacles with determination.",
      "Control opposing forces.",
      "Success through discipline.",
      "Movement and progress are indicated.",
      "Stay on course.",
      "Drive forward with confidence.",
      "Triumph over adversity."
    ],
    "template": [
      "Charge ahead with determination.",
      "Stay focused and disciplined.",
      "Victory is close at hand.",
      "Overcome challenges with willpower.",
      "Maintain control amidst chaos.",
      "Progress is happening quickly.",
      "Stay the course.",
      "Let your ambition lead.",
      "Push through obstacles.",
      "Success is yours if you persist."
    ]
  },
  {
    "name": "Strength",
    "icon": "🦄",
    "meaning": [
      "Inner strength and courage are required.",
      "Gentle power overcomes force.",
      "Compassion is your greatest asset.",
      "Tame your inner beasts.",
      "Resilience in the face of adversity.",
      "Patience brings results.",
      "Confidence grows from within.",
      "Embrace vulnerability as strength.",
      "Kindness conquers all.",
      "You have the power to endure."
    ],
    "template": [
      "Lead with compassion and courage.",
      "Your inner strength is shining.",
      "Gentle persistence wins the day.",
      "Face challenges with grace.",
      "Patience is your ally.",
      "Embrace your power.",
      "Kindness is your strength.",
      "Overcome fear with love.",
      "Resilience will see you through.",
      "Trust in your ability to endure."
    ]
  },
  {
    "name": "The Hermit",
    "icon": "🕯️",
    "meaning": [
      "Seek solitude for reflection.",
      "Inner guidance is available.",
      "A time for introspection.",
      "Withdraw to gain perspective.",
      "Wisdom comes from within.",
      "Contemplate your path.",
      "Personal growth through solitude.",
      "Listen to your inner voice.",
      "Spiritual enlightenment is near.",
      "Pause before proceeding."
    ],
    "template": [
      "Take time for self-reflection.",
      "Seek answers within.",
      "Solitude brings clarity.",
      "Pause and contemplate your journey.",
      "Let your inner light guide you.",
      "Withdraw to recharge.",
      "Embrace quiet wisdom.",
      "Trust your inner guidance.",
      "A period of introspection is needed.",
      "Listen to your soul's calling."
    ]
  },
  {
    "name": "Wheel of Fortune",
    "icon": "🎡",
    "meaning": [
      "Change is inevitable.",
      "Cycles of fate are turning.",
      "Expect the unexpected.",
      "Luck is on your side.",
      "Embrace new opportunities.",
      "Karma is at play.",
      "A turning point approaches.",
      "Go with the flow.",
      "Fortune favors the bold.",
      "Destiny is unfolding."
    ],
    "template": [
      "Embrace the cycles of change.",
      "A turning point is near.",
      "Luck is shifting in your favor.",
      "Go with the flow of life.",
      "Expect surprises.",
      "Karma is influencing events.",
      "Adapt to changing circumstances.",
      "Fate is at work.",
      "Be open to new possibilities.",
      "Trust in the process."
    ]
  },
  {
    "name": "Justice",
    "icon": "⚖️",
    "meaning": [
      "Fairness and truth are central.",
      "Balance your actions and decisions.",
      "Accountability is required.",
      "Legal matters may arise.",
      "Seek harmony and equilibrium.",
      "Ethical choices are important.",
      "Cause and effect are at play.",
      "Honesty leads to resolution.",
      "Weigh all sides carefully.",
      "Justice will prevail."
    ],
    "template": [
      "Seek balance and fairness.",
      "Make decisions with integrity.",
      "Weigh your options carefully.",
      "Justice will be served.",
      "Act with honesty and truth.",
      "Find equilibrium in your actions.",
      "Accountability brings resolution.",
      "Consider the consequences.",
      "Harmony is within reach.",
      "Let truth guide your choices."
    ]
  },
  {
    "name": "The Hanged Man",
    "icon": "🙃",
    "meaning": [
      "Pause and surrender to the moment.",
      "See things from a new perspective.",
      "Let go of control.",
      "Sacrifice may be necessary.",
      "Release old patterns.",
      "Embrace stillness.",
      "Transformation through letting go.",
      "Patience is required.",
      "A time for contemplation.",
      "Allow change to happen naturally."
    ],
    "template": [
      "Surrender to the present.",
      "Look at things differently.",
      "Let go of the need for control.",
      "Pause and reflect.",
      "Sacrifice brings growth.",
      "Be patient with yourself.",
      "Transformation is unfolding.",
      "Embrace a new viewpoint.",
      "Allow events to unfold.",
      "Trust in the process of change."
    ]
  },
  {
    "name": "Death",
    "icon": "🦋",
    "meaning": [
      "Transformation is at hand.",
      "Endings make way for new beginnings.",
      "Release what no longer serves you.",
      "Embrace change and renewal.",
      "Let go of the past.",
      "Rebirth is possible.",
      "A cycle is completing.",
      "Personal growth through transition.",
      "Accept impermanence.",
      "New life emerges from endings."
    ],
    "template": [
      "Embrace transformation.",
      "Let go to allow new growth.",
      "Endings bring new opportunities.",
      "Release the old to welcome the new.",
      "Change is necessary for progress.",
      "Rebirth is on the horizon.",
      "Trust the process of renewal.",
      "Allow yourself to evolve.",
      "Accept the impermanence of life.",
      "Transformation leads to freedom."
    ]
  },
  {
    "name": "Temperance",
    "icon": "🧘",
    "meaning": [
      "Balance and moderation are key.",
      "Practice patience in all things.",
      "Blend different aspects harmoniously.",
      "Seek inner peace.",
      "Find the middle path.",
      "Healing is taking place.",
      "Adapt to circumstances gracefully.",
      "Cooperation brings success.",
      "Harmony in relationships is possible.",
      "Integrate opposing forces."
    ],
    "template": [
      "Strive for balance in your life.",
      "Practice moderation.",
      "Blend your strengths and weaknesses.",
      "Patience will be rewarded.",
      "Seek harmony in your actions.",
      "Healing energy surrounds you.",
      "Cooperate with others for best results.",
      "Adapt with grace.",
      "Find peace within.",
      "Integrate all parts of yourself."
    ]
  },
  {
    "name": "The Devil",
    "icon": "🐍",
    "meaning": [
      "Beware of temptation and addiction.",
      "Face your shadow self.",
      "Break free from unhealthy patterns.",
      "Material desires may be strong.",
      "Examine what binds you.",
      "Confront fears and limitations.",
      "Release negative influences.",
      "Take responsibility for your choices.",
      "Liberation is possible.",
      "Awareness brings freedom."
    ],
    "template": [
      "Confront your shadow side.",
      "Break free from what holds you back.",
      "Beware of unhealthy attachments.",
      "Face your fears honestly.",
      "Release negative patterns.",
      "Take responsibility for your actions.",
      "Freedom comes from awareness.",
      "Examine your desires.",
      "Let go of self-imposed chains.",
      "Transformation is possible through honesty."
    ]
  },
  {
    "name": "The Tower",
    "icon": "🌩️",
    "meaning": [
      "Sudden change disrupts the status quo.",
      "Expect upheaval and revelation.",
      "Old structures are falling away.",
      "Truth comes to light.",
      "Release attachment to stability.",
      "A wake-up call is at hand.",
      "Transformation through chaos.",
      "Embrace the unexpected.",
      "Rebuild on a stronger foundation.",
      "Growth follows disruption."
    ],
    "template": [
      "Prepare for sudden change.",
      "Embrace the chaos as opportunity.",
      "Let go of what no longer serves.",
      "Truth will be revealed.",
      "Transformation is inevitable.",
      "Rebuild with new insight.",
      "Release attachment to the old.",
      "Growth comes from disruption.",
      "A wake-up call is here.",
      "Expect the unexpected."
    ]
  },
  {
    "name": "The Star",
    "icon": "🌟",
    "meaning": [
      "Hope and inspiration guide you.",
      "Renew your faith in the future.",
      "Healing energy is present.",
      "Dream big and believe.",
      "Rejuvenation is possible.",
      "Spiritual guidance is available.",
      "Shine your light brightly.",
      "Optimism brings results.",
      "Trust in your path.",
      "A wish may come true."
    ],
    "template": [
      "Let hope be your guide.",
      "Renew your sense of purpose.",
      "Healing is taking place.",
      "Dream big and trust the process.",
      "Spiritual guidance is near.",
      "Shine your inner light.",
      "Optimism will carry you forward.",
      "Trust in your journey.",
      "A wish is within reach.",
      "Inspiration leads to success."
    ]
  },
  {
    "name": "The Moon",
    "icon": "🌙",
    "meaning": [
      "Intuition and dreams are powerful.",
      "Illusion and confusion may be present.",
      "Trust your instincts.",
      "Not all is as it seems.",
      "Emotions run deep.",
      "Hidden truths may surface.",
      "Navigate uncertainty with care.",
      "Pay attention to your subconscious.",
      "Let go of fear of the unknown.",
      "Mystery surrounds this situation."
    ],
    "template": [
      "Trust your intuition.",
      "Navigate uncertainty with care.",
      "Not everything is clear right now.",
      "Listen to your dreams.",
      "Let go of fear and trust the process.",
      "Hidden truths will emerge.",
      "Embrace the mystery.",
      "Allow your subconscious to guide you.",
      "Be gentle with yourself.",
      "Clarity will come in time."
    ]
  },
  {
    "name": "The Sun",
    "icon": "🌞",
    "meaning": [
      "Joy and success are yours.",
      "Happiness and fulfillment abound.",
      "Clarity and positivity shine through.",
      "Celebrate your achievements.",
      "Vitality and energy are high.",
      "Optimism is rewarded.",
      "Growth and abundance are present.",
      "Confidence leads to success.",
      "Radiate your true self.",
      "Good fortune is on your side."
    ],
    "template": [
      "Celebrate your successes.",
      "Let your light shine.",
      "Joy is your companion.",
      "Optimism brings rewards.",
      "Happiness is within reach.",
      "Radiate positivity.",
      "Embrace your vitality.",
      "Clarity is yours.",
      "Abundance is flowing.",
      "Confidence leads to achievement."
    ]
  },
  {
    "name": "Judgement",
    "icon": "🎺",
    "meaning": [
      "A time for reflection and renewal.",
      "Embrace transformation and rebirth.",
      "Let go of past judgments.",
      "Answer your inner calling.",
      "Awaken to new possibilities.",
      "Forgiveness brings freedom.",
      "Clarity comes after confusion.",
      "Reevaluate your choices.",
      "A new chapter is beginning.",
      "Release old patterns."
    ],
    "template": [
      "Reflect on your journey.",
      "Embrace renewal and transformation.",
      "Let go of the past.",
      "Answer your soul's call.",
      "Forgiveness brings liberation.",
      "Awaken to new possibilities.",
      "Clarity is emerging.",
      "Begin a new chapter.",
      "Release judgment and embrace growth.",
      "Transformation is at hand."
    ]
  },
  {
    "name": "The World",
    "icon": "🌍",
    "meaning": [
      "Completion and fulfillment are here.",
      "Celebrate your achievements.",
      "A cycle is ending successfully.",
      "Wholeness and harmony abound.",
      "Integration of lessons learned.",
      "Travel and expansion are possible.",
      "You are exactly where you need to be.",
      "Success is assured.",
      "Embrace your place in the world.",
      "New beginnings await after completion."
    ],
    "template": [
      "Celebrate your accomplishments.",
      "A cycle is complete.",
      "Wholeness is within reach.",
      "Embrace harmony and integration.",
      "Travel or expansion may occur.",
      "Success is yours.",
      "You are exactly where you belong.",
      "New opportunities follow completion.",
      "Reflect on your journey.",
      "Enjoy the sense of fulfillment."
    ]
  },
  
  {
    "name": "Ace of Wands",
    "icon": "🔥",
    "meaning": [
      "A burst of creative energy.",
      "New beginnings in passion.",
      "Inspiration strikes.",
      "A project is ignited.",
      "Personal growth is possible.",
      "Taking bold action.",
      "Excitement for what's ahead.",
      "Seizing opportunity.",
      "Enthusiasm fuels progress.",
      "Unleashing potential."
    ],
    "template": [
      "Act on your inspiration.",
      "Start something new with passion.",
      "Let your creativity lead.",
      "A new adventure awaits.",
      "Embrace bold ideas.",
      "Ignite your motivation.",
      "Begin with confidence.",
      "Trust your instincts.",
      "Energy is high—use it well.",
      "Innovation brings rewards."
    ]
  },
  {
    "name": "Two of Wands",
    "icon": "🗺️",
    "meaning": [
      "Planning for the future.",
      "Making decisions about your path.",
      "Expansion and exploration.",
      "Consider your options.",
      "Partnerships may be important.",
      "Take the long view.",
      "Step outside your comfort zone.",
      "Vision and ambition are strong.",
      "Preparation leads to success.",
      "Balance risk and reward."
    ],
    "template": [
      "Plan your next move carefully.",
      "Explore new possibilities.",
      "Consider your options before acting.",
      "Partnerships can help you grow.",
      "Look to the future with vision.",
      "Expand your horizons.",
      "Ambition leads to progress.",
      "Balance risk with preparation.",
      "Step boldly into new territory.",
      "Preparation is key to success."
    ]
  },
  {
    "name": "Three of Wands",
    "icon": "🌄",
    "meaning": [
      "Your efforts are beginning to pay off.",
      "Expansion and progress are evident.",
      "Look ahead with optimism.",
      "Opportunities are on the horizon.",
      "Collaboration brings rewards.",
      "Growth is happening.",
      "Anticipate positive outcomes.",
      "Your plans are taking shape.",
      "Travel or movement may occur.",
      "Success is within reach."
    ],
    "template": [
      "Anticipate positive results.",
      "Your plans are unfolding.",
      "Look to the future with hope.",
      "Collaboration is beneficial.",
      "Growth is underway.",
      "Success is on the horizon.",
      "Progress is evident.",
      "Travel may be involved.",
      "Celebrate your achievements.",
      "Keep moving forward."
    ]
  },
  {
    "name": "Four of Wands",
    "icon": "🏡",
    "meaning": [
      "Celebration and harmony at home.",
      "Milestones are reached.",
      "Community and support surround you.",
      "Joyful gatherings take place.",
      "Stability and security are present.",
      "Success is shared with others.",
      "A sense of belonging is strong.",
      "Completion of a phase.",
      "Happiness in relationships.",
      "Welcoming energy abounds."
    ],
    "template": [
      "Celebrate your achievements.",
      "Enjoy time with loved ones.",
      "Harmony is present at home.",
      "Milestones are reached.",
      "Community brings support.",
      "Share your joy.",
      "Stability is yours.",
      "Welcome new beginnings.",
      "Happiness is shared.",
      "Completion brings satisfaction."
    ]
  },
  {
    "name": "Five of Wands",
    "icon": "🥊",
    "meaning": [
      "Competition and conflict arise.",
      "Challenges test your resolve.",
      "Differences of opinion are present.",
      "Creative tension can be productive.",
      "Stand up for your beliefs.",
      "Energy is scattered.",
      "Find common ground.",
      "Healthy rivalry can motivate.",
      "Strive for cooperation.",
      "Growth comes from challenge."
    ],
    "template": [
      "Face challenges head-on.",
      "Competition can be healthy.",
      "Find ways to cooperate.",
      "Stand your ground.",
      "Creative tension leads to growth.",
      "Resolve differences peacefully.",
      "Channel energy productively.",
      "Strive for understanding.",
      "Conflict can bring clarity.",
      "Embrace the challenge."
    ]
  },
  {
    "name": "Six of Wands",
    "icon": "🏆",
    "meaning": [
      "Victory and recognition are yours.",
      "Success is celebrated.",
      "Your efforts are acknowledged.",
      "Confidence is rewarded.",
      "Leadership shines.",
      "Public acclaim is possible.",
      "Enjoy your achievements.",
      "Support from others is strong.",
      "Progress is visible.",
      "Triumph over adversity."
    ],
    "template": [
      "Celebrate your victory.",
      "Recognition is coming.",
      "Confidence leads to success.",
      "Your efforts are noticed.",
      "Leadership is rewarded.",
      "Enjoy public acclaim.",
      "Support is strong.",
      "Progress is evident.",
      "Triumph over obstacles.",
      "Achievements are celebrated."
    ]
  },
  {
    "name": "Seven of Wands",
    "icon": "🛡️",
    "meaning": [
      "Defend your position.",
      "Perseverance is needed.",
      "Stand your ground.",
      "Overcome opposition.",
      "Courage in the face of adversity.",
      "Assert your beliefs.",
      "Challenges test your resolve.",
      "Stay true to your values.",
      "Victory through persistence.",
      "Hold your ground."
    ],
    "template": [
      "Stand firm in your convictions.",
      "Perseverance brings victory.",
      "Defend your beliefs.",
      "Overcome opposition.",
      "Courage is needed now.",
      "Stay true to yourself.",
      "Persistence pays off.",
      "Face challenges bravely.",
      "Hold your ground.",
      "Victory comes through effort."
    ]
  },
  {
    "name": "Eight of Wands",
    "icon": "💨",
    "meaning": [
      "Swift movement and progress.",
      "Events are unfolding quickly.",
      "Communication is rapid.",
      "Travel may occur.",
      "Momentum is building.",
      "Decisions are made swiftly.",
      "Opportunities come fast.",
      "Stay alert for changes.",
      "Action is required.",
      "Success is within reach."
    ],
    "template": [
      "Act quickly on opportunities.",
      "Momentum is on your side.",
      "Communication is key.",
      "Travel may be involved.",
      "Events are moving fast.",
      "Stay alert for changes.",
      "Progress is rapid.",
      "Decisions come quickly.",
      "Action brings results.",
      "Success is near."
    ]
  },
  {
    "name": "Nine of Wands",
    "icon": "🦾",
    "meaning": [
      "Resilience in the face of adversity.",
      "Perseverance is required.",
      "You are close to your goal.",
      "Defend your position.",
      "Strength through struggle.",
      "Prepare for the final push.",
      "Boundaries are important.",
      "Learn from past challenges.",
      "Stay vigilant.",
      "Endurance is rewarded."
    ],
    "template": [
      "Persevere through challenges.",
      "You are almost there.",
      "Defend your progress.",
      "Resilience leads to success.",
      "Stay strong.",
      "Prepare for the final effort.",
      "Boundaries protect you.",
      "Learn from experience.",
      "Stay vigilant.",
      "Endurance is key."
    ]
  },
  {
    "name": "Ten of Wands",
    "icon": "🧱",
    "meaning": [
      "Burdens and responsibilities weigh heavy.",
      "You may feel overwhelmed.",
      "Hard work is taking its toll.",
      "Delegate tasks where possible.",
      "Release what you no longer need.",
      "Completion is near.",
      "Seek support from others.",
      "Rest is needed.",
      "Prioritize your well-being.",
      "The end of a cycle is in sight."
    ],
    "template": [
      "Release unnecessary burdens.",
      "Delegate where possible.",
      "Completion is near.",
      "Rest and recharge.",
      "Seek support.",
      "Prioritize your health.",
      "Let go of what weighs you down.",
      "The end is in sight.",
      "Celebrate your perseverance.",
      "Hard work pays off."
    ]
  },
  {
    "name": "Page of Wands",
    "icon": "🦎",
    "meaning": [
      "Curiosity and enthusiasm lead the way.",
      "A new adventure is beginning.",
      "Creative ideas are blossoming.",
      "Embrace your youthful spirit.",
      "Messages may arrive soon.",
      "Explore new possibilities.",
      "Be open to inspiration.",
      "Take a bold first step.",
      "Energy and excitement abound.",
      "Initiate new projects."
    ],
    "template": [
      "Explore new ideas.",
      "Embrace your curiosity.",
      "A new adventure is starting.",
      "Let enthusiasm guide you.",
      "Messages bring opportunities.",
      "Be open to inspiration.",
      "Take the first step.",
      "Energy is high.",
      "Start something creative.",
      "Initiate bold projects."
    ]
  },
  {
    "name": "Knight of Wands",
    "icon": "🏇",
    "meaning": [
      "Action and adventure await.",
      "Pursue your passions.",
      "Embrace bold moves.",
      "Travel or movement is likely.",
      "Confidence leads to progress.",
      "Impulsiveness may arise.",
      "Excitement is in the air.",
      "Take risks for growth.",
      "Dynamic energy propels you.",
      "Be courageous in your pursuits."
    ],
    "template": [
      "Take bold action.",
      "Pursue your passions.",
      "Adventure is calling.",
      "Travel may be involved.",
      "Confidence brings progress.",
      "Be mindful of impulsiveness.",
      "Embrace excitement.",
      "Take risks for growth.",
      "Dynamic energy is present.",
      "Be courageous."
    ]
  },
  {
    "name": "Queen of Wands",
    "icon": "🦁",
    "meaning": [
      "Confidence and charisma shine.",
      "Lead with passion.",
      "Creativity is at its peak.",
      "Inspire others by example.",
      "Warmth and generosity abound.",
      "Courage in leadership.",
      "Magnetism attracts success.",
      "Express yourself boldly.",
      "Support others with kindness.",
      "Embody your true self."
    ],
    "template": [
      "Lead with confidence.",
      "Inspire through action.",
      "Creativity is your strength.",
      "Express yourself boldly.",
      "Warmth attracts success.",
      "Courage is rewarded.",
      "Support others.",
      "Be true to yourself.",
      "Generosity brings rewards.",
      "Shine your light."
    ]
  },
  {
    "name": "King of Wands",
    "icon": "🦅",
    "meaning": [
      "Visionary leadership is needed.",
      "Inspire others with your ideas.",
      "Take decisive action.",
      "Confidence leads to achievement.",
      "Passion fuels your goals.",
      "Lead by example.",
      "Strategic thinking brings success.",
      "Embody authority and wisdom.",
      "Encourage innovation.",
      "Empower those around you."
    ],
    "template": [
      "Lead with vision.",
      "Inspire others.",
      "Take decisive action.",
      "Confidence is your ally.",
      "Passion drives success.",
      "Set an example.",
      "Think strategically.",
      "Embody wisdom.",
      "Encourage innovation.",
      "Empower your team."
    ]
  },
  
  {
    "name": "Ace of Cups",
    "icon": "🕊️",
    "meaning": [
      "New emotional beginnings.",
      "Love and compassion flow freely.",
      "Open your heart to new experiences.",
      "Emotional healing is present.",
      "Creative inspiration abounds.",
      "Intuition is heightened.",
      "Spiritual connection is strong.",
      "Joy and fulfillment are possible.",
      "Let feelings guide you.",
      "Start a new relationship."
    ],
    "template": [
      "Open your heart.",
      "Embrace new emotions.",
      "Love flows freely.",
      "Healing is present.",
      "Creativity is strong.",
      "Intuition guides you.",
      "Spiritual connection is deep.",
      "Joy is within reach.",
      "Let feelings lead.",
      "New relationships begin."
    ]
  },
  {
    "name": "Two of Cups",
    "icon": "💑",
    "meaning": [
      "Partnership and unity.",
      "Mutual attraction.",
      "A deepening relationship.",
      "Harmony in love.",
      "Emotional balance.",
      "Coming together.",
      "Shared feelings.",
      "Connection is strong.",
      "Romantic or platonic bond.",
      "Union of opposites."
    ],
    "template": [
      "Celebrate partnership.",
      "A meaningful connection forms.",
      "Share your feelings.",
      "Harmony is present.",
      "Mutual respect grows.",
      "Union brings strength.",
      "Balance emotions together.",
      "Deepen your bond.",
      "Trust in your connection.",
      "Love and friendship unite."
    ]
  },
  {
    "name": "Three of Cups",
    "icon": "🍾",
    "meaning": [
      "Celebration with friends.",
      "Joyful gatherings.",
      "Supportive community.",
      "Shared happiness.",
      "Reunions and parties.",
      "Emotional abundance.",
      "Friendship flourishes.",
      "Good news is shared.",
      "Collective success.",
      "Cherish your connections."
    ],
    "template": [
      "Celebrate with friends.",
      "Enjoy a joyful gathering.",
      "Community brings happiness.",
      "Share your successes.",
      "Reunite with loved ones.",
      "Embrace emotional abundance.",
      "Friendship is highlighted.",
      "Good news is coming.",
      "Support is all around you.",
      "Cherish your relationships."
    ]
  },
  {
    "name": "Four of Cups",
    "icon": "🛋️",
    "meaning": [
      "Contemplation and reevaluation.",
      "Apathy or boredom.",
      "Missing opportunities.",
      "Emotional withdrawal.",
      "Need for introspection.",
      "Dissatisfaction with current options.",
      "Time to look within.",
      "Disconnection from others.",
      "A chance for renewal.",
      "Pause before making decisions."
    ],
    "template": [
      "Reflect on your feelings.",
      "Take time for introspection.",
      "Don't overlook opportunities.",
      "Reevaluate your options.",
      "Emotional withdrawal may be present.",
      "Seek renewal within.",
      "Avoid apathy.",
      "Reconnect with your emotions.",
      "Pause before acting.",
      "Look for hidden blessings."
    ]
  },
  {
    "name": "Five of Cups",
    "icon": "🥀",
    "meaning": [
      "Loss and regret.",
      "Focusing on the negative.",
      "Disappointment in outcomes.",
      "Grieving what is gone.",
      "Emotional setbacks.",
      "Letting go of sorrow.",
      "Learning from mistakes.",
      "Hope remains despite loss.",
      "Forgiveness is possible.",
      "Healing from heartbreak."
    ],
    "template": [
      "Release past disappointments.",
      "Focus on what remains.",
      "Allow yourself to grieve.",
      "Learn from mistakes.",
      "Hope is still present.",
      "Forgive yourself and others.",
      "Healing is underway.",
      "Let go of regret.",
      "Embrace the lessons of loss.",
      "Find strength in adversity."
    ]
  },
  {
    "name": "Six of Cups",
    "icon": "🧸",
    "meaning": [
      "Nostalgia and memories.",
      "Childhood innocence.",
      "Reconnecting with the past.",
      "Simple joys.",
      "Kindness and generosity.",
      "Healing old wounds.",
      "Family and roots.",
      "Reunion with old friends.",
      "Innocent love.",
      "Comfort in familiarity."
    ],
    "template": [
      "Reconnect with your past.",
      "Cherish simple joys.",
      "Nostalgia brings comfort.",
      "Heal old wounds.",
      "Show kindness to others.",
      "Family is important now.",
      "Reunite with old friends.",
      "Embrace innocence.",
      "Find comfort in familiarity.",
      "Reflect on happy memories."
    ]
  },
  {
    "name": "Seven of Cups",
    "icon": "🪞",
    "meaning": [
      "Many choices before you.",
      "Illusions and fantasies.",
      "Difficulty making decisions.",
      "Temptation to daydream.",
      "Beware of wishful thinking.",
      "Consider your options carefully.",
      "Not all that glitters is gold.",
      "Imagination runs wild.",
      "Clarity is needed.",
      "Potential for confusion."
    ],
    "template": [
      "Weigh your options carefully.",
      "Avoid wishful thinking.",
      "Seek clarity before choosing.",
      "Not all options are equal.",
      "Imagination is powerful.",
      "Beware of illusions.",
      "Don't get lost in fantasy.",
      "Make decisions with care.",
      "Clarity will come with time.",
      "Focus on what truly matters."
    ]
  },
  {
    "name": "Eight of Cups",
    "icon": "🚶‍♂️",
    "meaning": [
      "Walking away from the past.",
      "Seeking deeper meaning.",
      "Leaving behind what no longer serves.",
      "Emotional withdrawal.",
      "A journey of self-discovery.",
      "Letting go for growth.",
      "Moving on from disappointment.",
      "Pursuit of fulfillment.",
      "Turning your back on the old.",
      "A quest for truth."
    ],
    "template": [
      "Let go of what no longer serves.",
      "Seek deeper meaning.",
      "Move on from disappointment.",
      "Begin a journey of self-discovery.",
      "Embrace change for growth.",
      "Leave the past behind.",
      "Pursue fulfillment.",
      "Turn your back on the old.",
      "A quest for truth begins.",
      "Emotional renewal is possible."
    ]
  },
  {
    "name": "Nine of Cups",
    "icon": "🎉",
    "meaning": [
      "Wishes fulfilled.",
      "Contentment and satisfaction.",
      "Emotional abundance.",
      "Enjoying life's pleasures.",
      "Gratitude for blessings.",
      "Personal happiness.",
      "Success in relationships.",
      "Dreams coming true.",
      "Self-acceptance.",
      "Celebration of achievements."
    ],
    "template": [
      "Celebrate your achievements.",
      "Your wishes are coming true.",
      "Enjoy life's pleasures.",
      "Express gratitude.",
      "Emotional abundance is present.",
      "Personal happiness is yours.",
      "Success in relationships.",
      "Dreams are realized.",
      "Accept yourself fully.",
      "Savor your accomplishments."
    ]
  },
  {
    "name": "Ten of Cups",
    "icon": "🌈",
    "meaning": [
      "Harmony in relationships.",
      "Family happiness.",
      "Lasting fulfillment.",
      "Emotional bliss.",
      "Peace and contentment.",
      "Unity and togetherness.",
      "A sense of belonging.",
      "Shared joy.",
      "Stability in love.",
      "A happy ending."
    ],
    "template": [
      "Enjoy harmony in relationships.",
      "Celebrate family happiness.",
      "Lasting fulfillment is yours.",
      "Emotional bliss abounds.",
      "Peace and contentment are present.",
      "Unity brings joy.",
      "Cherish your sense of belonging.",
      "Share your happiness.",
      "Stability in love is here.",
      "A happy ending is near."
    ]
  },
  {
    "name": "Page of Cups",
    "icon": "🐟",
    "meaning": [
      "Creative inspiration.",
      "A message of love.",
      "New emotional experiences.",
      "Childlike wonder.",
      "Intuitive insights.",
      "Open-heartedness.",
      "Imagination flourishes.",
      "Gentle curiosity.",
      "A new crush or friendship.",
      "Expressing feelings freely."
    ],
    "template": [
      "Embrace creative inspiration.",
      "A message of love may arrive.",
      "Explore new emotions.",
      "Approach life with wonder.",
      "Trust your intuition.",
      "Keep your heart open.",
      "Let your imagination flow.",
      "Be gently curious.",
      "New friendships may form.",
      "Express your feelings."
    ]
  },
  {
    "name": "Knight of Cups",
    "icon": "🦢",
    "meaning": [
      "Romantic pursuit.",
      "Following your heart.",
      "Chasing dreams.",
      "Idealism in love.",
      "Creative journeys.",
      "Emotional offers.",
      "Imaginative adventures.",
      "Charm and grace.",
      "A quest for beauty.",
      "Sensitive and poetic energy."
    ],
    "template": [
      "Follow your heart's desires.",
      "Pursue romance or creativity.",
      "Chase your dreams.",
      "Let idealism inspire you.",
      "Embark on a creative journey.",
      "Offer your emotions freely.",
      "Seek beauty in all things.",
      "Be charming and graceful.",
      "Embrace adventure in love.",
      "Express your poetic side."
    ]
  },
  {
    "name": "Queen of Cups",
    "icon": "🧜‍♀️",
    "meaning": [
      "Emotional wisdom.",
      "Compassion and empathy.",
      "Nurturing energy.",
      "Intuitive understanding.",
      "Calm and gentle presence.",
      "Supportive relationships.",
      "Healing abilities.",
      "Deep sensitivity.",
      "Trust in your feelings.",
      "Creative imagination."
    ],
    "template": [
      "Lead with compassion.",
      "Trust your emotional wisdom.",
      "Offer support to others.",
      "Embrace your intuition.",
      "Be calm and gentle.",
      "Nurture relationships.",
      "Use your healing abilities.",
      "Honor your sensitivity.",
      "Trust your feelings.",
      "Let your imagination guide you."
    ]
  },
  {
    "name": "King of Cups",
    "icon": "🐬",
    "meaning": [
      "Emotional balance.",
      "Wise and compassionate leadership.",
      "Control over feelings.",
      "Diplomacy in relationships.",
      "Supportive guidance.",
      "Calm in turbulent times.",
      "Mature love.",
      "Empathy with strength.",
      "Healing influence.",
      "Mastery of emotions."
    ],
    "template": [
      "Lead with emotional balance.",
      "Offer wise guidance.",
      "Control your feelings.",
      "Practice diplomacy.",
      "Support others with compassion.",
      "Remain calm under pressure.",
      "Show mature love.",
      "Be empathetic and strong.",
      "Heal through understanding.",
      "Master your emotions."
    ]
  },
  
  {
    "name": "Ace of Swords",
    "icon": "🗡️",
    "meaning": [
      "Clarity of thought.",
      "Breakthrough ideas.",
      "Truth is revealed.",
      "Mental focus.",
      "A new perspective.",
      "Victory through intellect.",
      "Justice and honesty.",
      "Cutting through confusion.",
      "Clear communication.",
      "A sharp mind prevails."
    ],
    "template": [
      "Speak your truth.",
      "Clarity is your ally.",
      "A breakthrough is near.",
      "Communicate with precision.",
      "Cut through confusion.",
      "Let reason guide you.",
      "Honesty brings resolution.",
      "Focus your mind.",
      "Victory is within reach.",
      "A new idea takes shape."
    ]
  },
  {
    "name": "Two of Swords",
    "icon": "⚔️",
    "meaning": [
      "Difficult choices ahead.",
      "A stalemate situation.",
      "Weighing options carefully.",
      "Avoiding a decision.",
      "Balance is needed.",
      "Inner conflict.",
      "Seeking compromise.",
      "Mental tension.",
      "Blocked emotions.",
      "Temporary truce."
    ],
    "template": [
      "Weigh your options.",
      "Seek balance in decision-making.",
      "A difficult choice must be made.",
      "Avoid procrastination.",
      "Find common ground.",
      "Resolve inner conflict.",
      "Compromise may be needed.",
      "Face your dilemma.",
      "Trust your judgment.",
      "Clarity will come with time."
    ]
  },
  {
    "name": "Three of Swords",
    "icon": "💔",
    "meaning": [
      "Heartbreak and sorrow.",
      "Emotional pain.",
      "Separation or loss.",
      "Disappointment in relationships.",
      "Grieving a setback.",
      "Truth that hurts.",
      "Learning from pain.",
      "Release and healing.",
      "Sadness is temporary.",
      "Growth through adversity."
    ],
    "template": [
      "Allow yourself to grieve.",
      "Healing follows heartbreak.",
      "Learn from painful experiences.",
      "Release sadness.",
      "This too shall pass.",
      "Growth comes from adversity.",
      "Face your feelings honestly.",
      "Let go of past hurts.",
      "Find support in sorrow.",
      "Trust that healing is possible."
    ]
  },
  {
    "name": "Four of Swords",
    "icon": "🛏️",
    "meaning": [
      "Rest and recovery.",
      "Taking a break.",
      "Mental recharge.",
      "Solitude for healing.",
      "Pause before action.",
      "Reflection and meditation.",
      "Recuperation from stress.",
      "Temporary withdrawal.",
      "Preparing for the next phase.",
      "Peace and quiet."
    ],
    "template": [
      "Take time to rest.",
      "Recharge your mind.",
      "Pause before making decisions.",
      "Seek solitude for healing.",
      "Reflect and meditate.",
      "Allow yourself a break.",
      "Prepare for what's next.",
      "Find peace in quiet moments.",
      "Rest brings clarity.",
      "Recovery is underway."
    ]
  },
  {
    "name": "Five of Swords",
    "icon": "🦈",
    "meaning": [
      "Conflict and tension.",
      "Winning at a cost.",
      "Disagreements with others.",
      "Hollow victory.",
      "Self-interest prevails.",
      "Learning from defeat.",
      "Letting go of arguments.",
      "Standing up for yourself.",
      "Facing consequences.",
      "Time to move on."
    ],
    "template": [
      "Choose your battles wisely.",
      "Let go of conflict.",
      "Winning isn't everything.",
      "Learn from disagreements.",
      "Stand up for yourself.",
      "Accept the outcome.",
      "Move on from arguments.",
      "Reflect on your actions.",
      "Seek resolution.",
      "Focus on what matters most."
    ]
  },
  {
    "name": "Six of Swords",
    "icon": "⛵",
    "meaning": [
      "Transition and change.",
      "Moving on from difficulties.",
      "A journey to calmer waters.",
      "Leaving troubles behind.",
      "Travel or relocation.",
      "Mental clarity returns.",
      "Support during hard times.",
      "Healing after struggle.",
      "Letting go of baggage.",
      "A new phase begins."
    ],
    "template": [
      "Move forward to calmer times.",
      "Let go of past troubles.",
      "Transition is underway.",
      "Embrace change.",
      "Seek support if needed.",
      "Healing is happening.",
      "Travel may be involved.",
      "Leave baggage behind.",
      "A new phase is starting.",
      "Clarity is returning."
    ]
  },
  {
    "name": "Seven of Swords",
    "icon": "🕵️",
    "meaning": [
      "Deception or trickery.",
      "Acting in secrecy.",
      "Strategic thinking.",
      "Avoiding confrontation.",
      "Hidden motives.",
      "Being discreet.",
      "Taking what you need.",
      "Outsmarting the competition.",
      "Cunning and cleverness.",
      "Not all is as it seems."
    ],
    "template": [
      "Be strategic in your actions.",
      "Watch for hidden motives.",
      "Act with discretion.",
      "Avoid unnecessary confrontation.",
      "Outsmart the competition.",
      "Trust your instincts.",
      "Not all is as it appears.",
      "Use cleverness to your advantage.",
      "Keep your plans private.",
      "Stay alert for deception."
    ]
  },
  {
    "name": "Eight of Swords",
    "icon": "⛓️",
    "meaning": [
      "Feeling trapped or restricted.",
      "Mental limitations.",
      "Imprisoned by fear.",
      "A situation feels hopeless.",
      "Self-imposed barriers.",
      "Need for a new perspective.",
      "Overthinking creates paralysis.",
      "Freedom is possible.",
      "Release yourself from constraints.",
      "Help is available if you ask."
    ],
    "template": [
      "Break free from limitations.",
      "Ask for help if needed.",
      "A new perspective is needed.",
      "Release yourself from fear.",
      "You are not as trapped as you think.",
      "Challenge your beliefs.",
      "Overthinking is holding you back.",
      "Find a way out.",
      "Freedom is within reach.",
      "Let go of self-imposed restrictions."
    ]
  },
  {
    "name": "Nine of Swords",
    "icon": "😱",
    "meaning": [
      "Anxiety and worry.",
      "Sleepless nights.",
      "Fear of the future.",
      "Mental anguish.",
      "Overwhelming thoughts.",
      "Regret and guilt.",
      "Nightmares or distress.",
      "Facing your fears.",
      "Emotional overwhelm.",
      "Hope is not lost."
    ],
    "template": [
      "Address your worries.",
      "Face your fears.",
      "Seek support for anxiety.",
      "Let go of guilt.",
      "Rest is needed.",
      "You are not alone.",
      "Hope is still present.",
      "Release overwhelming thoughts.",
      "Find peace within.",
      "Healing is possible."
    ]
  },
  {
    "name": "Ten of Swords",
    "icon": "️⚰️",
    "meaning": [
      "A painful ending.",
      "Betrayal or loss.",
      "Hitting rock bottom.",
      "Finality and closure.",
      "Letting go of suffering.",
      "A new dawn follows darkness.",
      "Learning from hardship.",
      "The worst is over.",
      "Time to move on.",
      "Transformation through adversity."
    ],
    "template": [
      "Let go of what is over.",
      "A new beginning follows endings.",
      "Release suffering.",
      "Learn from hardship.",
      "The worst is behind you.",
      "Closure is here.",
      "Move on to brighter days.",
      "Transformation is possible.",
      "Embrace new beginnings.",
      "Healing follows loss."
    ]
  },
  {
    "name": "Page of Swords",
    "icon": "🦉",
    "meaning": [
      "Curiosity and intellect.",
      "New ideas emerge.",
      "A thirst for knowledge.",
      "Vigilance and alertness.",
      "Truth-seeking.",
      "Quick thinking.",
      "Communication is highlighted.",
      "Youthful enthusiasm for learning.",
      "A message may arrive.",
      "Mental agility."
    ],
    "template": [
      "Embrace curiosity.",
      "Seek the truth.",
      "Communicate clearly.",
      "Stay alert for new ideas.",
      "Learn all you can.",
      "Be vigilant.",
      "Share your thoughts.",
      "Let your mind explore.",
      "A message may come soon.",
      "Think on your feet."
    ]
  },
  {
    "name": "Knight of Swords",
    "icon": "🏇🏻",
    "meaning": [
      "Swift action.",
      "Charging ahead.",
      "Ambition and drive.",
      "Decisiveness.",
      "Speaking your mind.",
      "Overcoming obstacles quickly.",
      "Impulsiveness.",
      "Courage in the face of challenge.",
      "Intellectual pursuit.",
      "A call to action."
    ],
    "template": [
      "Act swiftly and decisively.",
      "Speak your mind.",
      "Let ambition drive you.",
      "Overcome obstacles quickly.",
      "Be courageous.",
      "Pursue your goals.",
      "Take bold action.",
      "Stay focused.",
      "Move forward with confidence.",
      "Let intellect guide you."
    ]
  },
  {
    "name": "Queen of Swords",
    "icon": "🦢",
    "meaning": [
      "Clear communication.",
      "Independence.",
      "Objective thinking.",
      "Perceptiveness.",
      "Wisdom from experience.",
      "Setting boundaries.",
      "Honesty and directness.",
      "Intellectual clarity.",
      "Fairness in judgment.",
      "Strength in adversity."
    ],
    "template": [
      "Communicate with clarity.",
      "Be objective in decisions.",
      "Set healthy boundaries.",
      "Rely on your wisdom.",
      "Be honest and direct.",
      "Think clearly.",
      "Judge fairly.",
      "Stand strong in adversity.",
      "Use your experience.",
      "Let intellect lead."
    ]
  },
  {
    "name": "King of Swords",
    "icon": "🦅",
    "meaning": [
      "Authority in intellect.",
      "Strategic thinking.",
      "Leadership through logic.",
      "Fair and just decisions.",
      "Mental discipline.",
      "Truth and integrity.",
      "Clear vision.",
      "Analytical skills.",
      "Commanding respect.",
      "Mastery of communication."
    ],
    "template": [
      "Lead with logic.",
      "Make fair decisions.",
      "Be strategic.",
      "Maintain mental discipline.",
      "Speak with integrity.",
      "Command respect.",
      "Use analytical skills.",
      "Communicate masterfully.",
      "See the big picture.",
      "Let truth guide you."
    ]
  },
  
  {
    "name": "Ace of Pentacles",
    "icon": "🌱",
    "meaning": [
      "A new financial opportunity.",
      "Seeds of prosperity.",
      "Material abundance begins.",
      "A fresh start in career.",
      "Manifesting wealth.",
      "Solid foundations.",
      "Growth in resources.",
      "A gift or windfall.",
      "Physical well-being.",
      "Success through practicality."
    ],
    "template": [
      "Plant seeds for future growth.",
      "A new opportunity arises.",
      "Build on solid foundations.",
      "Prosperity is within reach.",
      "Focus on practical matters.",
      "Nurture your resources.",
      "Embrace abundance.",
      "A gift may come your way.",
      "Take the first step to success.",
      "Well-being is highlighted."
    ]
  },
  {
    "name": "Two of Pentacles",
    "icon": "⚖️",
    "meaning": [
      "Balancing multiple priorities.",
      "Adaptability is key.",
      "Managing resources.",
      "Juggling responsibilities.",
      "Flexibility in finances.",
      "Finding equilibrium.",
      "Time management.",
      "Staying afloat.",
      "Making ends meet.",
      "Handling life's ups and downs."
    ],
    "template": [
      "Balance your priorities.",
      "Stay flexible.",
      "Manage your resources wisely.",
      "Adapt to changing circumstances.",
      "Find equilibrium.",
      "Juggle responsibilities with care.",
      "Time management is crucial.",
      "Stay afloat during challenges.",
      "Make ends meet.",
      "Handle life's fluctuations gracefully."
    ]
  },
  {
    "name": "Three of Pentacles",
    "icon": "🧱",
    "meaning": [
      "Teamwork leads to success.",
      "Collaboration is fruitful.",
      "Recognition for your skills.",
      "Building something lasting.",
      "Learning from others.",
      "Shared goals.",
      "Practical cooperation.",
      "A project comes together.",
      "Mastery through effort.",
      "Support from your community."
    ],
    "template": [
      "Work together for best results.",
      "Share your skills.",
      "Collaborate on projects.",
      "Value teamwork.",
      "Build something lasting.",
      "Learn from others.",
      "Support your community.",
      "Recognize your achievements.",
      "Mastery comes through effort.",
      "Celebrate shared goals."
    ]
  },
  {
    "name": "Four of Pentacles",
    "icon": "💎",
    "meaning": [
      "Holding on to resources.",
      "Financial security.",
      "Possessiveness.",
      "Saving for the future.",
      "Fear of loss.",
      "Conservatism in spending.",
      "Desire for stability.",
      "Guarding your assets.",
      "Clinging to the status quo.",
      "Control over possessions."
    ],
    "template": [
      "Protect your resources.",
      "Save for the future.",
      "Seek financial security.",
      "Avoid possessiveness.",
      "Let go of fear of loss.",
      "Balance saving and spending.",
      "Desire for stability is natural.",
      "Guard your assets wisely.",
      "Be open to change.",
      "Control is not always the answer."
    ]
  },
  {
    "name": "Five of Pentacles",
    "icon": "🥾",
    "meaning": [
      "Financial hardship.",
      "Feeling left out.",
      "Material loss.",
      "Struggles with security.",
      "Isolation or exclusion.",
      "Seeking support.",
      "Difficulties are temporary.",
      "Hope in adversity.",
      "Help is available.",
      "Learning from challenges."
    ],
    "template": [
      "Seek support in hard times.",
      "Difficulties are temporary.",
      "Help is available.",
      "Don't isolate yourself.",
      "Hope remains.",
      "Learn from challenges.",
      "Reach out for assistance.",
      "Material loss can be overcome.",
      "Find comfort in community.",
      "Growth comes from adversity."
    ]
  },
  {
    "name": "Six of Pentacles",
    "icon": "🎁",
    "meaning": [
      "Generosity and charity.",
      "Sharing resources.",
      "Receiving help.",
      "Balance in giving and receiving.",
      "Financial support.",
      "Acts of kindness.",
      "Mutual benefit.",
      "Assistance is at hand.",
      "Gratitude for abundance.",
      "Community support."
    ],
    "template": [
      "Give and receive with gratitude.",
      "Share your resources.",
      "Help is at hand.",
      "Acts of kindness matter.",
      "Balance giving and receiving.",
      "Support your community.",
      "Accept generosity.",
      "Practice gratitude.",
      "Benefit from mutual support.",
      "Charity brings abundance."
    ]
  },
  {
    "name": "Seven of Pentacles",
    "icon": "🌳",
    "meaning": [
      "Patience and long-term planning.",
      "Assessment of progress.",
      "Waiting for results.",
      "Investment in the future.",
      "Reflecting on growth.",
      "Hard work pays off.",
      "Reaping what you sow.",
      "Evaluating options.",
      "Tending to your goals.",
      "Growth takes time."
    ],
    "template": [
      "Be patient for results.",
      "Assess your progress.",
      "Invest in the future.",
      "Reflect on your growth.",
      "Hard work will pay off.",
      "Wait for the harvest.",
      "Evaluate your options.",
      "Tend to your goals.",
      "Growth takes time.",
      "Reap what you have sown."
    ]
  },
  {
    "name": "Eight of Pentacles",
    "icon": "🔨",
    "meaning": [
      "Diligence and hard work.",
      "Mastering your craft.",
      "Attention to detail.",
      "Skill development.",
      "Dedication to improvement.",
      "Persistence leads to success.",
      "Learning through practice.",
      "Focus on your work.",
      "Perfectionism.",
      "Pride in accomplishment."
    ],
    "template": [
      "Work diligently.",
      "Master your craft.",
      "Pay attention to detail.",
      "Dedicate yourself to improvement.",
      "Practice makes perfect.",
      "Persist for success.",
      "Focus on your work.",
      "Take pride in your skills.",
      "Keep learning.",
      "Perseverance brings mastery."
    ]
  },
  {
    "name": "Nine of Pentacles",
    "icon": "🦚",
    "meaning": [
      "Self-sufficiency.",
      "Enjoying the fruits of your labor.",
      "Financial independence.",
      "Luxury and comfort.",
      "Personal achievement.",
      "Success through effort.",
      "Abundance surrounds you.",
      "Pride in accomplishment.",
      "Reward for hard work.",
      "Contentment in solitude."
    ],
    "template": [
      "Enjoy your achievements.",
      "Celebrate independence.",
      "Luxury is earned.",
      "Take pride in your work.",
      "Abundance is present.",
      "Success comes from effort.",
      "Relish comfort and security.",
      "Reward yourself.",
      "Contentment is yours.",
      "Personal achievement is highlighted."
    ]
  },
  {
    "name": "Ten of Pentacles",
    "icon": "🏰",
    "meaning": [
      "Family legacy.",
      "Long-term success.",
      "Financial security.",
      "Wealth and abundance.",
      "Stability for generations.",
      "Inheritance or windfall.",
      "Tradition and roots.",
      "Community support.",
      "Completion of a cycle.",
      "Shared prosperity."
    ],
    "template": [
      "Celebrate family legacy.",
      "Long-term success is yours.",
      "Financial security is present.",
      "Enjoy stability and abundance.",
      "Honor tradition.",
      "Share prosperity.",
      "Support your community.",
      "Completion is at hand.",
      "Wealth is shared.",
      "Roots run deep."
    ]
  },
  {
    "name": "Page of Pentacles",
    "icon": "🦔",
    "meaning": [
      "New opportunities in work or study.",
      "Curiosity about the material world.",
      "Setting practical goals.",
      "Diligence and reliability.",
      "Learning new skills.",
      "Manifesting dreams into reality.",
      "Financial beginnings.",
      "Focus on growth.",
      "Ambition and drive.",
      "Attention to detail."
    ],
    "template": [
      "Pursue new opportunities.",
      "Set practical goals.",
      "Be diligent and reliable.",
      "Learn new skills.",
      "Manifest your dreams.",
      "Focus on growth.",
      "Start something new.",
      "Pay attention to details.",
      "Let ambition guide you.",
      "Build a solid foundation."
    ]
  },
  {
    "name": "Knight of Pentacles",
    "icon": "🐎",
    "meaning": [
      "Steadfast progress.",
      "Reliability and responsibility.",
      "Hard work and persistence.",
      "Methodical approach.",
      "Dedication to duty.",
      "Patience in pursuit of goals.",
      "Practical action.",
      "Building for the future.",
      "Consistency is key.",
      "Loyalty and trustworthiness."
    ],
    "template": [
      "Be reliable and responsible.",
      "Work hard for your goals.",
      "Take a methodical approach.",
      "Dedicate yourself to duty.",
      "Practice patience.",
      "Take practical action.",
      "Build for the future.",
      "Stay consistent.",
      "Loyalty is valued.",
      "Trust in steady progress."
    ]
  },
  {
    "name": "Queen of Pentacles",
    "icon": "🦌",
    "meaning": [
      "Nurturing abundance.",
      "Practical wisdom.",
      "Caring for home and family.",
      "Resourcefulness.",
      "Financial security.",
      "Generosity and kindness.",
      "Balance between work and home.",
      "Comfort and stability.",
      "Supportive leadership.",
      "Earthly pleasures."
    ],
    "template": [
      "Nurture abundance.",
      "Use practical wisdom.",
      "Care for home and family.",
      "Be resourceful.",
      "Seek financial security.",
      "Show generosity.",
      "Balance work and home.",
      "Enjoy comfort and stability.",
      "Lead with support.",
      "Savor earthly pleasures."
    ]
  },
  {
    "name": "King of Pentacles",
    "icon": "🦏",
    "meaning": [
      "Mastery of wealth.",
      "Financial leadership.",
      "Stability and security.",
      "Generosity with resources.",
      "Success in business.",
      "Practical wisdom.",
      "Provider and protector.",
      "Confidence in material matters.",
      "Long-term planning.",
      "Abundance and prosperity."
    ],
    "template": [
      "Lead with financial wisdom.",
      "Provide for others.",
      "Ensure stability and security.",
      "Be generous with resources.",
      "Succeed in business.",
      "Apply practical wisdom.",
      "Protect what matters.",
      "Plan for the long term.",
      "Enjoy abundance.",
      "Prosperity is yours."
    ]
  }
],

  CARDS: [
    // Major Arcana
    { name: "The Fool", meaning: "The Fool represents the start of a process or journey. It is associated with inexperience and the potential for development.", icon: "🃏", template: "This card is often drawn at the beginning of a sequence." },
    { name: "The Magician", meaning: "The Magician symbolizes the use of available resources and the application of skills to achieve objectives.", icon: "🎩", template: "This card may indicate that tools are present for progress." },
    { name: "The High Priestess", meaning: "The High Priestess is associated with information that is not immediately visible and the need for analysis.", icon: "🌙", template: "This card suggests the presence of unknown variables." },
    { name: "The Empress", meaning: "The Empress is linked to growth, production, and environments that support development.", icon: "👑", template: "This card can be related to increased output." },
    { name: "The Emperor", meaning: "The Emperor is connected to structure, order, and the enforcement of rules.", icon: "⚡", template: "This card is relevant when systems or hierarchies are present." },
    { name: "The Hierophant", meaning: "The Hierophant refers to adherence to established procedures and the transmission of knowledge.", icon: "🗝️", template: "This card may refer to institutional influence." },
    { name: "The Lovers", meaning: "The Lovers card is related to duality, relationships, and the process of making selections.", icon: "💕", template: "This card is often present when choices are required." },
    { name: "The Chariot", meaning: "The Chariot is associated with directed movement and the overcoming of obstacles through effort.", icon: "🏇", template: "This card can indicate forward momentum." },
    { name: "Strength", meaning: "Strength denotes the application of internal or external force to maintain stability.", icon: "🦁", template: "This card may be relevant when endurance is needed." },
    { name: "The Hermit", meaning: "The Hermit signifies withdrawal from activity for the purpose of analysis or rest.", icon: "🕯️", template: "This card is associated with solitary processes." },
    { name: "Wheel of Fortune", meaning: "Wheel of Fortune refers to fluctuations in conditions and the influence of probability.", icon: "☸️", template: "This card is often observed when outcomes are uncertain." },
    { name: "Justice", meaning: "Justice is linked to balance, fairness, and the assessment of actions and consequences.", icon: "⚖️", template: "This card may be relevant in situations of evaluation." },
    { name: "The Hanged Man", meaning: "The Hanged Man indicates a period of suspension or waiting, often leading to new perspectives.", icon: "🙃", template: "This card is drawn when progress is paused." },
    { name: "Death", meaning: "Death signifies the conclusion of one phase and the initiation of another.", icon: "💀", template: "This card is associated with transitions." },
    { name: "Temperance", meaning: "Temperance is connected to moderation and the combination of elements to achieve equilibrium.", icon: "🏺", template: "This card is present when balance is required." },
    { name: "The Devil", meaning: "The Devil symbolizes limitations, dependencies, or repetitive patterns.", icon: "😈", template: "This card may indicate constraints." },
    { name: "The Tower", meaning: "The Tower represents abrupt change and the breakdown of established structures.", icon: "🗼", template: "This card is observed when disruption occurs." },
    { name: "The Star", meaning: "The Star is associated with optimism and the identification of future possibilities.", icon: "⭐", template: "This card can appear when new directions are considered." },
    { name: "The Moon", meaning: "The Moon is linked to uncertainty, confusion, and the need for clarification.", icon: "🌒", template: "This card is relevant when information is incomplete." },
    { name: "The Sun", meaning: "The Sun denotes successful outcomes and favorable conditions.", icon: "☀️", template: "This card is present when results are positive." },
    { name: "Judgement", meaning: "Judgement is connected to review, reflection, and the process of making final decisions.", icon: "📯", template: "This card may be observed during assessment." },
    { name: "The World", meaning: "The World represents the completion of a cycle and the achievement of objectives.", icon: "🌍", template: "This card is relevant when processes are finalized." },

    // Minor Arcana - Wands
    { name: "Ace of Wands", meaning: "Ace of Wands is linked to the start of activity or the emergence of motivation.", icon: "🔥", template: "This card is often drawn at the beginning of an initiative." },
    { name: "Two of Wands", meaning: "Two of Wands is associated with planning and the consideration of alternatives.", icon: "🧭", template: "This card is present when options are being evaluated." },
    { name: "Three of Wands", meaning: "Three of Wands refers to expansion and the anticipation of results from prior actions.", icon: "🚢", template: "This card is observed when awaiting outcomes." },
    { name: "Four of Wands", meaning: "Four of Wands is linked to stable conditions and the recognition of milestones.", icon: "🎉", template: "This card is present when stability is achieved." },
    { name: "Five of Wands", meaning: "Five of Wands indicates conflict, competition, or the presence of differing inputs.", icon: "⚔️", template: "This card is observed when multiple agents interact." },
    { name: "Six of Wands", meaning: "Six of Wands represents acknowledgment of achievement and positive feedback.", icon: "🏆", template: "This card is present when results are recognized." },
    { name: "Seven of Wands", meaning: "Seven of Wands is associated with defending a position or maintaining advantage.", icon: "🛡️", template: "This card is relevant when persistence is required." },
    { name: "Eight of Wands", meaning: "Eight of Wands refers to rapid movement and the quick progression of events.", icon: "💨", template: "This card is present when acceleration is detected." },
    { name: "Nine of Wands", meaning: "Nine of Wands is linked to resilience and the continuation of effort under stress.", icon: "🗿", template: "This card is observed in sustained operations." },
    { name: "Ten of Wands", meaning: "Ten of Wands indicates burden or the accumulation of responsibilities.", icon: "📦", template: "This card is relevant when load is increased." },
    { name: "Page of Wands", meaning: "Page of Wands is associated with curiosity and the exploration of new possibilities.", icon: "🔍", template: "This card is present when investigation occurs." },
    { name: "Knight of Wands", meaning: "Knight of Wands refers to energetic action and the pursuit of objectives.", icon: "🐎", template: "This card is observed when activity is high." },
    { name: "Queen of Wands", meaning: "Queen of Wands is linked to confidence and the management of resources.", icon: "👸", template: "This card is present when leadership is exercised." },
    { name: "King of Wands", meaning: "King of Wands represents vision and the direction of collective efforts.", icon: "🤴", template: "This card is observed when strategies are implemented." },

    // Minor Arcana - Cups
    { name: "Ace of Cups", meaning: "Ace of Cups denotes the beginning of emotional processes or new connections.", icon: "💧", template: "This card is often drawn at the start of relational sequences." },
    { name: "Two of Cups", meaning: "Two of Cups is linked to the formation of partnerships and the alignment of interests.", icon: "💑", template: "This card is present when cooperation is established." },
    { name: "Three of Cups", meaning: "Three of Cups refers to collective experiences and shared outcomes.", icon: "🥂", template: "This card is observed when group activities occur." },
    { name: "Four of Cups", meaning: "Four of Cups is associated with withdrawal or the reassessment of options.", icon: "🧘", template: "This card is present when reevaluation is needed." },
    { name: "Five of Cups", meaning: "Five of Cups indicates focus on loss or the assessment of negative outcomes.", icon: "😢", template: "This card is observed when errors are analyzed." },
    { name: "Six of Cups", meaning: "Six of Cups refers to recollection and the influence of previous data.", icon: "🎠", template: "This card is present when historical context is relevant." },
    { name: "Seven of Cups", meaning: "Seven of Cups is linked to multiple options and the need for selection.", icon: "🌈", template: "This card is observed when choices are presented." },
    { name: "Eight of Cups", meaning: "Eight of Cups indicates the abandonment of previous objectives or processes.", icon: "🚶", template: "This card is present when transition is initiated." },
    { name: "Nine of Cups", meaning: "Nine of Cups is associated with the attainment of desired conditions.", icon: "😌", template: "This card is observed when satisfaction is recorded." },
    { name: "Ten of Cups", meaning: "Ten of Cups denotes the realization of optimal states or completion of cycles.", icon: "🏡", template: "This card is present when systems reach stability." },
    { name: "Page of Cups", meaning: "Page of Cups refers to new information or the emergence of creative input.", icon: "🎨", template: "This card is observed when innovation occurs." },
    { name: "Knight of Cups", meaning: "Knight of Cups is linked to pursuit of objectives based on perception or preference.", icon: "🎭", template: "This card is present when motivation increases." },
    { name: "Queen of Cups", meaning: "Queen of Cups represents stability in emotional or relational systems.", icon: "🤱", template: "This card is observed when support is provided." },
    { name: "King of Cups", meaning: "King of Cups is associated with control and moderation of emotional responses.", icon: "👨‍⚕️", template: "This card is present when regulation is effective." },

    // Minor Arcana - Swords
    { name: "Ace of Swords", meaning: "Ace of Swords denotes the emergence of new ideas or clarity in analysis.", icon: "💡", template: "This card is often drawn at the start of logical processes." },
    { name: "Two of Swords", meaning: "Two of Swords is linked to indecision or the balancing of alternatives.", icon: "🤔", template: "This card is present when resolution is pending." },
    { name: "Three of Swords", meaning: "Three of Swords refers to the identification of faults or negative results.", icon: "💔", template: "This card is observed when errors are detected." },
    { name: "Four of Swords", meaning: "Four of Swords is associated with rest and the suspension of activity.", icon: "🛌", template: "This card is present when inactivity is required." },
    { name: "Five of Swords", meaning: "Five of Swords indicates conflict or the pursuit of objectives at the expense of others.", icon: "🗡️", template: "This card is observed when competition intensifies." },
    { name: "Six of Swords", meaning: "Six of Swords refers to transition and the movement away from previous conditions.", icon: "🚤", template: "This card is present when adaptation occurs." },
    { name: "Seven of Swords", meaning: "Seven of Swords is linked to strategy and the use of indirect approaches.", icon: "🕵️", template: "This card is observed when unconventional methods are used." },
    { name: "Eight of Swords", meaning: "Eight of Swords indicates restriction or the perception of limited options.", icon: "⛓️", template: "This card is present when constraints are identified." },
    { name: "Nine of Swords", meaning: "Nine of Swords is associated with concern or the anticipation of negative outcomes.", icon: "😰", template: "This card is observed when system stress is high." },
    { name: "Ten of Swords", meaning: "Ten of Swords denotes the conclusion of a process due to failure or overload.", icon: "⚰️", template: "This card is present when shutdown occurs." },
    { name: "Page of Swords", meaning: "Page of Swords refers to curiosity and the gathering of information.", icon: "📚", template: "This card is observed when data collection is active." },
    { name: "Knight of Swords", meaning: "Knight of Swords is linked to rapid action and the pursuit of objectives with intensity.", icon: "🏃", template: "This card is present when acceleration is prioritized." },
    { name: "Queen of Swords", meaning: "Queen of Swords represents clarity and the application of logic to decision-making.", icon: "👩‍⚖️", template: "This card is observed when analysis is performed." },
    { name: "King of Swords", meaning: "King of Swords is associated with authority in intellectual matters and decisive action.", icon: "👨‍💼", template: "This card is present when leadership is data-driven." },

    // Minor Arcana - Pentacles
    { name: "Ace of Pentacles", meaning: "Ace of Pentacles denotes the beginning of material processes or new resources.", icon: "💰", template: "This card is often drawn at the start of acquisition." },
    { name: "Two of Pentacles", meaning: "Two of Pentacles is linked to balancing resources and adapting to changes.", icon: "🤹", template: "This card is present when multitasking is required." },
    { name: "Three of Pentacles", meaning: "Three of Pentacles refers to collaboration and the integration of efforts.", icon: "🏗️", template: "This card is observed when teamwork is active." },
    { name: "Four of Pentacles", meaning: "Four of Pentacles is associated with conservation and the maintenance of stability.", icon: "🏦", template: "This card is present when retention is prioritized." },
    { name: "Five of Pentacles", meaning: "Five of Pentacles indicates lack or the experience of resource scarcity.", icon: "⛪", template: "This card is observed when deficits are recorded." },
    { name: "Six of Pentacles", meaning: "Six of Pentacles is linked to distribution and the sharing of resources.", icon: "🤝", template: "This card is present when allocation occurs." },
    { name: "Seven of Pentacles", meaning: "Seven of Pentacles refers to assessment and the evaluation of progress over time.", icon: "🌱", template: "This card is observed when monitoring is ongoing." },
    { name: "Eight of Pentacles", meaning: "Eight of Pentacles is associated with repetition and the refinement of skills.", icon: "🔨", template: "This card is present when optimization is underway." },
    { name: "Nine of Pentacles", meaning: "Nine of Pentacles denotes self-sufficiency and the achievement of independent goals.", icon: "🍇", template: "This card is observed when autonomy is reached." },
    { name: "Ten of Pentacles", meaning: "Ten of Pentacles represents the culmination of material processes and the establishment of legacy.", icon: "🏰", template: "This card is present when systems are finalized." },
    { name: "Page of Pentacles", meaning: "Page of Pentacles refers to the pursuit of new opportunities and the application of effort to gain resources.", icon: "💎", template: "This card is observed when learning is initiated." },
    { name: "Knight of Pentacles", meaning: "Knight of Pentacles is linked to consistent effort and the achievement of reliability.", icon: "🚜", template: "This card is present when persistence is maintained." },
    { name: "Queen of Pentacles", meaning: "Queen of Pentacles is associated with practicality and the management of resources for stability.", icon: "👩‍🌾", template: "This card is observed when care is applied to systems." },
    { name: "King of Pentacles", meaning: "King of Pentacles denotes mastery of material resources and the achievement of long-term security.", icon: "👑", template: "This card is present when control is established." }
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TAROT_CONFIG;
}