$(document).ready(function() {
  var greetings = ' _       ____          __     ___                 __  __                   \n' +
    '| |     / / /_  ____ _/ /_   /   |  ________      \\ \\/ /___  __  __        \n' +
    '| | /| / / __ \\/ __ `/ __/  / /| | / ___/ _ \\      \\  / __ \\/ / / /        \n' +
    '| |/ |/ / / / / /_/ / /_   / ___ |/ /  /  __/      / / /_/ / /_/ /         \n' +
    '|__/|__/___/_/\\__,_/\\__/  /_/  |_/_/  ________    __/\\____/\\__,_/   __ ___ \n' +
    '| |     / /___  __________(_)__  ____/ /  /   |  / /_  ____  __  __/ //__ \\\n' +
    '| | /| / / __ \\/ ___/ ___/ / _ \\/ __  /  / /| | / __ \\/ __ \\/ / / / __// _/\n' +
    '| |/ |/ / /_/ / /  / /  / /  __/ /_/ /  / ___ |/ /_/ / /_/ / /_/ / /_ /_/  \n' +
    '|__/|__/\\____/_/  /_/  /_/\\___/\\__,_/  /_/  |_/_.___/\\____/\\__,_/\\__/(_)   \n\n';

  var config = {
    greetings: greetings,
    prompt: 'Mortys-Macbook ~/private/dontlook> ',
    onClear: function(term) {
      term.echo(greetings);
    }
  };

  var responses = [
    'What are you worried about?',
    'Yeah you don\'t have to worry about that.',
    'If it were me, I wouldn\'t even worry about that.',
    'What? What are you like crazy or something? Don\'t even worry about it!',
    'That\'s uh, I mean, that\'s not even a thing, so don\'t worry about it alright.',
    'So uh, yeah, I mean, I don\'t know. Just like don\'t worry about it ok?',
    'Oh geez, that\'s what you\'re worried about? Just let that one go.',
    'Relax, don\'t, uh, yeah don\'t worry about it.',
    'Yeah, so no, don\'t spend your time on that.',
    'Don\'t, I mean just, just don\'t, you know, just let it go or whatever. I\'m sure it\'s fine.',
    'Ok, that sounds like, I mean I don\'t want to alarm you, but you might want to see a doctor about that.'
  ];

  function interpreter(command, terminal) {
    var dontWorry = _.random(1, 10) < 4;
    command = _.trim(command).toLowerCase();

    if (command === 'help') {
      help(terminal);
    } else if (command === 'real fake doors') {
      terminal.echo('https://www.youtube.com/watch?v=pxbsV8QWGic');
    } else if(dontWorry) {
      terminal.echo('Don\'t even worry about it.');
    } else {
      terminal.echo(_.sample(responses));
    }

    terminal.echo('');
  }

  function help(terminal) {
    terminal.echo('Just tell me what you\'re worried about. I\'m here to help.');
  }

  $('#terminal').terminal(interpreter, config);
});