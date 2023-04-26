var collapsible = document.querySelector('#navbarSupportedContent');

var menuItems = document.querySelectorAll('.nav-link');

menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    collapsible.classList.remove('show');
  });
});

    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var message = document.querySelector('#message').value;
        
        alert('Thank you for your message, ' + name + '. We will get back to you at ' + email + ' as soon as possible. Your message was: ' + message);
        
        form.reset();
    });