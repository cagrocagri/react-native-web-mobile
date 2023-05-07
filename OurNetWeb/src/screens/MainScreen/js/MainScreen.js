import "../../global.css";
import { Helmet } from "react-helmet";
import Feed from "../../../hook/feed/useFetch";
import MainSwiper from "../../../components/swiper/js/swiper";
import {
  NewsContentFeedMainScreen,
  NewsContentFeedMainSubScreen,
  NewsRootFeed,
  TopNewsContentFeedContainer,
} from "../../../hook/feed/feedscope";
import { TITLES, URLS } from "../../../../shared/constants";

// Gösterilecek Haber Sayısı
const startNumber = 0;
const limitNumber = 4;
const topNewsLimit = 16;

const agenda = TITLES.newsTitle.agenda;
const sport = TITLES.newsTitle.sport;
const economy = TITLES.newsTitle.economy;

function MainScreen({ pageTitle }) {
  return (
    <main className="container-fluid">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="container col-12 my-5">
        <MainSwiper url={URLS.mainScreenUrls.swiperUrl} />
      </div>

      <div className="container border-start border-end shadow">
        <section className="row container">
          <div className="col-12 title-section d-flex mt-1 mb-3 align-items-center">
            <h2 className="news-title m-0 flex-shrink-1">{agenda}</h2>
            <div className="flex-grow-1 title-line mx-3"></div>
            <div className="flex-shrink-1">
              <a href="/gündem" target="_self">
                <i className="fa fa-ellipsis-h fa-lg">Tümünü Gör</i>
              </a>
            </div>
          </div>
          <div className="col-12">
            <Feed
              url={URLS.mainScreenUrls.mainUrls.agenda}
              startNumber={startNumber}
              limitNumber={limitNumber}
              contentRoot={NewsRootFeed}
              contentScope={NewsContentFeedMainScreen}
            />
          </div>
        </section>

        <section className="row container">
          <div className="col-12 title-section mt-1 mb-3 align-items-center d-flex">
            <h2 className="news-title m-0 flex-shrink-1">{sport}</h2>
            <div className="flex-grow-1 title-line mx-3"></div>
            <div className="flex-shrink-1">
              <a href="/spor" target="_self">
                <i className="fa fa-ellipsis-h fa-lg">Tümünü Gör</i>
              </a>
            </div>
          </div>

          <div className="col-12">
            <Feed
              url={URLS.mainScreenUrls.mainUrls.sport}
              startNumber={startNumber}
              limitNumber={limitNumber}
              contentRoot={NewsRootFeed}
              contentScope={NewsContentFeedMainScreen}
            />
          </div>

          <div className="row my-2">
            <div className="col-12 col-lg-8">
              <Feed
                url={URLS.mainScreenUrls.subUrls.sport}
                startNumber={startNumber}
                limitNumber={limitNumber}
                contentRoot={NewsRootFeed}
                contentScope={NewsContentFeedMainSubScreen}
              />
            </div>

            <div className="col-12 col-lg-4">
              <div className="top-news-container-seo">
                <div className="top-news-container">
                  <h2>Son {sport} Haberleri</h2>
                  <div className="news-list">
                    <Feed
                      url={URLS.mainScreenUrls.topNewsUrls.sport}
                      startNumber={startNumber}
                      limitNumber={topNewsLimit}
                      contentRoot={NewsRootFeed}
                      contentScope={TopNewsContentFeedContainer}
                    />
                  </div>
                  <div className="list-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row container">
          <div className="col-12 title-section mt-1 mb-3 align-items-center d-flex">
            <h2 className="news-title m-0 flex-shrink-1">{economy}</h2>
            <div className="flex-grow-1 title-line mx-3"></div>
            <div className="flex-shrink-1">
              <a href="/ekonomi" target="_self">
                <i className="fa fa-ellipsis-h fa-lg">Tümünü Gör</i>
              </a>
            </div>
          </div>

          <div className="col-12">
            <Feed
              url={URLS.mainScreenUrls.mainUrls.economy}
              startNumber={startNumber}
              limitNumber={limitNumber}
              contentRoot={NewsRootFeed}
              contentScope={NewsContentFeedMainScreen}
            />
          </div>

          <div className="row my-2">
            <div className="col-12 col-lg-4">
              <div className="top-news-container-seo">
                <div className="top-news-container">
                  <h2>{TITLES.topNews.economy}</h2>
                  <div className="news-list">
                    <Feed
                      url={URLS.mainScreenUrls.topNewsUrls.economy}
                      startNumber={startNumber}
                      limitNumber={topNewsLimit}
                      contentRoot={NewsRootFeed}
                      contentScope={TopNewsContentFeedContainer}
                    />
                  </div>
                  <div className="list-pagination"></div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <Feed
                url={URLS.mainScreenUrls.subUrls.economy}
                startNumber={startNumber}
                limitNumber={limitNumber}
                contentRoot={NewsRootFeed}
                contentScope={NewsContentFeedMainSubScreen}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainScreen;

{
  /* <div className="row d-block">
          <div className="col col-4">
            <a href="" className="card">
              <span className="category-name">TREND</span>
              <span className="typeIcon"></span>
              <img
                src="https://imgrosetta.mynet.com.tr/file/16960672/7b2270726f63657373223a7b2274797065223a22666f637573222c22636f6f7264696e61746573223a7b2278223a222d302e3633222c2279223a22302e3233227d7d7d/16960672-308x444.jpg"
                alt=""
              />
              <h3 className="h-elm e-h3">TEST TEST TEST TEST TEST</h3>
            </a>
          </div>
          <div className="col col-4 item">
            <a href="" className="card">
              <span className="category-name">TREND</span>
              <span className="typeIcon"></span>
              <img
                src="https://imgrosetta.mynet.com.tr/file/16960009/16960009-320x180.jpg"
                alt=""
              />
              <h3 className="h-elm e-h3">TEST TEST TEST TEST TEST</h3>
            </a>
          </div>
          <div className="col col-4 item">
            <a href="" className="card">
              <span className="category-name">TREND</span>
              <span className="typeIcon"></span>
              <img
                src="https://imgrosetta.mynet.com.tr/file/16955836/16955836-320x180.jpg"
                alt=""
              />
              <h3 className="h-elm e-h3">TEST TEST TEST TEST TEST</h3>
            </a>
          </div>
          <div className="col col-4 item">
            <a href="" className="card">
              <span className="category-name">TREND</span>
              <span className="typeIcon"></span>
              <img
                src="https://imgrosetta.mynet.com.tr/file/16953370/16953370-320x180.jpg"
                alt=""
              />
              <h3 className="h-elm e-h3">TEST TEST TEST TEST TEST</h3>
            </a>
          </div>
          <div className="col col-4 item">
            <a href="" className="card">
              <span className="category-name">TREND</span>
              <span className="typeIcon"></span>
              <img
                src="https://imgrosetta.mynet.com.tr/file/16960494/16960494-320x180.jpg"
                alt=""
              />
              <h3 className="h-elm e-h3">TEST TEST TEST TEST TEST</h3>
            </a>
          </div>
        </div> */
}
