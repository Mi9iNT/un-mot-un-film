import { React, useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Favoris = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
        axios.get(
            `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=612d7eee16b4272581597606022a62e1&language=fr-FR`
          )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2 className="favHav">
        Coup de coeur <span>💖</span><span>∶</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2 className="msg">Aucun <span className="rouge">Favoris</span> pour le moment 💔</h2>
          
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Favoris;