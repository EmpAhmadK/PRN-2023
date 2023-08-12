/* JAVASCRIPT / جاۏاکسريڤ‌ت */

// Modul melekat

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    /* document.getElementById("melekat").classList.add("lekat");
    document.getElementById("melekat-dalam").classList.add("lekat-sub");
    document.getElementById("melekat-gambar").classList.add("lekat-gambar");
    document.getElementById("melekat-kotak").classList.add("lekat-kotak");
    document.getElementById("melekat-tajuk").classList.add("lekat-tajuk");
    document.getElementById("subtajuk").classList.add("subtajuk-pemanjangan"); */
    document.getElementById("pengepala-terapung").classList.remove("nyahapung");
    document.getElementById("pengepala-terapung").classList.add("apung");
	document.getElementById("kembali-butang").classList.remove("kembali-butang-sorok");
	document.getElementById("kembali-butang").classList.add("kembali-butang");
  } else {
    /* document.getElementById("melekat").classList.remove("lekat");
    document.getElementById("melekat-dalam").classList.remove("lekat-sub");
    document.getElementById("melekat-gambar").classList.remove("lekat-gambar");
    document.getElementById("melekat-kotak").classList.remove("lekat-kotak");
    document.getElementById("melekat-tajuk").classList.remove("lekat-tajuk");
    document.getElementById("subtajuk").classList.remove("subtajuk-pemanjangan"); */
    document.getElementById("pengepala-terapung").classList.remove("apung");
    document.getElementById("pengepala-terapung").classList.add("nyahapung");
	document.getElementById("kembali-butang").classList.add("kembali-butang-sorok");
	document.getElementById("kembali-butang").classList.remove("kembali-butang");
  }
}

// Kemas modul tulisan

function loadFunction() {
	var iframe = document.getElementById("tulisanTerpaut");
	var elmnta = iframe.contentWindow.document.getElementById("masthead");
	var elmntb = iframe.contentWindow.document.getElementById("wpadminbar");
	var elmntc = iframe.contentWindow.document.getElementsByTagName("body");
	var elmntd = iframe.contentWindow.document.getElementsByClassName("page-header");
	elmnta.style.display = "none";
	elmntb.style.display = "none";
	elmntc.style.background = "none";
	elmntd.style.display = "none";
}

// Pengetaban

function bukaNegeri(negeri) {
  var i;
  var x = document.getElementsByClassName("keputusan-bekas");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(negeri).style.display = "inherit";
}