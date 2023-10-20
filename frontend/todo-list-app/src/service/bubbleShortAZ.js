function bubbleSortTitleAZ(arr) {
    let n = arr.length;
  
    // Loop luar untuk melakukan iterasi
    for (let i = 0; i < n - 1; i++) {
  
      // Loop dalam untuk perbandingan
      for (let j = 0; j < n - i - 1; j++) {
        // Membandingkan elemen berdekatan
        if (arr[j].title[0].charCodeAt(0) > arr[j + 1].title[0].charCodeAt(0)) {
          // Tukar arr[j] dan arr[j+1]
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;

  }

  export default bubbleSortTitleAZ;