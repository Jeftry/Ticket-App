alert('Aplikasi tiket')

const nama = prompt('Masukan Nama:');
const usia = prompt('Masukan Usia:');
const batasusia = 13;
//const pilih = ['A'|'B'|'C'];

if (usia >= batasusia){
    alert('Boleh Basuk Bioskop');
    const studio = prompt('pilih studio A/B/C');
        if(studio == 'A'){
            alert(`${nama} berusia ${usia} masuk ke studio ${studio}`);
        }
        else if(studio == 'B'){
            alert(`${nama} berusia ${usia} masuk ke studio ${studio}`);
        }
        else if(studio == 'C'){
            alert(`${nama} berusia ${usia} masuk ke studio ${studio}`);
        }
        else{
            alert('Input Tidak Sesuai')
        }

}else{
    alert('Tidak Bisa Masuk Bioskop');
}
