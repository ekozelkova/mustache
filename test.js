/**
 * Created by katekozelkova on 11/04/16.
 */


function loadUser() {
    var template = $('#template').html();
    Mustache.parse(template);   // optional, speeds up future uses
    var rendered = Mustache.render(template, {name: "Luke"});
    $('#target').html(rendered);
}