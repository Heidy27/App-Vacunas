
function abrirformulario(){
    $('#contentinicio').removeClass("d-block");
    $('#contentformregistro').addClass("d-none")
    $('#contentform').removeClass("d-none")
    $('#contentinicio').addClass("d-none");
    $('#contentform').addClass("d-block")
}
function abririnicio(){
    $('#contentform').removeClass("d-block");
    $('#contentformregistro').addClass("d-none")
    $('#contentinicio').removeClass("d-none")
    $('#contentform').addClass("d-none");
    $('#contentinicio').addClass("d-block")
}
function abrirregistro(){
    $('#contentform').removeClass("d-block");
    $('#contentinicio').addClass("d-none")
    $('#contentformregistro').removeClass("d-none")
    $('#contentform').addClass("d-none");
    $('#contentformregistro').addClass("d-block")
}
function abrircontac(){
    $('#contentinicio').removeClass("d-block");
    $('#contentform').addClass("d-none")
    $('#contentcontac').removeClass("d-none")
    $('#contentformregistro').addClass("d-none");
    $('#contentcontac').addClass("d-block")
}