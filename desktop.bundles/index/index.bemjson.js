({
    block: 'page',
    title: 'Solitude',
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
            content: [
                {
                    block: 'sidebar',
                    content: [
                        {
                            block: 'photo-stock',
                            header: 'Photo Stock',
                            items: [
                                {
                                    url: '#',
                                    img: 'http://placehold.it/256x62'
                                },
                                {
                                    url: '#',
                                    img: 'http://placehold.it/256x62'
                                },
                                {
                                    url: '#',
                                    img: 'http://placehold.it/256x62'
                                }
                            ]
                        },
                        {
                            block: 'qcontact'
                        },
                        {
                            block: 'projects',
                            items: [
                                {
                                    title: 'Lorem ipsum dolor sit amet eros consequat',
                                    active: true,
                                    url: '#'
                                },
                                {
                                    title: 'Cras eros massa blandit',
                                    url: '#'
                                },
                                {
                                    title: 'Etiam quis est ut diam viverra rhoncus',
                                    url: '#'
                                },
                                {
                                    title: 'Fusce eros consequat',
                                    url: '#'
                                },
                                {
                                    title: 'Cras eros massa blandit',
                                    // active: true,
                                    url: '#'
                                },
                                {
                                    title: 'Aoreet utdiam viverra',
                                    url: '#'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: [
                {
                    block: 'nav',
                    mods: { bottom: true },
                    mix: { block: 'footer', elem: 'menu' },
                    // mix: { block: 'header', elem: 'menu' },
                    items: [
                        {
                            title: 'Home',
                            url: '#',
                            active: 'true'
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
                },
                {
                    elem: 'copyright',
                    content: '&copy; Copyright information goes here. All rights reserverd'
                },
                {
                    elem: 'designby',
                    content: [
                        'Design by : ',
                        {
                            block: 'mylink',
                            attrs: { href: 'http://templateworld.com' },
                            content: 'Templateworld'
                        }
                    ]
                },
                {
                    elem: 'valid',
                    links: [
                        'xhtml',
                        'css'
                    ]
                }
            ]
        }
    ]
})
