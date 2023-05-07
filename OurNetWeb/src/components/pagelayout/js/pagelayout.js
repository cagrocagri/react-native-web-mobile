import Feed from "../../../hook/feed/useFetch";
import { Helmet } from "react-helmet";
import {
  NewsRootFeed,
  NewsContentFeedHero,
  PagesTopNewsContentFeedContainer,
  PagesNewsSubContent,
} from "../../../hook/feed/feedscope";
import {
  SwiperContent,
  SwiperRoot,
} from "../../../components/swiper/js/swipersliderfeedscope";

const title = title;
// Gösterilecek Haber Sayısı
const limit = 16;
const startNumber = 0;
const limitUnderHero = 4;
const limitSwiper = 13;

function PageLayout({ title, heroUrl, swiperUrl, topNewsUrl, subNewsUrl }) {
  return (
    <div className="container-fluid">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="container my-5">
        <h1 className="display-6 text-center page-top-news-title title-line">
          ÖNE ÇIKANLAR
        </h1>

        <Feed
          url={heroUrl}
          startNumber={startNumber}
          limitNumber={limitUnderHero}
          contentRoot={NewsRootFeed}
          contentScope={NewsContentFeedHero}
        />
      </section>

      <section className="container border border-primary shadow my-5">
        <h1 className="display-3 text-center page-news-title-text">
          {title.toUpperCase()}
        </h1>
        <div className="flex-grow-1 title-line mx-3"></div>
        <div className="row">
          <div className="col-12">
            <div className="container page-news-container">
              <Feed
                url={swiperUrl}
                startNumber={startNumber}
                limitNumber={limitSwiper}
                contentRoot={SwiperRoot}
                contentScope={SwiperContent}
              />
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="top-news-container-seo">
              <div className="top-news-container">
                <h2>{title} Haberleri</h2>
                <div className="news-list">
                  <Feed
                    url={topNewsUrl}
                    startNumber={startNumber}
                    limitNumber={limit}
                    contentRoot={NewsRootFeed}
                    contentScope={PagesTopNewsContentFeedContainer}
                  />
                </div>
                <div className="list-pagination"></div>
              </div>
            </div>
          </div>

          <div className="center col-12 col-lg-6 my-5 card py-2 px-2 shadow">
            <h2 className="display-6 text-center page-news-title-text">
              HABER BAŞLIKLARI
            </h2>
            <div className="flex-grow-1 title-line mx-3"></div>
            <Feed
              url={subNewsUrl}
              startNumber={startNumber}
              limitNumber={limit}
              contentRoot={NewsRootFeed}
              contentScope={PagesNewsSubContent}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageLayout;
