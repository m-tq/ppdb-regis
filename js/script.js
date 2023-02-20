//All main JS Script

//small input on mobile view
if ( window.innerWidth < 768 ) {
  let inputs = document.getElementsByClassName('input-group')
  for (let elem of inputs) {
    elem.classList.add('input-group-sm');
  }
}
//stepper
var stepper1
document.addEventListener('DOMContentLoaded', function () {
  var steppermain = document.querySelector('#stepper1')
  stepper1 = new Stepper(steppermain, {
    animation: true
  })

  var btnNextList = [].slice.call(document.querySelectorAll('.btn-next-form'))
  var stepperPanList = [].slice.call(steppermain.querySelectorAll('.bs-stepper-pane'))
  var nisn = document.getElementById('nisn')
  var nama_lengkap = document.getElementById('nama_lengkap')
  var tmp_lahir = document.getElementById('tmp_lahir')
  var tgl_lahir = document.getElementById('tgl_lahir')
  var jenkel = document.getElementById('jenkel')
  var agama = document.getElementById('agama')
  var jurusan = document.getElementById('jurusan')
  var form = steppermain.querySelector('form')

  btnNextList.forEach(function (btn) {
    btn.addEventListener('click', function () {
      stepper1.next()
    })
  })
  steppermain.addEventListener('show.bs-stepper', function (event) {
    form.classList.remove('was-validated')
    var nextStep = event.detail.indexStep
    var currentStep = nextStep
    if (currentStep > 0) {
      currentStep--
    }
    var stepperPan = stepperPanList[currentStep]
    if ((stepperPan.getAttribute('id') === 'test-l-1' && !nisn.value.length || !nama_lengkap.value.length || !tmp_lahir.value.length || jenkel.value == "" || tgl_lahir.value == "") || (stepperPan.getAttribute('id') === 'test-l-2' && agama.value == "") || (stepperPan.getAttribute('id') === 'test-l-3' && jurusan.value == "")) {
      event.preventDefault()
      form.classList.add('was-validated')
    }
  })

  form.addEventListener('submit', function(event) {
    form.classList.remove('was-validated');
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
})
//tips
var tips = document.querySelector("#protips")
$(':input').on('focus', function() {
    if (this.id == 'nisn') {
        tips.innerHTML = ' NISN ( Nomor Induk Siswa Nasional ). Bisa kamu cari di : <a href="https://nisn.data.kemdikbud.go.id">https://nisn.data.kemdikbud.go.id</a>.'
    } else if (this.id == 'nama_lengkap') {
        tips.innerHTML = " Pastikan Nama Lengkap sesuai dengan nama di KK/KTP/Ijazah sebelumnya ya. "
    } else if (this.id == 'tgl_lahir') {
        tips.innerHTML = " Untuk memilih tanggal, klik icon kalender di sebelah kanan. mm/dd/yyyy adalah format internasional untuk tanggal kelahiran, mm  (month) = bulan, dd (day = hari, dan 'yyyy' (year) = tahun. Jadi formatnya bulan/hari/tahun. Sesuaikan di Kartu Keluarga ya. "
    } else if (this.id == 'tmp_lahir') {
        tips.innerHTML = " Tempat lahir beda dengan domisili ya, dimana kamu menetap sekarang bukan berarti itu adalah tempat lahir kamu, yang pasti tempat lahir kamu ada di Kartu Keluarga ya."
    } else if (this.id == 'jenkel') {
        tips.innerHTML = " Masa iya kamu gatau jenis kelamin kamu, hehe."
    } else if (this.id == 'agama') {
        tips.innerHTML = " Agama adalah keyakinan kamu, sesuai di Kartu Keluarga ya."
    } else if (this.id == 'nama_ayah') {
        tips.innerHTML = " Kalo belum tau nama lengkap ayahmu ada ko di Kartu Keluarga, tercantum paling atas sebagai Kepala Keluarga."
    } else if (this.id == 'nama_ibu') {
        tips.innerHTML = " Nah, Nama lengkap ibumu persis ada dibawah nama ayahmu di Kartu Keluarga."
    } else if (this.id == 'alamat') {
        tips.innerHTML = " Alamat sesuaikan di Kartu Keluarga ya."
    } else if (this.id == 'jenis_tinggal') {
        tips.innerHTML = " Saat ini kamu sedang Ngekos, Tinggal Bersama Orang Tua atau Tinggal bersama Saudara ? pilih salah satu ya."
    } else if (this.id == 'asal_sekolah') {
        tips.innerHTML = " Kamu Lulus dari Sekolah Apa? SMP atau MTS ? Sesuaikan dengan Ijazah kamu sebelumnya ya."
    } else if (this.id == 'transportasi') {
        tips.innerHTML = " Kamu berangkat sekolah menggunakan apa ? Mobil? Motor? atau Jalan Kaki? Dipilih sesuai Keseharian kamu ya."
    } else if (this.id == 'no_telp') {
        tips.innerHTML = " Masukkan Nomor Telephone/HP yang bisa dihubungi ya."
    } else if (this.id == 'jurusan') {
        tips.innerHTML = " Kamu masuk disini mau Jurusan Apa? sesuaikan dengan keinginan kamu ya."
    }
})
$(':input').on('blur', function() {
  if (this.id != 'nisn') {
    document.querySelector("#protips").innerHTML = " Selamat Datang di PPDB SMA Islam Sultan Agung 02. Isilah Formulir berikut dengan hati - hati dan teliti. Terimakasih. "
  }
  })
  
//toggleTheme
  var toggleTheme = document.getElementById('toggleTheme')
  var imgl = document.getElementById('svgregis') 

  toggleTheme.addEventListener('click', () => {
    if (toggleTheme.classList.contains('i-dark')){
      toggleTheme.classList.add('i-light')
      toggleTheme.classList.remove('i-dark')      
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    }else{
      toggleTheme.classList.add('i-dark')
      toggleTheme.classList.remove('i-light')      
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
})