
$( "#language" ).change(function() {
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition()
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = "#JSGF V1.0;";
var speechGrammarList = new SpeechGrammarList();
speechGrammarList.addFromString(grammar, 1);
recognition.grammars = speechGrammarList;

var lanvalue =  $('select[name=language]').val() 
console.log(lanvalue)
$('#textlanguage').val('');
$('#textlanguage').val(lanvalue);
var language = $('#textlanguage').val();
console.log(language)

recognition.lang = language;

var languademulti=$("")
var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

// recognition is started

recognition.onstart = function() {
    instructions.text("Voice Recognition is On")

   }

recognition.onspeechend = function() {
    instructions.text("No Activity")

   }

recognition.onerror = function() {
  instructions.text("Try Again")  
  }

recognition.onresult = function(event) {
   var current = event.resultIndex;
   var transcript = event.results[current][0].transcript
   content += transcript
   textbox.val(content)

}

$("#start-btn").click(function(event) {
  recognition.start()
})

textbox.on('input', function() {

 content = $(this).val()

})


});


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition()
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = "#JSGF V1.0;";
var speechGrammarList = new SpeechGrammarList();
speechGrammarList.addFromString(grammar, 1);
recognition.grammars = speechGrammarList;

recognition.lang = 'en-US';

var languademulti=$("")
var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

// recognition is started

recognition.onstart = function() {
    instructions.text("Voice Recognition is On")

   }

recognition.onspeechend = function() {
    instructions.text("No Activity")

   }

recognition.onerror = function() {
  instructions.text("Try Again")  
  }

recognition.onresult = function(event) {
   var current = event.resultIndex;
   var transcript = event.results[current][0].transcript
   content += transcript
   textbox.val(content)

}

$("#start-btn").click(function(event) {
  recognition.start()
})

textbox.on('input', function() {

 content = $(this).val()

})