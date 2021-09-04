$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 0) {
      $(".scroll-top").show();
    } else {
      $(".scroll-top").hide();
    }

    // scroll spy

    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");
      let top = $(window).scrollTop();

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $("navbar").find('[href="#${id}"]').addClass("active");
      }
    });
  });

  // smooth scroll

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
  // Alert use sweetalert
  document.querySelector(".btn_biru").addEventListener("click", function () {
    Swal.fire("SELAMAT DATANG", "Semoga dapat menambah ilmu pengetahuanmu tentang Tata Surya");
  });
  // alert in quizz
  $(document).ready(function () {
    $(".btn_movie").click(function () {
      Swal.fire("Terima Kasih Sudah Mengisi Quizzz");
    });
  });
  // video page
  document.querySelectorAll(".video-container video").forEach((vid) => {
    vid.onclick = () => {
      document.querySelector(".popup").style.display = "block";
      document.querySelector(".popup video").src = vid.getAttribute("src");
    };
  });
  document.querySelector(".popup span").onclick = () => {
    document.querySelector(".popup").style.display = "none";
  };
});

// Gallery View More

// Matahari
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var dataTitle = $(this).attr("data-title");
    var dataDescription = $(this).attr("data-description");
    $(".modal_header").append("Info Tentang Matahari");
    $(".mb_scroll").append(
      "Tata Surya terbagi menjadi Matahari, empat planet bagian dalam, sabuk asteroid, planet bagian luar, dan di bagian terluar adalah Sabuk Kuiper dan piringan tersebar. Matahari adalah pusat tata surya. Matahari merupakan sebuah bintang yang paling dekat dengan bumi. Seperti bintang lainnya, Matahari merupakan sebuah benda panas yang tersusun oleh berbagai gas yang bertekanan tinggi. Matahari adalah raksasa jika dibandingkan dengan planet yang terbesar sekali pun. Diameter Matahari 109 kali diameter Bumi, yaitu 1,4 juta km. Walaupun Matahari itu berbentuk gas, beratnya lebih dari 300.000 kali berat Bumi. Suhu permukaan matahari 6.000 derajat celsius yang dipancarkan ke luar angkasa hingga sampai ke permukaan bumi, sedangkan suhu inti sebesar 15-20 juta derajat Celsius. Matahari memancarkan energi yang sangat besar dalam bentuk gelombang elektromagnet. Gelombang elektromagnet tersebut adalah gelombang cahaya tampak, sinar X, sinar gamma, sinar ultraviolet, sinar inframerah, dan gelombang mikro."
    );
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[data-title]").multipleModal();

// merkurius
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var tulisanTitle = $(this).attr("tulisan-title");
    var tulisanDescription = $(this).attr("tulisan-description");
    $(".modal_header").append("Info Tentang Merkurius");
    $(".mb_scroll").append(
      "Merkurius ini termasuk dalam deretan planet yang paling sering muncul di langit Bumi. Saking seringnya, orang-orang dari peradaban kuno pun mengenalinya. Bangsa Sumeria yang hidup di abad ke 2 SM sudah menyebutkan tentang planet Merkurius dalam catatan peninggalannya. Begitu pun dengan bangsa Babylonia yang menyebut Merkurius dengan nama Nabu. Meski begitu, Galileo Galilei jadi orang pertama yang melakukan pengamatan pada planet ini pada abad ke 17 dengan mikroskop buatannya. Lalu ilmuan Amerika pun menghitung rotasinya pada 1962. Dan NASA mengirimkan Mariner 10 pada tahun 1974 dan MESSENGER pada 2008 untuk menelitinya. Urutan planet yang pertama ada planet Merkurius. Planet ini merupakan planet yang paling dekat dengan matahari dan hanya memiliki diameter 4.862km sehingga merupakan planet terkecil dalam tata surya serta membutuhkan waktu 88 hari untuk berevolusi. CIRI-CIRI :1. planet yang dapat langsung terlihat dari bumi dan cenderung seperti bintang yang berwanra abu-abu, 2. Suhu di siang hari mencapai 430˚C, tetapi di malam hari mencapai -170˚C, 3. bawah planet Merkurius tidak memiliki atmosfer dan satelit. Bagaimana jika Manusia hidup di Planet Merkurius ??? tentu akan menjadi tugas yang sulit untuk manusia itu dikarenakan Planet Merkurius planet yang paling terdekat dengan Matahari sehingga planet ini selalu mengalami perubahan suhu ekstrim dan hampir tidak memiliki atmosfer, Permukaan Merkurius sangat mirip dengan permukaan Bulan yaitu terdapat banyak kawah dengan berbagai ukuran, Merkurius mempunyai gaya gravitasi sekitar 38% dari gravitasi Bumi yang berarti kita bisa melompat tiga kali lebih tinggi sehingga sangat mustahil jika Manusia hidup di Planet Merkurius. "
    );
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[tulisan-title]").multipleModal();

