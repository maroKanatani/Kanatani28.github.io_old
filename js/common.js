var options = {
    strings: [
      "<i>Hello World!!&#x1f44b;</i>", 
      "I'm maroKanatani.&#x1f464;", 
      "I'm a software engineer.&#x1f4bb;", 
      "I'm Japanese.&#x1f363;",
      "I like to eat &#x1f355;.", // pizza
      "I like to drink &#x1f37b;.", // beer
      "I like to eat &#x1f35c;.", // ramen
      "I like to play &#x1f3b8;.", // guitar
      "I like to eat &#x1f36b;.", //chocolate
      "I like to read &#x1f4d6;.", // book
    ],
    typeSpeed: 35,
    loop: true,
    backSpeed: 35,
    backDelay: 2500,
    startDelay: 2500,
    smartBackspace: false,
};
var typed = new Typed('.typed', options);