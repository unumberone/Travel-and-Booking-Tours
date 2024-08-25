import React, { createContext, useContext, useState } from 'react';
//imp ảnh cho homepage
import img1 from '../../src/Assets/img1.png';
import img2 from "../../src/Assets/img2.png";
import img3 from "../../src/Assets/img3.png";
import img4 from "../../src/Assets/img4.png";
import p1 from "../../src/Assets/p1.png";
import p2 from "../../src/Assets/p2.png";
import p3 from "../../src/Assets/p3.png";
import p4 from "../../src/Assets/p4.png";
import imgSwitzerland from '../../src/Assets/imgSwitzerland.png';
import imgAmazon from "../../src/Assets/imgAmazon.png";
import imgGiza from "../../src/Assets/imgGiza.png";
import Switzerland from '../../src/Assets/Switzerland.png';
import Amazon from "../../src/Assets/Amazon.png";
import Giza from "../../src/Assets/Giza.png";
//import ảnh cho mục about
import ab1 from "../../src/Assets/ab1.png";
import ab2 from "../../src/Assets/ab2.png";
import ab3 from "../../src/Assets/ab3.png";
import ab4 from "../../src/Assets/ab4.png";
import ab5 from "../../src/Assets/ab5.png";
import ab6 from "../../src/Assets/ab6.png";
import ab7 from "../../src/Assets/ab7.png";
import ab8 from "../../src/Assets/ab8.png";
import ab9 from "../../src/Assets/ab9.png";
import ab10 from "../../src/Assets/ab10.png";
import ab11 from "../../src/Assets/ab11.png";
//import ảnh cho phần services
import s1 from "../../src/Assets/s1.png";
import s2 from "../../src/Assets/s2.png";
import s3 from "../../src/Assets/s3.png";
import s4 from "../../src/Assets/s4.png";
import s5 from "../../src/Assets/s5.png";
import s6 from "../../src/Assets/s6.png";
import s8 from "../../src/Assets/s8.jpg";
import s7 from "../../src/Assets/s7.jpg";
import s9 from "../../src/Assets/s9.jpg";
import s10 from "../../src/Assets/s10.jpg";
import s11 from "../../src/Assets/s11.jpg";
import s12 from "../../src/Assets/s12.jpg";
import s13 from "../../src/Assets/s13.jpg";
import s14 from "../../src/Assets/s14.jpg";
import s15 from "../../src/Assets/s15.jpg";
import s16 from "../../src/Assets/s16.jpg";
import s17 from "../../src/Assets/s17.jpg";
import s18 from "../../src/Assets/s18.jpg";
import s19 from "../../src/Assets/s19.jpg";
import s20 from "../../src/Assets/s20.jpg";
import s21 from "../../src/Assets/s21.jpg";
import s22 from "../../src/Assets/s22.jpg";
import s23 from "../../src/Assets/s23.jpg";
import s24 from "../../src/Assets/s24.jpg";

//import ảnh cho mục upcomming
import u1 from '../Assets/u1.png';
import u2 from '../Assets/u2.png';
import u3 from '../Assets/u3.png';
import u4 from '../Assets/u4.png';
import u5 from '../Assets/u5.png';
import u6 from '../Assets/u6.png';




const DataContext = createContext();

