const tong = document.querySelectorAll('.tongsampah');
const lalat = document.querySelectorAll('.lalat');
const papanSkor = document.querySelector('.papanSkor')
const pok = document.querySelector('#pok')

let tongSebelumnya;
let selesai;
let skor;


function randomTong(tong) {
    const t = Math.floor(Math.random() * tong.length)
    const tRandom = tong[t]
    if (tRandom == tongSebelumnya){
        randomTong(tong)
    }
    tongSebelumnya = tRandom
    return tRandom
}

function randomWaktu (start, end){
    return Math.round(Math.random() * (start - end) + end);
}

function munculkanLalat() {
    const tRandom = randomTong(tong)
    const wRandom = randomWaktu(500, 800);
    tRandom.classList.add('muncul')

    setTimeout(() => {
        tRandom.classList.remove('muncul')  
        if(!selesai){
           munculkanLalat() 
        }
        
    }, wRandom);
}

function mulai() {
    selesai = false
    skor = 0
    munculkanLalat()
    music.play()
    setTimeout(() => {
        selesai = true
        alert(`Selesai! Selamat anda sudah menyelesaikan permainan! dan skor anda adalah ${skor}`)
        skor.textContent= 0
    }, 10000);
    
}

function tepok() {
    skor++
    this.parentNode.classList.remove('muncul')
    pok.play()
    papanSkor.textContent = skor
}

lalat.forEach(t => {
    t.addEventListener('click', tepok)
})