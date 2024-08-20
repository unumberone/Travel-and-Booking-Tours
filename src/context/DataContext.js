import React, { createContext, useContext, useState } from 'react';
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
        {
            id: 1,
            img: imgSwitzerland,
            icon: Switzerland,
            location: 'Switzerland',
            country: 'Europe',
            days: 8,
            people: 25,
            price: 1000,
            oldPrice: 1200,
            rating: 5,
        },
        {
            id: 2,
            img: imgAmazon,
            icon: Amazon,
            location: 'Amazon',
            country: 'Brazil',
            days: 8,
            people: 30,
            price: 1223,
            oldPrice: 1300,
            rating: 5,
        },
        {
            id: 3,
            img: imgGiza,
            icon: Giza,
            location: 'Giza',
            country: 'Egypt',
            days: 8,
            people: 155,
            price: 1200,
            oldPrice: 1200,
            rating: 5,
        },
    ]);


    return (
        <DataContext.Provider value={{ servicesData, promotionsData, products }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook để sử dụng DataContext
export const useData = () => {
    return useContext(DataContext);
};