// Venus
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var iniTitle = $(this).attr("ini-title");
    var iniDescription = $(this).attr("ini-description");
    $(".modal_header").append("Info Tentang Venus");
    $(".mb_scroll").append(
      "catatan astronomi tertua yang membahas tentang Venus adalah milik bangsa Babylonia. Catatan itu ditulis tahun 1600 SM dan membahas tentang kemunculan Venus di langit selama 21 tahun. Ratusan tahun berlalu, Galileo Galilei kemudian mengamati Venus tahun 1610 dengan teleskop sederhana. Bahkan meski pengamatannya tidak sempurna, apa yang dilakukan Galileo pada akhirnya membantu Nicolaus Copernicus dalam menentang pandangan yang menyebutkan bahwa Bumi adalah pusat Tata Surya. Urutan planet yang kedua ada planet Venus atau sering disebut sebagai bintang fajar. Planet ini terletak di antara orbit Merkurius dan orbit Bumi, memiliki garis tengah 12.100km dan merupakan planet terdekat dengan Bumi serta membutuhkan waktu 225 hari untuk berevolusi. CIRI-CIRI: 1.Berwarna putih dan memiliki ukuran menyerupai bumi, 2. Memantulkan cahaya matahari sehingga nampak terang, 3. Venus memiliki atmosfer sangat tebal dari karbon dioksida dan tidak memiliki satelit. Bagaimana jika Manusia hidup di Planet Venus ??? Planet Venus ini memiliki ukuran, massa, maupun materi yang membentuk Venus sama seperti dengan Bumi. meskipun venus memiliki atmosfer yang tebal namun atmosfer di Venus di dominasi oleh asam sulfur yang sangat beracun dan juga dilapisin awan asam sulfat yang menyelubungi Venus. awan ini memantulkan radiasi yang dapat menciptakan efek rumah kaca yang tak terkendali dan bertanggungjawab atas suhu Venus yang luar biasa. Planet Venus memiliki suhu yang lebih panas dari Merkurius. kenapa Venus sangat panas dikarenakan atmosfernya tebal dan mengandung karbondioksida. hal itu tidak mungkin bagi manusia bisa hidup di Planet Venus. Permukaan Venus juga terdapat gunung, lembah, dan daratan tinggi. 1 hari di Venus = 1 tahun di Bumi. hal tersebut terjadi karena waktu yang dibutuhkan Venus untuk mengelilingi matahari lebih cepat dibandingkan kecepatan rotasinya. dan kecepatan angin di Venus mencapai 724 km per jam. Planet venus disebut juga dengan Planet Mematikan.  "
    );
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[ini-title]").multipleModal();

// Bumi
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var kitaTitle = $(this).attr("kita-title");
    var kitaDescription = $(this).attr("kita-description");
    $(".modal_header").append("Info Tentang Bumi");
    $(".mb_scroll").append(
      "Di urutan planet ketiga ada planet Bumi. Planet Bumi merupakan satu-satunya planet di tata surya yang memiliki kehidupan dan permukaannya terdiri dari lautan dan daratan, Jarak Rata-Rata dengan Matahari 149,6 juta kilometer, Jarak Terdekat dengan Matahari 147,098 juta km, Jarak Terjauh 152,098 juta km, berdiameter 12.750km dan membutuhkan waktu 365 hari (1 tahun) berevolusi. CIRI-CIRI: 1. Berwarna biru dan putih serta planet terbesar dalam golongan planet kebumian, 2. Suhu pada permukaan bumi minimal -89˚C, maksimal 57˚C dan rata-rata 15˚C, 3. Bumi memiliki atmosfer yang tersusun dari nitrogen, oksigen, dan gas lain serta memiliki 1 buah satelit alami bernama bulan."
    );
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[kita-title]").multipleModal();

