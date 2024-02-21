alert('Aplikasi tiket')

const nama = prompt('masukan nama :');
const usia = prompt('masukan usia:');
const batasusia = 13;
//const pilih = ['A'|'B'|'C'];

if (usia >= batasusia){
    alert('Boleh masuk bioskop');
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
            alert('input tidak sesuai')
        }

}else{
    alert('tidak bisa masuk');
}
