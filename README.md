# zenjungle.js

Power of [microjungle](https://github.com/deepsweet/microjungle), simpliefied.

## static

```javascript
    var template = [
        ['div.header',
            ['h1',
                ['a[href=#]', 'some pretty title']
            ],
            'some pretty text line 1', ['br'],
            'some pretty text line 2'
        ],
        ['div.content',
            ['p', 'some pretty paragraph'],
            ['p', 'another one'],
            ['ul.pretty-list',
                ['li', 'item1'],
                ['li.active', 'item2'],
                ['li',
                    ['a[href=#]', 'item3']
                ]
            ]
        ],
        ['div.footer',
            ['form[action=/]',
                ['input[type=text][value=some pretty input]'],
                ['input[type=submit][value=push]'],
            ],
            'all rights reserved, copyright 2011.'
        ]
    ];

    document.body.appendChild(zenjungle(template));
```

## credits

* [deepsweet](https://github.com/deepsweet) for creating [microjungle](https://github.com/deepsweet/microjungle)