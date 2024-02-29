import useFetch from "../useFetch";
import MonthsSlide from "../components/MonthsSlide";

import thingyan from "../imgs/thingyan.jpg";
import tazaungdaing from "../imgs/tazaungdaing.jpg";
import thadingyut from "../imgs/thadingyut.jpg";
import Carousel from "react-multi-carousel";

export default function HomePage() {
  const {
    error,
    isPending,
    data: months,
  } = useFetch("https://myanmar-months-json-server.vercel.app/Tbl_Months");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 400 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 399, min:0},
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div className="overflow-hidden minHeight">
        <div
          className="column col-lg-10 mt-4 d-flex flex-wrap justify-content-around align-items-center"
          style={{ width: "100vw" }}
        >
          <div className="card col-lg-5 m-3 cornerRounded" style={{minWidth:'200px'}}>
            <Carousel
              draggable={true}
              swipeable={true}
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={700}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
            >
              <img
                className="cornerRounded fluid"
                src={thingyan}
                alt="Thingyan"
              />
              <img
                className="cornerRounded fluid"
                src={thadingyut}
                alt="Thingyan"
              />
              <img
                className="cornerRounded fluid"
                src={tazaungdaing}
                alt="Thingyan"
              />
            </Carousel>
          </div>
          <div className="col-lg-5 border cornerRounded p-3">
            <p className="h4 mb-2">မြန်မာလ နှင့် ပွဲတော်များ</p>
            <p>
              ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်သည် အရှေ့တောင်အာရှတွင်
              ယဉ်ကျေးမှုအမွေအနှစ်အများဆုံးရှိသည့် နိုင်ငံတစ်နိုင်ငံဖြစ်သည်။
              မြန်မာပြက္ခဒိန်တွင် ရှေးမြန်မာလူမျိုးများ၏ ဘာသာရေး၊ လူမှုရေး၊
              နိုင်ငံရေးနှင့် ပညာရေး ဓလေ့ထုံးတမ်းများမှ ပေါက်ဖွားလာသော “၁၂
              ရာသီပွဲတော်များ” ဖြင့် ပြည့်နှက်နေသည်။ ဤပွဲတော်များသည်
              မြန်မာ့ရိုးရာ အနှစ်တစ်ထောင် အမွေအနှစ်များဖြစ်ပြီး ခေတ်အဆက် ဆက်
              ထိန်းသိမ်း စောင့်ရှောက်ခဲ့ကြပါသည်။ စာပေပညာရှင်များ ဝင်ရောက်လာစေရန်
              အားပေးခြင်း၊ ဗုဒ္ဓဘာသာ ပြန့်ပွားရေးနှင့် နိုင်ငံတော်အတွက်
              သာယာဝပြောရေး ဖော်ဆောင်ပေးခြင်းစသည့် အကျိုးကျေးဇူးများစွာ
              ရရှိစေပါသည်။
            </p>
          </div>
        </div>
        <div className="col-lg-12 m-0 p-0">
          {error && <div>{error}</div>}
          {isPending && (
            <div className="text-white h1 d-flex mt-3 justify-content-center align-items-center">
              ခေတ္တစောင့်ပေးပါ...
            </div>
          )}
          {months && (
            <div className="col-lg-12">
              <MonthsSlide months={months} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
