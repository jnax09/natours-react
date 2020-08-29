// MEDIA QUERIES MANAGER
/*
0 - 600px:    Phone
600 - 900px:    Tablet portrait
900 - 1200px:    Tablet landscape
[1200-1800]: Desktop first
1800px +:     Big Desktop

$breakpoint argument choices:
- phone
- tab-port
- tab-land
- big-desktop

ORDER: Base + typography > general layout + grid > page layout > components

1em = 16px
 */

const mediaQueries = {
    phone: `(max-width: 37.25em)`, // 600px
    tabPort: `(max-width: 56.25em)`, // 900px
    tabLand: `(max-width: 75em)`, // 1200px
    bigDesktop: `(min-width: 112.5em)` // 1800px
}

export {mediaQueries}