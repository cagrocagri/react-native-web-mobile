import React, {useEffect, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/swiper.css";
// import required modules
import {Autoplay, Navigation, Pagination} from "swiper";

const MainSwiper = ({url, refreshInterval = 120000}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    const [newsArticles, setNewsArticles] = useState([]);
    // const [imageUrls, setImageUrls] = useState([]);
    // const [anchorLinks, setAnchorLinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const htmlString = await response.text();

            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(htmlString, "text/html");

            const urls = [];

            const links = [];

            const newsArticlesArray = [];

            for (let i = 0; i < 6; i++) {
                const haberClass = `haber-${i}`;

                const haberElement = htmlDocument.querySelector(`.${haberClass}`);
                if (!haberElement) {
                    continue;
                }

                const imageElement = haberElement.querySelector("img");

                const imageUrl = imageElement.getAttribute("data-src");

                urls.push(imageUrl);

                const anchorElement = haberElement.querySelector("a");

                const anchorLink = anchorElement.getAttribute("href");

                links.push(anchorLink);

                const newsArticle = {
                    imageUrl,
                    anchorLink,
                };

                newsArticlesArray.push(newsArticle);
            }

            setNewsArticles(newsArticlesArray);

            // setImageUrls(urls);
            // setAnchorLinks(links);
        }

        fetchData();
        const intervalId = setInterval(fetchData, refreshInterval);
        return () => clearInterval(intervalId);
    }, [refreshInterval]);

    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination, Navigation, Autoplay]}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 7500,
                disableOnInteraction: false,
            }}
        >
            {newsArticles.map((newsArticle) => (
                <SwiperSlide key={newsArticle.anchorLink}>
                    <a
                        href={newsArticle.anchorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={newsArticle.imageUrl}
                            alt={`Haber başlığı ${newsArticle.anchorLink}`}
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainSwiper;
