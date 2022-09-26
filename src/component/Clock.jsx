import React from 'react';

class Clock extends React.Component {
  // buat constructor
  constructor(props) {
    super(props); //teruskan props ke constructor dasar
    this.state = { date: new Date() }; //buat state date dengan nilai waktu sekarang
  }

  //buat Lifecycle Methods ketika pertama kali dirender
  componentDidMount() {
    // panggil tick setiap 1 detik
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //buat Lifecycle Methods untuk menghapus waktu ketika tidak dibutuhkan
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //buat fungsi untuk mengubah state date menjadi waktu baru saat ini
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Tugas ke 6 Membuat Jam yang terupdate secara real time menggunakan class react component</h1>
        <h2>Waktu berjalan saat ini : {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
