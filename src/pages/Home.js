import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from "../components/Products";
import Slider from '../components/Slider'
import Categories from './../components/Categories';
import Footer from './../components/Footer';

export default function Home() {
    return (
        <div>
           <Announcement></Announcement>
           <Navbar></Navbar>
           <Slider></Slider>
           <Categories></Categories>
           <Products></Products>
           <Newsletter></Newsletter>
           <Footer></Footer>
        </div>
    )
}
