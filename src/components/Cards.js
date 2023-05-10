import StatusCard from "./StatusCards";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

function Cards(props) {
  let kategori = Object.keys(props.jumlahMhsAngkatan);
  let jumlah = Object.values(props.jumlahMhsAngkatan);

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 4),
      4000 // setiap 4 detik
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div class="cards d-flex align-items-center justify-content-center">
      <div class="container-fluid">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-3">
            <h5 className="jumlahMahasiswa">Jumlah Mahasiswa</h5>

            <h1 className="noJumlahMahasiswa">
              {props.jumlahMhs || <Skeleton width={120} />}
            </h1>
            <hr />
            <div class="table m-0">
              <TextTransition
                springConfig={presets.stiff}
                direction="down"
                translateValue="90%"
              >
                <table className="table table-sm table-borderless">
                  <thead>
                    <tr className="text-center jumlah-angkatan">
                      {/* {jumlah.map((jmlh) => (
                      <th>{jmlh}</th>
                    ))} */}
                      <th>
                        {jumlah[index % jumlah.length] || (
                          <Skeleton width={40} />
                        )}
                      </th>
                      <th>
                        {jumlah[(index + 1) % jumlah.length] || (
                          <Skeleton width={40} />
                        )}
                      </th>
                      <th>
                        {jumlah[(index + 2) % jumlah.length] || (
                          <Skeleton width={40} />
                        )}
                      </th>
                      <th>
                        {jumlah[(index + 3) % jumlah.length] || (
                          <Skeleton width={40} />
                        )}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center nama-angkatan">
                      {/* {kategori.map((key) => (
                      <td>{key}</td>
                    ))} */}
                      <td>
                        {kategori[index % kategori.length] || (
                          <Skeleton width={30} />
                        )}
                      </td>
                      <td>
                        {kategori[(index + 1) % kategori.length] || (
                          <Skeleton width={30} />
                        )}
                      </td>
                      <td>
                        {kategori[(index + 2) % kategori.length] || (
                          <Skeleton width={30} />
                        )}
                      </td>
                      <td>
                        {kategori[(index + 3) % kategori.length] || (
                          <Skeleton width={30} />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TextTransition>
            </div>
          </div>
          <div class="col-md-9 area-swiper">
            <Swiper
              slidesPerView={2.2}
              spaceBetween={20}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={3000}
              mousewheel={{
                invert: true,
                eventsTarget: "",
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              grabCursor="true"
              loopPreventsSliding="true"
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2.2,
                  spaceBetween: 15,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2.25,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2.25,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.25,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.25,
                  spaceBetween: 25,
                },
                1800: {
                  slidesPerView: 2.25,
                  spaceBetween: 25,
                },
              }}
            >
              <SwiperSlide>
                <StatusCard
                  jumlah={props.allSelesaiSeminar || <Skeleton width={70} />}
                  ket="Selesai Seminar"
                  color={"var(--card-status-color1)"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <StatusCard
                  jumlah={props.allSelesaiKp || <Skeleton width={70} />}
                  ket="Selesai KP"
                  color={"var(--card-status-color2)"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <StatusCard
                  jumlah={props.allSedangKp || <Skeleton width={70} />}
                  ket="Sedang KP"
                  color={"var(--card-status-color1)"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <StatusCard
                  jumlah={props.allTahapPendaftaran || <Skeleton width={70} />}
                  ket="Pendaftaran"
                  color={"var(--card-status-color2)"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <StatusCard
                  jumlah={props.allBelumKp || <Skeleton width={70} />}
                  ket="Belum"
                  color={"var(--card-status-color1)"}
                  isLoading={props.isLoading}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
