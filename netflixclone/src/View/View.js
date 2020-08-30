import React from 'react'
import request from '../requests'
import Row from '../Components/Row'
import Banner from '../Components/Banner'
import Nav from '../Components/Nav'





function View() {
    return (
        <div>
            <Nav/>
            <Banner/>

            <Row title = "TRENDING"
                fetchUrl={request.fetchTrending}
                    />
                <Row title = "TOP RATED" fetchUrl={request.fetchTopRated}/>
                <Row title = "COMEDY"  fetchUrl={request.fetchComedyMovies}/>
                <Row title = "ACTION"  fetchUrl={request.fetchActionMovies}/>
                <Row title = "HORROR" fetchUrl={request.fetchHorrorMovies}/>
                
            
        </div>
    )
}

export default View
