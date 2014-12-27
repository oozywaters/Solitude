({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    // mods: { theme: 'normal' },
    content: [
        {
            block: 'header',
            // mods: { color: 'red' },
            content: [
                {
                    block: 'nav',
                    mix: { block: 'header', elem: 'menu' },
                    mods: { top: true },
                    items: [
                        {
                            title: 'Home',
                            url: '#',
                            active: true
                            // mods: { active: true }
                        },
                        {
                            title: 'About Us',
                            url: '#',
                            // mods: { state: 'active' }
                        },
                        {
                            title: 'Support',
                            url: '#'
                        },
                        {
                            title: 'Forum',
                            url: '#'
                        },
                        {
                            title: 'Development',
                            url: '#'
                        },
                        {
                            title: 'Contact Us',
                            url: '#'
                        }
                    ]
                },
                {
                    block: 'logo',
                    mix: { block: 'header', elem: 'logo' },
                    content: 'Solitude'
                },
                {
                    block: 'auth',
                    mix: { block: 'header', elem: 'auth'}
                },
                {
                    elem: 'slogan',
                    elemMods: { color: 'red' },
                    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit...'
                }
            ]
                // {
                //     block: 'nav',
                //     mix: { block: 'header', elem: 'menu' },
                //     content: [
                //         { 'NAVBAR HERE' }
                //     ]
                // }
        },
        {
            block: 'content',
            content: 'Content goes here'
        },
        {
            block: 'footer',
            content: [
                {
                    block: 'nav',
                    mix: { block: 'footer', elem: 'menu' },
                    items: [
                        {
                            title: 'Home',
                            url: '#'
                        },
                        {
                            title: 'About Us',
                            url: '#'
                        },
                        {
                            title: 'Support',
                            url: '#'
                        },
                        {
                            title: 'Forum',
                            url: '#'
                        },
                        {
                            title: 'Development',
                            url: '#'
                        },
                        {
                            title: 'Contact Us',
                            url: '#'
                        }
                    ]
                }
            ]
        }
    ]
})
