$(document).ready(function(a){var b=a("#instruction").first();a(".button").on("hover",function(){var c=a(this);b.html(c.html());a("#notes > p").hide();c.find(".note1").length&&a("#note1").show();c.find(".note2").length&&a("#note2").show();c.find(".note3").length&&a("#note3").show();c.find(".note4").length&&a("#note4").show()})});