"format es6";

import $ from "./jquery";
import { logo } from "./illuminati-logo";
import Firebase from "./firebase";
import { cheers } from "blackmagic";

let fb = new Firebase("https://intense-fire-4619.firebaseio.com");
let $body = $("body");

$body.append(`<div><code>${ logo }</code><div><br>`);
$body.append(`<button id="finish" style="width: 100vw; height: 40vh;">Finish talk<Button>`);
$body.append(`<button id="cheers" style="width: 100vw; height: 40vh;">Cheers<Button>`);

$("#finish").click(function(e) {
    $(this).hasClass("finished")? fb.set({ done: "Is this finished?" }) : fb.set({ done: "That's it! Thanks :)" });
    $(this).toggleClass("finished");
});

$("#cheers").click( e => $("div").html(`<h1>${ cheers }</h1>`));
fb.on("child_changed", data => $("div").html(`<h1>${ data.val() }</h1>`));
