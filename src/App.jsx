import { useContext, useState } from "react";
import "./App.scss";
import Main from "./Main/Main";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import { ThemeContext } from "./Mode/ThemeProvider";
import Category from "./Pages/Category/Category";
import Company from "./Pages/Company/Company";
import Favorites from "./Pages/Favorites/Favorites";
import CreateAd from "./Pages/CreateAd/CreateAd";
import MainLayout from "./layouts/MainLayout";
import Aside from "./Aside/Aside";
import AsideBlock from "./AsideBlock/AsideBlock";
// import VacanciesLayout from "./layouts/VacanciesLayout";
// import DetailPage from "./Pages/DetailPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Route, Routes } from "react-router-dom";
import VacancyDetail from "./Pages/Advertisment/Vacancy/VacancyDetail";
import { useDispatch } from "react-redux";
// import AppLayout from "./layouts/AppLayout";

function App() {
  // const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [jobCount, setJobCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  const [selectedJobId, setSelectedJobId] = useState(null);
  // const [watchCount, setWatchCount] = useState(0)
  // const [categoryList, setCategoryList] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0)
  const [favoriteList, setFavoriteList] = useState([]);

//   const favoriteHandle = (id, image, vacancyName, companyName) => {
//     console.log('ssss');
//   setFavoriteList((previus) => {
//     return [
//       ...previus, {image, vacancyName, companyName, id: favoriteList.length + 1 }
//     ]
//   })
//   // setFavoriteCount(favoriteList.length)
//   setFavoriteCount((prevCount) => (prevCount === 0 ? 1 : 0))
//   console.log(favoriteList, 'fL');
//   console.log(favoriteList.length, 'fLentgh');
// }

  const { theme } = useContext(ThemeContext);

  const dataHandler = (
    vacancyName,
    companyName,
    image,
    require,
    companyDescription,
    category,
    obligations,
    workingConditions,
    id,
    companyCount,
    vacancyCount
    // watchCountId
  ) => {
    setData((previus) => {
      return [
        ...previus,
        {
          vacancyName,
          companyName,
          image,
          require,
          companyDescription,
          category,
          id: data.length + 1,
          obligations,
          workingConditions,
          companyCount,
          vacancyCount
          // watchCountId
        },
      ];
    });

    // console.log(vacancyCount, 'vacancycount');
    console.log(data);
    // const countJob = data.reduce((acc, item) => {
    //   return item.category === category ? acc + 1 : acc;
    // }, 1);
    const countJob = data.filter((item) => item.category === category).length
    console.log(countJob, 'countJob');
    setJobCount(countJob);

    const countCompany = data.reduce((acc, item) => {
      return item.companyName === companyName ? acc + 1 : acc;
    }, 0);

    setCompanyCount(countCompany);
  };

  const vacancyClickHandle = (id) => {
    //  const foundedId =  data.find((item) => (item.id === id))

    setSelectedJobId(id);
  };

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route
          element={
            <MainLayout
            favoriteCount = {favoriteCount}
              selectedJobId={selectedJobId}
              //  watchCount={watchCount}
            />
          }
        >
          <Route
            path="/"
            element={
              <Main
                data={data}
                dataHandler={dataHandler}
                vacancyClickHandle={vacancyClickHandle}
                // favoriteHandle = {favoriteHandle} 
                // setSelectedJobId={setSelectedJobId}
                // watchCount={watchCount}
                // setWatchCount={setWatchCount}
              />
            }
          />
          <Route
            path="Elanlar"
            element={
              <Main
                data={data}
                dataHandler={dataHandler}
                vacancyClickHandle={vacancyClickHandle}
                // favoriteHandle = {favoriteHandle} 
                // setSelectedJobId={setSelectedJobId}
                // watchCount={watchCount}
                // setWatchCount={setWatchCount}
              />
            }
          />
          <Route
            path="Elanlar/:id"
            element={
              <Main
                data={data}
                dataHandler={dataHandler}
                vacancyClickHandle={vacancyClickHandle}
                // favoriteHandle = {favoriteHandle} 
                // setSelectedJobId={setSelectedJobId}
                // watchCount={watchCount}
                // setWatchCount={setWatchCount}
              />
            }
          />

          <Route
            path="Kateqoriyalar"
            element={
              <Category
                // categoryList={categoryList}
                data={data}
                jobCount={jobCount}
                companyCount={companyCount}
              />
            }
          />
          <Route path="Şirkətlər" element={<Company />} />
          <Route
            path="Elan Yerləşdir"
            element={<CreateAd dataHandler={dataHandler}  />}
          />
          <Route path="Seçilmiş elanlar" element={<Favorites favoriteList = {favoriteList} />} />
          <Route path="Haqqımızda" element={<About />} />
          <Route path="Xidmətlər" element={<Services />} />
          <Route path="Əlaqə" element={<Contact />} />

          {/* <Route  element={<Aside data={data} />}>
            { <Route path="/" element={<AsideBlock />} /> }
            <Route path="Elanlar/:id" element={<VacancyDetail vacancy={data.vacancyName} />} />
          </Route> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
    // <div className={`App ${theme}`}>
    //   <Routes>
    //     <Route path="/" element={<>
    //       <AppLayout data={data} dataHandler={dataHandler}/>
    //       {/* <Aside/> */}
    //     </>} />
    //     <Route
    //       path="Elanlar"
    //       element={<>
    //         <Main dataHandler={dataHandler} data={data} />
    //         <Aside/>
    //       </>}
    //     />
    //     <Route path="/Kateqoriyalar" element={ <>
    //        <Category data={data} jobCount={jobCount} companyCount={companyCount} />
    //        <Aside/>
    //        </>
    //       } />
    //     <Route path="/Şirkətlər" element={ <>
    //     <Company />
    //     <Aside />
    //     </>} />
    //     <Route path="Elan Yerləşdir" element={<CreateAd dataHandler={dataHandler} />} />
    //     <Route path="Seçilmiş elanlar" element={<Favorites />} />
    //     <Route path="/Haqqımızda" element={<About />} />
    //     <Route path="/Xidmətlər" element={<Services />} />
    //     <Route path="/Əlaqə" element={<Contact />} />
    //     <Route path="/Detail/:id" element={<DetailPage data={data} />} />
    //     <Route path="*" element={<ErrorPage/>} />
    //   </Routes>
    // </div>
  );
}

export default App;