// Tạo Provider để cung cấp dữ liệu
export const DataProvider = ({ children }) => {
    const servicesData = [
        { id: 1, img: img1, title: 'Guided Tours' },
        { id: 2, img: img2, title: 'Best Flights Options' },
        { id: 3, img: img3, title: 'Religious Tours' },
        { id: 4, img: img4, title: 'Medical insurance' },
    ];

    // State để quản lý dữ liệu mới 
    const [promotionsData, setPromotionsData] = useState([
        { id: 1, img: p1, price: '$700' },
        { id: 2, img: p2, price: '$800' },
        { id: 3, img: p3, price: '$500' },
        { id: 4, img: p4, price: '$400' },
    ]);

    const [products, setProducts] = useState([
        { id: 1, img: imgSwitzerland, icon: Switzerland, location: 'Switzerland', country: 'Europe', days: 8, people: 25, price: '$1000', oldPrice: '$1200', rating: 5 },
        { id: 2, img: imgAmazon, icon: Amazon, location: 'Amazon', country: 'Brazil', days: 8, people: 30, price: '$1223', oldPrice: '$1300', rating: 5 },
        { id: 3, img: imgGiza, icon: Giza, location: 'Giza', country: 'Egypt', days: 8, people: 155, price: '$1200', oldPrice: '$1200', rating: 5 }
    ]);


    const [abouts, setAbouts] = useState([
        { id: 1, img: ab1, locate: 'Barcelona', price: '$840' },
        { id: 2, img: ab2, locate: 'Paris', price: '$920' },
        { id: 3, img: ab3, locate: 'Rome', price: '$750' },
        { id: 4, img: ab4, locate: 'Berlin', price: '$680' },
        { id: 5, img: ab5, locate: 'Amsterdam', price: '$790' },
        { id: 6, img: ab6, locate: 'Vienna', price: '$860' },
        { id: 7, img: ab7, locate: 'Prague', price: '$730' },
        { id: 8, img: ab8, locate: 'Budapest', price: '$800' },
        { id: 9, img: ab9, locate: 'Lisbon', price: '$720' },
        { id: 10, img: ab10, locate: 'Athens', price: '$880' },
        { id: 11, img: ab11, locate: 'Stockholm', price: '$940' }
    ]);

    const [services, setServices] = useState([
        { id: 1, img: s1, time: '12, September 2022', member: '120+ People', price: '$1,100', rating: 5.0, location: 'Switzerland' },
        { id: 2, img: s2, time: '15, October 2022', member: '150+ People', price: '$1,200', rating: 4.8, location: 'France' },
        { id: 3, img: s3, time: '25, November 2022', member: '200+ People', price: '$1,300', rating: 4.9, location: 'Italy' },
        { id: 4, img: s4, time: '5, December 2022', member: '180+ People', price: '$1,250', rating: 5.0, location: 'Germany' },
        { id: 5, img: s5, time: '10, January 2023', member: '220+ People', price: '$1,150', rating: 4.7, location: 'Spain' },
        { id: 6, img: s6, time: '20, February 2023', member: '160+ People', price: '$1,300', rating: 5.0, location: 'Netherlands' },
        { id: 7, img: s7, time: '8, March 2023', member: '140+ People', price: '$1,050', rating: 4.8, location: 'Belgium' },
        { id: 8, img: s8, time: '18, April 2023', member: '190+ People', price: '$1,270', rating: 4.9, location: 'Austria' },
        { id: 9, img: s9, time: '30, May 2023', member: '230+ People', price: '$1,400', rating: 5.0, location: 'Sweden' },
        { id: 10, img: s10, time: '12, June 2023', member: '210+ People', price: '$1,500', rating: 4.7, location: 'Norway' },
        { id: 11, img: s11, time: '2, July 2023', member: '250+ People', price: '$1,350', rating: 4.8, location: 'Denmark' },
        { id: 12, img: s12, time: '22, August 2023', member: '170+ People', price: '$1,200', rating: 4.9, location: 'Finland' },
        { id: 13, img: s13, time: '10, September 2023', member: '120+ People', price: '$1,180', rating: 5.0, location: 'Ireland' },
        { id: 14, img: s14, time: '5, October 2023', member: '180+ People', price: '$1,250', rating: 4.7, location: 'Portugal' },
        { id: 15, img: s15, time: '15, November 2023', member: '160+ People', price: '$1,300', rating: 5.0, location: 'Greece' },
        { id: 16, img: s16, time: '28, December 2023', member: '130+ People', price: '$1,400', rating: 4.9, location: 'Turkey' },
        { id: 17, img: s17, time: '3, January 2024', member: '200+ People', price: '$1,500', rating: 5.0, location: 'Czech Republic' },
        { id: 18, img: s18, time: '14, February 2024', member: '220+ People', price: '$1,600', rating: 4.8, location: 'Hungary' },
        { id: 19, img: s19, time: '25, March 2024', member: '240+ People', price: '$1,350', rating: 4.7, location: 'Poland' },
        { id: 20, img: s20, time: '8, April 2024', member: '190+ People', price: '$1,400', rating: 4.9, location: 'Slovakia' },
        { id: 21, img: s21, time: '20, May 2024', member: '150+ People', price: '$1,200', rating: 5.0, location: 'Croatia' },
        { id: 22, img: s22, time: '1, June 2024', member: '170+ People', price: '$1,300', rating: 4.8, location: 'Slovenia' },
        { id: 23, img: s23, time: '15, July 2024', member: '230+ People', price: '$1,450', rating: 4.9, location: 'Estonia' },
        { id: 24, img: s24, time: '30, August 2024', member: '250+ People', price: '$1,500', rating: 5.0, location: 'Latvia' },
    ]);
    

    const [upcomming, setUpcomming] = useState([
        {id: 1, img: u1},
        {id: 2, img: u2},
        {id: 3, img: u3},
        {id: 4, img: u4},
        {id: 5, img: u5},
        {id: 6, img: u6},
    ])

    //data của tourplan

    



    return (
        <DataContext.Provider value={{ servicesData, promotionsData, products, abouts, services, upcomming }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook để sử dụng DataContext
export const useData = () => {
    return useContext(DataContext);
};
