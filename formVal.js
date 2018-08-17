$(document).ready(function() {
  $("input#submit").on('click', function() {
    let name = $('#name')
    let email = $('#email')
    let phone = $('#phone')
    let message = $('#message')

    let required = [name, email, phone]

    for( let i = 0; i < required.length; i++) {
      if (required[i].val() == "") {
        $(message).text("Please Fill Out Required Fields").addClass('warning');
        required[i].prev().addClass('warning')
      }else {
        required[i].removeClass('warning')
      }
    }

    if (!$("#form label").hasClass('warning')) {
      $("#form")[0].remove()
      $("#pre-form h2").text("Thanks for your feedback!")
    }
  })
})