// Mars
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var aduhTitle = $(this).attr("aduh-title");
    var aduhDescription = $(this).attr("aduh-description");
    $(".modal_header").append("Info Tentang Mars");
    $(".mb_scroll").append(
      "Planet ini sudah dikenali setidaknya selama 4.000 tahun oleh bangsa-bangsa kuno dunia sebagai bintang merah. Pangkat Mars sendiri baru naik tahun 1543, setelah Nicolaus Copernicus mendalilkan bahwa Mars adalah sebuah planet, sekaligus juga mengukuhkan bahwa matahari adalah pusat Tata Surya. Beberapa tahun berlalu, seorang astronom Denmark yang bernama Tycho Brahe berhasil menemukan posisi Mars secara akurat tahun 1576. Setelah posisi Mars diketahui, pada tahun 1609, Johannes Kepler kemudian mengasumsikan bahwa Mars dan planet lain memiliki orbit berbentuk elips dan bukannya bulat seperti yang dipercayai oleh para astronom saat itu. Planet Mars merupakan planet urutan keempat dalam tata surya dan memiliki julukan planet merah, memiliki diameter 6.779km dan melakukan revolusi selama 687 hari. CIRI-CIRI: 1.Berwarna kemerah-merahan karena kandungan besi oksida di permukaan mars, 2. Suhu rata-rata pada permukaannya adalah -46C, 3. Mars memiliki atmosfer yang tersusun dari karbondioksida, nitrogen, argon, oksigen, dan uap air serta memiliki 2 satelit, yaitu phobos dan demos. Bagaimana jika Manusia hidup di Planet Mars ??? Permukaan Mars terlihat seperti padang pasir yang ada di Bumi kita. Periode rotasi dan siklus musim di Planet Mars mirip dengan Bumi sekitar 24jam 39menit. akan tetapi jarak yang jauh dari matahari membuat waktu revolusi Mars menjadi sangat-sangat jauh lebih panjang daripada Bumi. sehingga 1 tahun di Mars = 608 tujuh hari di Bumi. Para Ilmuwan terus meneliti tentang Planet Mars, mars memiliki banyak sekali wilayah bebatuan kawah, gunung berapi, penanggurun, dan kutub es yang mirip seperti Bumi. Gunung tertinggi di Mars yaitu Olympus melebihi ketinggian Everest. terdapat lembah terbesar yaitu Valles Marineris. menurut penelitian keadaan Planet Mars tidak cukup ideal untuk ditinggali oleh manusia dikarenakan suhu dan tekanan udara yang cukup rendah dan ditambah komposisi udara yang sebagian besar adalah karbondioksida hal tersebut menyebabkan manusia harus menggunakan alat bantu pernafasan. para penelitian melakukan misi robot yang bernama Curiosity yang ditugaskan dari Bumi untuk menjelajahi Planet Mars dikirim pada tanggal 6 agustus tahun 2012. ditemukan senyawa organik di Mars dan menemukan bekas aliran kuno dipermukaan Planet Merah itu. dan penelitian belum menemukan tanda-tanda kehidupan di Planet Mars.  "
    );
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[aduh-title]").multipleModal();

