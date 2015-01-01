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
                    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit...'
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    elem: 'layout',
                    content: [
                        {
                            elem: 'fluid-col',
                            content: [
                                {
                                    block: 'article',
                                    date: 'Saturday, April 26, 2008',
                                    author: 'John Doe',
                                    title: 'Somelines About Us',
                                    content: [
                                        {
                                            elem: 'header',
                                            content: 'ltrices inh endrerit ac tempor idtellus uis quam uisque'
                                        },
                                        {
                                            elem: 'text',
                                            content: '<strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla libero leo, suscipit acfaucibusnon.</strong>                 Etiam est. Etiam ac ipsum sed pede ultricies pretium. Nulla mi lacus, fringilla eu, pulvinar at, commodo eu, dolor. Nam porttitor viverra sapien. Pellentesque vitae augue et lorem laoreet .'
                                        }
                                    ]
                                },
                                {
                                    block: 'services',
                                    title: 'Our Spectrum of Services',
                                    content: [
                                        {
                                            elem: 'frame',
                                            content: [
                                                {
                                                    block: 'frame',
                                                    // mix: { block: 'services', elem: 'frame' },
                                                    label: 'Cras turpis duis at sapien eget nulla vulputate.',
                                                    url: '#',
                                                    img: 'http://placehold.it/118x104'
                                                }
                                            ]
                                        },
                                        '<p><strong>Donec accumsan porta risus.</strong> Vestibulum sollicitudinlibero ut semper commodo, purus enim sollicitudin nulla, dictum vehicula diam lacus at purus. In egestas.</p>',
                                        // {
                                        //     elem: 'dlist',
                                        //     content: 
                                        //     [
                                        //         'Nam congue quam non augue.',
                                        //         'Jam aongue buam n augue famus'
                                        //     ]
                                        // },
                                        {
                                            block: 'mylist',
                                            mix: { block: 'services', elem: 'list' },
                                            mods: { services: true },
                                            header: 'Services',
                                            items: [
                                                {
                                                    url: '#',
                                                    title: 'Nam congue quam non augue.'
                                                },
                                                {
                                                    url: '#',
                                                    title: 'Jam aongue buam n augue famus'
                                                }
                                            ]
                                        },
                                        '<p><strong>Pellentesque dolor.</strong> Nunc congue est in ante mattis ultrices. liquam erat volutpat. Nam congue quam non augue.</p>'
                                    ]
                                },
                                {
                                    block: 'testimonial',
                                    title: 'Testimonial',
                                    content: [
                                        {
                                            block: 'blockquote',
                                            author: 'David Jackson',
                                            content: '<p><strong>Nullam vel justo. Mauris viverra mattis neque. Phasellus feugiat pede ut mauris uis orcies tibulum eleifend.</strong> Donec est purusiaculis acauctorNullam vel justo. Mauris viverra mattis neque. Phasellus feugiat pede ut mauris. Duis orci. </p>'
                                        },
                                        {
                                            block: 'blockquote',
                                            author: 'Tom Sam',
                                            content: '<p><strong>Vel justo. Mauris viverra mattis neque  asellus feugiat pede ut mauris uis orcies tibulum eleifend.</strong> Donec est purusiaculis acauctorNullam vel justo. Mauris viverra mattis neque. Phasellus feugiat pede ut mauris.</p>'
                                        }
                                    ]
                                }
                           ]
                        }
                    ]
                },
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
                            block: 'mylist',
                            // mods: { projects: true },
                            header: 'Projects Link',
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
