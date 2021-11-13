/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState ([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
    //the complete list of movies      
    let list = await Tmdb.getHomeList();
    setMovieList(list); 
    
    //featured 
    let originals = list.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results?.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);    
  }
    loadAll();
  }, []);

  //effect for navbar to be transparent on top and with color on scroll 
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10 ){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
     }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);


  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      
        <section className="lists">
          {movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>
        
        <footer>
          Made with <span role="img" aria-label="heart">❤</span> and <span role="img" aria-label="coffee">☕</span> by Catarina Veiga. <br/>
          Image Rights by Netflix <br/>
          Data from Themoviedb.org
        </footer>

        {movieList.length <= 0 && 
        <div className="loading">
          <img src="https://www.rchandru.com/images/portfolio/loading.gif" alt="loading netfix" />
        </div>
        }
    </div>
  )
}

