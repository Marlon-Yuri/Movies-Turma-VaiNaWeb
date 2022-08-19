import React, { Component } from 'react'
import axios from 'axios'


const MyAPI_Movie = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=a83c5fa3bb074fe41c058b4210e22cd8&language=en-US&page=1'
})

export default class Movies extends Component {

state = {
    movies : []
}


getMovies = async () =>{
  const response =  await MyAPI_Movie.get()

  const AllMovie = response.data.results.map(item =>{
    return{
        nomeFilme : item.title,
        sinopse: item.overview,
        imagem: `https://image.tmdb.org/t/p/w300/${item.poster_path}`
    }
  })

  this.setState({movies: AllMovie})

  console.log(response.data.results)
}

componentDidMount(){
this.getMovies()
}
  render() {
    return (
      <div>
        <h1>Movies</h1>
        <ul>{this.state.movies.map(item =>(
            <>
            <h2>{item.nomeFilme}</h2>
             <p>{item.sinopse}</p>
             <img src={item.imagem} alt={item.nomeFilme} />
            </>          
        ))}</ul>
      </div>
    )
  }
}
