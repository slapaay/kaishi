# kaishi
**Live Demo**: [here](https://slapaay.github.io/kaishi/)
This startpage is inspired by the need to use the internet fast. It makes use of only using the keyboard to arrive to links.
It uses vim-like keybinds which allows for quick and easy navigation.

![yes](/git_resources/image01.png)

## Controls
---
### Normal Mode
- Pressing `i` changes you into **insert mode**

### Insert Mode
- Pressing `esc` changes you back into **normal mode** if nothing is written, if text is entered it changes you into **selection mode**

### Selection Mode
- Pressing `esc` will change to **normal mode**
- Pressing `i` will change you into **insert mode**
- Pressing `hjkl` or the arrow keys will change the selection
- Pressing `return` will redirect to the selection selected

#### Prefixes
While in **insert mode** the following prefixes can be typed
- Typing `u` and typing a url will bring you to the url
##### Default Prefixes
- Typing `g` will redirect to google with the query
- Typing `d` will redirect to duckduckgo with the query
- Typing `y` will redirect to youtube with the query
- Typing `a` will redirect to 9anime with the query

For example: typing `g why am i so lonely` will redirect to google with the query `why am i so lonely`

![Picture of a search](/git_resources/func01.png)

## Config
---
Of course having some configuration is necessary, so I have a file that helps you change basic options without needing to change the base files.

### config.json
This is the main file where most of the configurations will be changed.

#### title
This is the title of the website that is displayed in the tab name
#### greet
This is used for the splash text
#### color\_bg
This is the background color. Accepts a hex value
#### color\_fg
This is the foreground color which is used for the text. Accepts a hex value.
#### default\_logo
This is the logo that is shown at the top of the page. This accepts the file path to the location.
#### search
This is where the search prefixs can be added.
##### url
The base url for the website
##### query
What the website uses as the variable for searching
##### alias
The two characters typed before the query
##### color\_bg
What the background color is changed to
##### color\_fg
What the foreground color is changed to
##### icon
What to change the icon to, accepts a path.

##### Example
```
"url": "https://duckduckgo.com/",
"query": "q",
"alias": "d\u0020",
"color_bg": "#561805",
"color_fg": "#FAFAFA",
"icon": "images/duckduckgo_logo.png"
```

#### sites
The list of sites the page should suggest when typing a query.
Follows a `"name": "url"` standard.
For example: `"Reddit": "https://reddit.com"`

#### quotes
The list of quotes that are randomly displayed at the bottom of the page.
##### quote
The quote...
##### author
The author of the quote
##### Example
```
"quote": "But you can be better you silly duck",
"author": "7222918"
```

### index.css
The style of the website, edit this however you want

### index.html
The base layout of the website, change this to your liking.

## Example Designs
![\[The Wired\] example design](/git_resources/example01.png)

## Other Info
Look at [this](https://luke-baker.github.io/) for how to set this as the new tab page.
Y es I know this code is absolute garbage, I can't be bothered working on it to make it more nicer looking, it just werks.