// Jupiter
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var selowTitle = $(this).attr("selow-title");
    var selowDescription = $(this).attr("selow-description");
    $(".modal_header").append("Info Tentang Jupiter");
    $(".mb_scroll").append(
      "Jupiter boleh saja berjarak 858,1 juta km dari Bumi, tapi ukurannya yang besar membuat penampakan planet raksasa ini terlihat dari Bumi kita. Sama seperti Venus atau Merkurius, Galileo Galilei menjadi orang pertama yang mengamati Jupiter pada tahun 1610 dengan teleskop buatannya. Galileo Galilei bukan hanya menemukan Jupiter, tapi juga empat satelitnya yaitu Io, Europa, Ganymede dan Callisto. Untuk menghargai jasa-jasanya, para astronom selalu menyebut empat bulan raksasa milik Jupiter itu dengan nama Galilea Moons. Di urutan planet kelima ada planet yang paling besar diantara planet lainnya di tata surya. Planet tersebut adalah  Jupiter, planet ini memiliki diameter 139.822km dan membutuhkan waktu revolusi selama 11 tahun. CIRI-CIRI: 1. Berwarna orange dan putih serta memiliki cincin tipis yang terbuat dari debu, 2. Suhu permukaannya berkisar antara -108˚C sampai -158˚C, 3.Jupiter memiliki atmosfer terbesar dalam tata surya dan memiliki 67 satelit. Bagaimana jika Manusia hidup di Planet Jupiter ??? Planet Jupiter merupakan Planet raksasa, mendarat di Planet Jupiter sangatlah mustahil. Kenapa mustahil? karena Jupiter merupakan sebuah Planet Gas bukan suatu objek yang padat dan komposisi Jupiter terdiri dari Gas Helium dan Hidrogen. di Jupiter kita akan terus melayang-layang jatuh ke dalam sampai mugkin kemudian akan sampai ke inti planet Jupiter yang sangat panas. Planet Jupiter juga merupakan Planet yang mematikan. Badan Antariksa Serikat atau NASA mengungkapkan kalau suhu permukaan di Jupiter 145 derajat Celcius jika semakin ke dalam akan jauh sangat panas. suhu di inti Jupiter melebihi kepanasan dari Matahari. Rotasi di Jupiter memiiliki rotasi tercepat jika 1 hari 24 jam di Bumi = 1 hari 10 jam di Jupiter."
    );
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[selow-title]").multipleModal();

// Saturnus
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var bisaTitle = $(this).attr("bisa-title");
    var bisaDescription = $(this).attr("bisa-description");
    $(".modal_header").append("Info Tentang Saturnus");
    $(".mb_scroll").append(
      "planet luar seperti Saturnus pun tidak bisa luput dari pengamatan Galileo Galilei. Astronom asal Italia ini pertama kali melihat Saturnus pada 1610. Melalui teleskop buatannya, alih-alih menggambar Saturnus lengkap dengan cincin, Galileo justru menggambar Saturnus sebagai tiga planet terpisah. Kekeliruan Galileo akhirnya diperbaiki tahun 1659 oleh seorang astronom Belanda, Christiaan Huygens. Jadi bukannya bertubuh tiga, Huygens justru menyimpulkan Saturnus memiliki cincin yang mengelilinginya. Urutan planet keenam diisi oleh planet Saturnus. Planet ini dikelilingi oleh cincin raksasa dengan diameter 120.000km dan berevolusi selama 29,5 tahun. CIRI-CIRI: 1. Berwarna kuning pucat dan memiliki cincin yang terbuat dari gumpalan es, 2. Suhu permukaannya berkisar antara -136˚C hingga -185˚C, 3. Saturnus memiliki atmosfer yang tersusun dari amonia dan metana serta memiliki 56 satelit. Bagaimana jika Manusia hidup di Planet Saturnus ??? Saturnus merupakan plante terbesar kedua setelah Jupiter. Komposisi atmosfer Saturnus dan Jupiter sama yaitu Gas Heluim & Hidrogen. Sebenarnya sangat mustahil manusia untuk terjun di Saturnus. Saturnus memiliki hari terpendek kedua di Tata Surya. 1 hari di Satrunus hanya 10,7 jam untuk satu kali rotasinya namun 1 tahun di Saturnus = 29,4 tahun di Bumi. Permukaan di Saturnus sebagian besar adalah Gas dan cairan yang berputar saling melengkapi secara mekanisme pesawat yang datang akan hancur lebur karena tekanan yang sangat tinggi. Angin Saturnus 5 kali lebih kuat dari angin Topan di Bumi. ini udah jelas bahwa manusia akan hancur jika tinggal di Saturnus. Sistem cicin Saturnus memanjang hingga 282.000 km dan ketebalan vertikalnya sekitar 20 hingga 30 meter. ada kemungkinan besar bebatuan yang ada dicicin Saturnus tertarik kedalam dan menghantam permukaan Saturnus.  "
    );
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[bisa-title]").multipleModal();

