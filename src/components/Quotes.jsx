export const quotes = [
    {
        quote: 'You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.',
        author: '- Unknown'
    },
    {
        quote: 'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
        author: '- Leonardo da Vinci'
    },
    {
        quote: 'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.',
        author: '- Bob Dylan'   
    },
    {
        quote: 'If you want your children to turn out well, spend twice as much time with them, and half as much money.',
        author: '- Abigail Van Buren'
    },
    {
        quote: 'Our lives begin to end the day we become silent about things that matter.',
        author: '- Martin Luther King Jr.'
    },
    {
        quote: 'I am not a product of my circumstances. I am a product of my decisions.',
        author: '- Stephen Covey'
    },
    {
        quote: 'Build your own dreams, or someone else will hire you to build theirs.',
        author: '- Farrah Gray'
    },
    {
        quote: 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
        author: '- Ann Landers'
    },
    {
        quote: 'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
        author: '- Jamie Paolinetti'
    },
    {
        quote: 'Happiness is not something readymade. It comes from your own actions.',
        author: '- Dalai Lama'
    },
    {
        quote: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
        author: '- Robert Frost'
    },
    {
        quote: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
        author: '- Helen Keller'
    },
    {
        quote: 'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.',
        author: '- Booker T. Washington'
    },
    {
        quote: 'Start where you are. Use what you have. Do what you can.',
        author: '- Arthur Ashe'
    },
    {
        quote: 'Either write something worth reading or do something worth writing.',
        author: '- Benjamin Franklin'
    },
    {
        quote: 'I attribute my success to this: I never gave or took any excuse.',
        author: '- Florence Nightingale'
    },
    {
        quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
        author: '- Christopher Columbus'
    },
    {
        quote: 'You miss 100% of the shots you don’t take.',
        author: '- Wayne Gretzky'
    },
    {
        quote: 'Believe you can and you’re halfway there.',
        author: '- Theodore Roosevelt'
    },
    {
        quote: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
        author: '- Anne Frank'
    },
    {
        quote: 'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.',
        author: '- Vincent Van Gogh'
    }
]

export function getQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}