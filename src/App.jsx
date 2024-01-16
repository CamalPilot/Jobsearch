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
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [favoriteCount, setFavoriteCount] = useState(0)
  const [favoriteList, setFavoriteList] = useState([]);
  


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
    companyCount,
    vacancyCount,
    viewCount
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
          vacancyCount,
          viewCount
        },
      ];
    });

  };

  const vacancyClickHandle = (id) => {
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
              />
            }
          />

          <Route
            path="Kateqoriyalar"
            element={
              <Category
                // categoryList={categoryList}
                data={data}
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

        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>

  );
}

export default App;