// Uranus
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var smgtTitle = $(this).attr("smgt-title");
    var smgtDescription = $(this).attr("smgt-description");
    $(".modal_header").append("Info Tentang Uranus");
    $(".mb_scroll").append(
      "Info Tentang Uranus Berbeda dengan lima planet sebelumnya yang bisa diamati oleh mata telanjang atau dengan teleskop sederhana milik Galileo, Uranus berjarak terlalu jauh untuk bisa diamati dengan mudah.  Uranus baru benar-benar ditemukan pada 13 Maret 1781 oleh Sir William Herschel dengan menggunakan teleskop. Awalnya, Herschel menganggap Uranus adalah komet, tapi setelah diamati lebih lanjut, William Herschel yakin bahwa itu adalah planet. Atas jasanya dalam menemukan Uranus, Raja George III pun mengangkat William Herschel dari seorang musisi jadi astronom istana. Ketujuh ada planet Uranus. Jika kamu ingin melihat planet ini, kamu dapat melihatnya dengan mata telanjang, berdiameter 51.1118km dan berevolusi selama 84 tahun. CIRI-CIRI: 1. Berwarna biru muda dan memiliki cincin unik yang melingkari planet secara vertikal, 2. Suhu permukaannya berkisar antara -194˚C sampai -271˚C, 3. Uranus memiliki stmosfer yang tersusun dari gas hidrogen, helium, metana, dan es serta memiliki 27 satelit. Bagaimana jika Manusia hidup di Planet Uranus ??? Planet Uranus juga merupakan Planet Gas Permukaan Planet ini tidak memiliki permukaan yang padat ataupun solid jika kita mendarat di Uranus kita akan langsung jatuh seperti di jurang dikarenakan permukaannya yang tidak padat. Uranus juga memiliki cincin tetapi sedikit redup , dan memiliki hembusan angin hingga mencapai 900km per jam. akibat LDR dengan matahari yang mempunyai jarak yang sangat jauh Planet ini memiliki suhu yang sangat dingin. Keadaan di Planet uranus juga sangat sangat Gelap. Uranus diketahui terdapat lautan ataupun samudra yang memunyai kedalaman yang tak terhingga. bahkan bisa dikatakan 2ribu kali lebih dalam dari samudra pasifik di Bumi kita. menurut para ilmuan pada wilayah lautan atau samudera memiliki sekitr 60% berisikan cairan panas metana dan amonia. di Planet Uranus juga terdapaat adanya hujan Berlian, tetapi hanya bisa lewat dengan mimpi karena sangat mustahil. jadi dengan ini kita sangat tidak mungkin tinggal di Planet Uranus , jangankan tinggal mendarat aja akan sangat mustahil. "
    );
    $(".mb_scroll").append("");
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[smgt-title]").multipleModal();

// Neptunus
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var yukTitle = $(this).attr("yuk-title");
    var yukDescription = $(this).attr("yuk-description");
    $(".modal_header").append("Info Tentang Neptunus");
    $(".mb_scroll").append(
      "Sama seperti planet Merkurius, dan Venus, mencari penemu Neptunus tidaklah mudah. Bukan karena planet ini terkenal, melainkan karena ada dua astronom berbeda yang menemukannya di waktu yang sama. Mereka adalah Urbain Jean Joseph Le Verrier dari Prancis, dan John Couch Adams dari Inggris. Berawal dari orbit Uranus yang aneh, para astronom mulai berspekulasi tentang keberadaan satu planet lain yang berusaha menarik Uranus lebih dekat dengannya. Le Verrier dan Adams kemudian berusaha menemukan planet misterius ini. Yang unik, keduanya berhasil menemukan planet kedelapan ini melalui perhitungan matematika. Pada akhirnya, Neptunus resmi ditemukan pada 23 September 1846. Urutan planet terakhir ditempat oleh planet Neptunus. Planet ini hanya memiliki memiliki diameter 48.600 km dan berevolusi selama 165 tahun. CIRI-CIRI: 1. Berwarna biru dan memiliki cincin tipis, 2. Suhu permukaannya berkisar -198˚C sampai 215˚C, 3. Susunan atmosfernya sama dengan planet uranus dan memiliki13 satelit. Bagaimana jika Manusia hidup di Planet Neptunus ??? atmosfer Planet Neptunus di dominasi gas hidrogen dan helium. Planet ini sangat gelap karena jauh dengan Matahari dan Planet ini sangat dingin melebihi dingin di Planet Uranus. sejauh ini belum ada yang dapat mendarat di Planet Neptunus. di planet ini juga terdapat berlian karena cuaca disana sangat dingin, tetapi akan sangat mustahil jika kita dapat mengambil berlian tersebut. jika kita dapat mendarat pun akan terus melayang-layang sampai ke inti Planet Neptunus . sangat sangat tidak mungkin untuk ditinggali oleh manusia. "
    );
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[yuk-title]").multipleModal();

