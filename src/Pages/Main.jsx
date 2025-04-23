import React  from 'react'
import NewsCard from './NewsCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import loader from '../Animations/Loader.json'
import './Main.css'
const Main=({category})=> {

  const [loading,setLoading] = useState(false)

    const [News, setNews] = useState([]);
    // const [category, setCategory] = useState('');
       console.log("cat ",category)
       const news = JSON.parse(localStorage.getItem(category))
    useEffect(() => {
        const fetchData = async () => {
            try {
              setLoading(true);
              if(!news){
                const response = await axios.get(`https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=${category.toUpperCase()}&limit=500&country=US&lang=en`,{
                  headers:{
                    "x-rapidapi-host":"real-time-news-data.p.rapidapi.com",
                    "x-rapidapi-key":"a2d043ee55msh4a4cb903bc9f079p140ea9jsnc74c80668172"
                  }
                });
                console.log("res is ",response.data?.data)
                setLoading(false)
                setNews(response?.data?.data);
                localStorage.setItem(category,JSON.stringify(response.data?.data))
              }
              else{
                setNews(news)
                setLoading(false)
              }
             
               
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false)
            }
        };

        fetchData();
    }, [category]);


    useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: adds a smooth scroll animation
      });

    },[category])


  return (
    <div style={{width:"100%"}}>
      

      <p className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:"bold"}}>{category===""?"GLOBAL":category} NEWS</p>
      {/* {News.length >  0 ?(
        News.map((article,index)=>(
        <Row className='Article'>
        <Col sm md style={{marginTop:"3rem"}}>
        <NewsCard desc = {article.attributes.headline} title = {article.attributes.hashtags} date = {article.attributes.createdAt}  icon={article.attributes.newsIcon} />
        </Col>
        </Row>
      ))):"No News"} */}

      {!loading && News?.length >  0  ?(
        News?.map((article,index)=>(
            

            <>
            
                <Row className='Article'>
        <Col sm md style={{marginTop:"3rem"}}>
        <NewsCard desc = {article?.snippet} title = {article?.title} date = {article?.published_datetime_utc}  icon={article?.source_favicon_url} image={article?.photo_url} />
        </Col>
        {/* <Col sm md style={{marginTop:"3rem"}}>
        <NewsCard desc = {article?.snippet} title = {article?.title} date = {article?.published_datetime_utc}  icon={article?.source_favicon_url} image={article?.photo_url} />
        </Col> */}
        </Row>
            
            </>
        
            
      ))):<div style={{height:'80vh'}}>
        <Lottie animationData={loader} style={{height:'80vh'}} />
      </div>}


    </div>
  )
}

export default Main
