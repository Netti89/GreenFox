let names=['Greta','Lora','Benett','Netti'];

names.forEach(function (name) {$('ul').append(name);})

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  function myAdditionalFunction () 
  {$('ul').append(`<h1>${additionalBlock.title}<h1>`);
   $('ul').append(`<p>${additionalBlock.text}<p>`)
  }
  
  myAdditionalFunction()

  