// Black Hole
$.fn.multipleModal = function () {
  $(this).click(function () {
    $("body").prepend('<div class="modal_bg_cover">');
    $("body").prepend('<div class="modal_container">');
    $(".modal_container").prepend('<div class="modal_header"><span class="modal_c">X</span></div> <div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');

    var blackTitle = $(this).attr("black-title");
    var blackDescription = $(this).attr("black-description");
    $(".modal_header").append("Info Tentang Black Hole");
    $(".mb_scroll").append(
      "Black Hole ini merupakan sebuah lubang hitam yang menggambarkan objek dapat menyedot benda apapun diluar angkasa bahkan cahaya pun dapat tersedot. Black Hole lahir dari ledakan bintang yang telah mati atau disebut supernova. lubang hitam berbentuk bulat seperti planet bukan berbentuk lingkaran. lubang hitam dapat terus membesar dengan julukan supermasive black hole. lubang hitam memiliki ukuran sekitar 6,5 miliar lebih besar dari massa Matahari. Lubang hitam berada di galaksi M87 yang berjarak 55 juta tahun cahaya dari Bumi di rasi bintang Virgo. foto Black Hole yang berada di Google , di buku pelajaran sekolah dan semua gambaran film bioksop yang pernah kalian lihat itu semua ternyata hanya ilustrasi. tetapi gambar Black Hole di halaman ini merupakan gambar Pertama kali kalian lihat Black Hole ini merupakan hadiah dari hasil perjuangan dari sekumpulan orang hebat yang membuktikan bahwa tak ada sesuatu yang mustahil.  Penampakan sesungguhnya dari sebuah Lubang Hitam (black hole) dan bayangannya telah dirilis ke publik untuk pertama kalinya pada Rabu malam, 10 April 2019, sekitar pukul 20.00 waktu setempat. Foto pertama Black Hole diambil dari gabungan 8 teleskop radio yang terintegrasi dalam sebuah jaringan besar bernama EHT. Keberhasilan ini mengundang pertanyaan publik, pada Konferensi Pers di Brusells, Rabu(10/4/2019) yaitu 'Bagaimana bisa kita memotret lubang hitam padahal tidak ada cahaya?' Menjawab pertanyaan itu, Eeduardo Ros dari Max Planct Institute for Radioastronomy mengatakan, 'well, sebenarnya (gelombang red) radio juga merupakan cahaya.' Ros mengungkapkan, untuk mendapatkan foto Black Hole itu terdiri dari 200-an ilmuwan menggunakan gelombang radio yang berasal dari lubang hitam berjarak 500 triliun km dari Bumi di Galaksi M87. singkatnya kenapa Black Hole bentuknya seperti donat. karena bagian tengah dari Black Hole Menyerap semua cahaya yang lewat sedangkan cahaya yang lewatnya agak diluar mereka bisa berhasil kabur sehingga akibatnya cahaya menjadi melingkari sang lubang hitam ini. maka bentuknya bisa jadi seperti donat.    "
    );
    $(".modal_c,.modal_bg_cover").click(function () {
      $(".modal_bg_cover").remove();
      $(".modal_container").remove();
    });
  });
};
$("a[black-title]").multipleModal();
