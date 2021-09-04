(function () {
  var allQuestions = [
    {
      question: "Apa nama planet yang terjauh jaraknya dari matahari?",
      options: ["Bumi", "Saturnus", "Neptunus", "Uranus"],
      answer: 2,
    },
    {
      question: " Mengapa planet-planet dalam tata surya tidak saling bertabrakan?",
      options: ["Karena punya rumah masing-masing", "Karena jaraknya jauh", "Karena matahari mempunyai gravitasi terhadap planet serta planet beredar pada orbitnya", "Karena Matahari Beredar pada orbitnya"],
      answer: 2,
    },
    {
      question: "Bagaimana cara manusia mempelajari tata surya?",
      options: ["Supranatural", "Penelitian", "Berkunjung ke planet", "Mata Batin"],
      answer: 1,
    },
    {
      question: "Berapa jarak planet merkurius ke matahari?",
      options: ["108 jt Km", "57,9 jt Km", "56.9 jt Km", "228 jt Km"],
      answer: 1,
    },
    {
      question: "matahari dan kumpulan benda-benda langit yang mengelilinginya. pengertian dari?",
      options: ["Galaksi", "Planet", "Luar Angkasa", "Tata surya"],
      answer: 3,
    },
    {
      question: "Phobos dan Deimos merupakan satelit dari planet?",
      options: ["Bumi", "Jupiter", "Mars", "Venus"],
      answer: 2,
    },
    {
      question: "Batu-batuan kecil yang melayang di Tata Surya yaitu?",
      options: ["Asteroid", "Meteor", "Komet", "Meteoroid"],
      answer: 3,
    },
    {
      question: " Kenapa Pluto bukan bagian dari Planet?",
      options: ["Karena tidak dapat membersihkan lingkungan di sekitar orbitnya", "Karena tidak mengelilingi matahari", "karena tidak berbentuk bulat", "memiliki gravitasi yang sangat kuat"],
      answer: 0,
    },
    {
      question: " planet yang memiliki cincin yang indah di tata surya?",
      options: ["Venus", "Saturnus", "Neptunus", "Uranus"],
      answer: 1,
    },
    {
      question: "Planet manakah yang tidak memiliki satelit?",
      options: ["Bumi dan Merkurius", "Merkurius dan Venus", "Venus dan Jupiter", "Uranus dan Neptunus"],
      answer: 1,
    },
    {
      question: "... adalah Objek langit yang bersinar karena memantulkan cahaya dan bergerak mengelilingi matahari?",
      options: ["Planet", "Galaksi", "Tata surya", "Luar angkasa"],
      answer: 0,
    },
    {
      question: "Planet manakah yang dapat dikunjungi oleh penelitian melalui robot?",
      options: ["Venus", "Jupiter", "Mars", "Uranus"],
      answer: 2,
    },
    {
      question: "Dimanakah Lubang Hitam berada?",
      options: ["Galaksi Black eye", "Galaksi Whirlpool ", "Galaksi Bima Sakti", "Galaksi M87"],
      answer: 3,
    },
    {
      question: "Kenapa Bulan Terbentuk?",
      options: ["Karena diciptakan oleh Allah Swt", "Karena terjadi tubrukan antara Bumi dan Mars", "Karena bulan satelit bumi", "Karena terjadi tubrukan antara Bumi dan Venus"],
      answer: 1,
    },
    {
      question: "... Warna biru muda memiliki cincin, suhu antara -194C sampai -271C dan memiliki 27 sateliet.",
      options: ["Bumi", "Saturnus", "Neptunus", "Uranus"],
      answer: 3,
    },
  ];

  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $("#quiz");

  nextQuestion();

  $("#next").click(function () {
    chooseOption();
    if (isNaN(selectOptions[quesCounter])) {
      alert("Please select an option !");
    } else {
      quesCounter++;
      nextQuestion();
    }
  });

  $("#prev").click(function () {
    chooseOption();
    quesCounter--;
    nextQuestion();
  });

  function createElement(index) {
    var element = $("<div>", { id: "question" });
    var header = $("<h2>Question No. " + (index + 1) + " :</h2>");
    element.append(header);

    var question = $("<p>").append(allQuestions[index].question);
    element.append(question);

    var radio = radioButtons(index);
    element.append(radio);

    return element;
  }

  function radioButtons(index) {
    var radioItems = $("<ul>");
    var item;
    var input = "";
    for (var i = 0; i < allQuestions[index].options.length; i++) {
      item = $("<li>");
      input = '<input type="radio" name="answer" value=' + i + " />";
      input += allQuestions[index].options[i];
      item.append(input);
      radioItems.append(item);
    }
    return radioItems;
  }

  function chooseOption() {
    selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
  }

  function nextQuestion() {
    quizSpace.fadeOut(function () {
      $("#question").remove();
      if (quesCounter < allQuestions.length) {
        var nextQuestion = createElement(quesCounter);
        quizSpace.append(nextQuestion).fadeIn();
        if (!isNaN(selectOptions[quesCounter])) {
          $("input[value=" + selectOptions[quesCounter] + "]").prop("checked", true);
        }
        if (quesCounter === 1) {
          $("#prev").show();
        } else if (quesCounter === 0) {
          $("#prev").hide();
          $("#next").show();
        }
      } else {
        var scoreRslt = displayResult();
        quizSpace.append(scoreRslt).fadeIn();
        $("#next").hide();
        $("#prev").hide();
      }
    });
  }

  function displayResult() {
    var score = $("<p>", { id: "question" });
    var correct = 0;
    for (var i = 0; i < selectOptions.length; i++) {
      if (selectOptions[i] === allQuestions[i].answer) {
        correct++;
      }
    }
    score.append("You scored " + correct + " out of " + allQuestions.length);
    return score;
  }
})();
