function displayItem(font, type) {

  var codeValue = font.replace(/ /g, '+');

  

  $('#'+type+'List')

    .append('<div class="card"><h3 class="card__heading" style="font-family: \''+font+'\'">'+font+'</h3><p class="card__sample" style="font-family:\''+font+'\'">Danish liquorice dragée cupcake liquorice. Tootsie roll dessert dragée jujubes wafer carrot cake. Cheesecake liquorice tart sugar plum.</p><h4>Add this to the top of your CSS pane:</h4><code class="code code--font-family">@import url(https://fonts.googleapis.com/css?family='+codeValue+');</code><h4>Add this to your CSS rule:</h4><code class="code code--font-family">font-family: \'' + font + '\';</code></div>');

}

// Font Lists

var fonts = {

  display: ['Bungee','Indie Flower', 'Passion One', 'Lobster', 'Shadows Into Light', 'Pacifico', 'Amatic SC', 'Dancing Script', 'Sigmar One', 'Bangers', 'Chewy', 'Cherry Swash'],

  sans: ['Open Sans', 'Roboto', 'Lato', 'Source Sans Pro', 'Raleway', 'Ubuntu', 'Droid Sans', 'Arimo', 'PT Sans Narrow', 'Noto Sans'],

  serif: ['Slabo', 'Lora', 'Roboto Slab', 'Droid Serif', 'PT Serif', 'Bitter', 'Playfair Display', 'Arvo', 'Noto Serif', 'Libre Baskerville'],

  monospace: ['Source Code Pro', 'Inconsolata', 'VT323', 'Anonymous Pro', 'Cutive Mono']

};

// Import Google Fonts

var importFonts = '';

$.each(fonts, function(index, type) {

  $.each(type, function(index, family) {

    family = family.replace(/ /g, '+');

    importFonts += family + '|';

  });

});

$('head').append(

  '<link href="https://fonts.googleapis.com/css?family=' + importFonts + '" rel="stylesheet" type="text/css">'function displayItem(font, type) {
  var codeValue = font.replace(/ /g, "+");

  $("#" + type + "List").append(
    '<div class="card"><h3 class="card__heading" style="font-family: \'' +
      font +
      "'\">" +
      font +
      '</h3><p class="card__sample" style="font-family:\'' +
      font +
      '\'">Danish liquorice dragée cupcake liquorice. Tootsie roll dessert dragée jujubes wafer carrot cake. Cheesecake liquorice tart sugar plum.</p><h4>Add this to the top of your CSS pane:</h4><code class="code code--font-family">@import url(https://fonts.googleapis.com/css?family=' +
      codeValue +
      ');</code><h4>Add this to your CSS rule:</h4><code class="code code--font-family">font-family: \'' +
      font +
      "';</code></div>"
  );
}

// Font Lists
var fonts = {
  display: [
    "Bungee",
    "Indie Flower",
    "Passion One",
    "Lobster",
    "Shadows Into Light",
    "Pacifico",
    "Amatic SC",
    "Dancing Script",
    "Sigmar One",
    "Bangers",
    "Chewy",
    "Cherry Swash"
  ],
  sans: [
    "Open Sans",
    "Roboto",
    "Lato",
    "Source Sans Pro",
    "Raleway",
    "Ubuntu",
    "Droid Sans",
    "Arimo",
    "PT Sans Narrow",
    "Noto Sans"
  ],
  serif: [
    "Slabo",
    "Lora",
    "Roboto Slab",
    "Droid Serif",
    "PT Serif",
    "Bitter",
    "Playfair Display",
    "Arvo",
    "Noto Serif",
    "Libre Baskerville"
  ],
  monospace: [
    "Source Code Pro",
    "Inconsolata",
    "VT323",
    "Anonymous Pro",
    "Cutive Mono"
  ]
};

// Import Google Fonts
var importFonts = "";
$.each(fonts, function (index, type) {
  $.each(type, function (index, family) {
    family = family.replace(/ /g, "+");
    importFonts += family + "|";
  });
});
$("head").append(
  '<link href="https://fonts.googleapis.com/css?family=' +
    importFonts +
    '" rel="stylesheet" type="text/css">'
);

// Display
$.each(fonts["display"], function (index, value) {
  displayItem(value, "display");
});

// Sans
$.each(fonts["sans"], function (index, value) {
  displayItem(value, "sans");
});

// Serif
$.each(fonts["serif"], function (index, value) {
  displayItem(value, "serif");
});

// Monospace
$.each(fonts["monospace"], function (index, value) {
  displayItem(value, "monospace");
});


);

// Display

$.each(fonts['display'], function(index, value) {

  displayItem(value, 'display');

});

// Sans

$.each(fonts['sans'], function(index, value) {

  displayItem(value, 'sans');

});

// Serif

$.each(fonts['serif'], function(index, value) {

  displayItem(value, 'serif');

});

// Monospace

$.each(fonts['monospace'], function(index, value) {

  displayItem(value, 'monospace');

});
