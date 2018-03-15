$(function() {
  var d = new Date();
  setInterval(function() {
    d = new Date();
    var seconds = d.getSeconds();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var sdegree = seconds * 6;
    var hdegree = hours * 30 + (mins / 2);
    var mdegree = mins * 6;

    //set dark background for night time
    if (hours > 18 || hours < 6) {
      $('body').attr('id', 'night');
    }
    rotateHand('#sec', sdegree);
    rotateHand('#hour', hdegree);
    rotateHand('#min', mdegree);
  }, 1000);


  function rotateHand(element,angle){
      $(element).css({
        "transform": "rotate(" + angle + "deg)"
      });
  }

  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one"]
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var date = [days[d.getDay()], d.getDate(), d.getMonth() + 1, d.getFullYear()];
  var number_i = date[1];
// numbers[number_i - 1]
  $('#date').append(date[1]);
  $('#year').append(romanize(date[3]));

  for (var i = 0; i < days.length; i++) {
    if (i <= d.getDay()) {
      $('#day').append('<div class="day active"></div>');
    } else {
      $('#day').append('<div class="day"></div>');
    }
  }

  for (var j = 0; j < date[2]; j++) {
    $('#month').append('<div class="month"></div>');
  }

  function romanize(num) {
    if (!+num)
      return NaN;
    var digits = String(+num).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
      ],
      roman = "",
      i = 3;
    while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }

});
