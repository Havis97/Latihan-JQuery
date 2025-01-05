// * seleksi html
// const el = $("p")
// console.log(el)
// const el = $("#text")
// console.log(el)

//* html()
// el.html("hello World")
// el.html("<h1>HELLO WORLD</h1>")

// *attr()
// const inp = $("input")
// inp.attr("type", "checkbox")

// *add remove class()
// el.addClass("red")
// el.addClass("blue")
// el.removeClass("blue")

// * css()
// inp.css("border", "1px solid red")
// inp.css({
//     border: "1px solid red",
//     marginLeft: "100px"
// })


// *DOM Event
// const el = $("#text")
// el.mouseenter(function () {
//     el.css("border", "1px solid red")
// });

// const inp = $("input")
// inp.focus(function () {
//     inp.css("border", "3px solid blue");
// });

const show = $("#show")
const hide = $("#hide")
const fadein = $("#fadein")
const fadeout = $("#fadeout")
const toogle = $("#toogle")
const div = $("div")

show.click(function () {
    div.show("slow");
});
hide.click(function () {
    div.hide("slow");
});
fadein.click(function () {
    div.fadeIn("slow");
});
fadeout.click(function () {
    div.fadeOut("slow");
});
toogle.click(function () {
    div.slideToggle();
});

