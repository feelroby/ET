const kezhia = "Kezhia Damaris Sooai <br> Kupang <br> Suka makan mie☝🏻"
const fery = 'Fery Ardiansyah<br>Cirebon<br>Belajar lah sedikit bodo amat biar hidup lebih tenang'
const neta = 'Neta<br>Mojokerto<br>Tetaplah hidup, meskipun yaudah lah mau gimana lagi'
const syafa = 'Syafa Pasya Saqinah<br>Malang<br>Jatuh untuk belajar, bangkit untuk bertumbuh'
const ulfa = 'Ulfatul Khoiroh<br>Batu<br>Tetap cengar cengir walau masalah terus mengalir'
const zahra = 'Zahra Nur Fadilah <br>Malang<br>Setiap kesulitan selalu ada kemudahan, setiap masalah pasti ada solusi'
const chelsea = 'Chelsea Priskila <br> Lumajang <br> Jangan lupa bersyukur'
const keyran = 'Keyran Davian Jaya<br>Jakarta<br>Learn now, flex later, success is earned, not given! '
const berliana = 'Berliana<br>Sesulit apapun tantangan yang dihadapi, pasti akan ada jalan keluar untuk meraih kemenangan'
const micko = 'Rayzaldi Micko Ananta<br>Donomulyo<br>Sukses itu relatif, makin sukses makin baanyak yang minta traktir'
const belum = 'gtw ini sapa'
const kosong =
  "Haloooo coba pencet setiap gambar di bawah buat lebih kenal doi xixi";





const container = document.querySelector(".container-anggota");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");
const text = document.querySelector('.motto')

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;

    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });

    e.target.classList.add("activee");
  }
    if( e.target.id == 1 )
    text.innerHTML = kezhia
    if( e.target.id == 2 )
    text.innerHTML = fery
    if( e.target.id == 3 )
    text.innerHTML = neta
    if( e.target.id == 4 )
    text.innerHTML = syafa
    if( e.target.id == 5 )
    text.innerHTML = ulfa
    if( e.target.id == 6 )
    text.innerHTML = zahra
    if( e.target.id == 7 )
    text.innerHTML = chelsea
    if( e.target.id == 8 )
    text.innerHTML = keyran
    if( e.target.id == 9 )
    text.innerHTML = berliana
    if( e.target.id == 10 )
    text.innerHTML = kosong
    if( e.target.id == 11 )
    text.innerHTML = micko
    if( e.target.id == 12 )
    text.innerHTML = kosong
});
