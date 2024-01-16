import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    // {
    //   id: 999,
    //   vacancyName: "Front-end Developer",
    //   companyName: "Webcoder",
    //   image: "https://www.webcoder.az/siteassets/img/logo_webcoder.png",
    //   require: "HTML5, CSS/CSS3, SASS/LESS,JavaScript, React, jQuery,Responsive dizayn bacarıqları",
    //   companyDescription: "2015-ci ildə fəaliyyətə başlayan WebCoder şirkəti proqramlaşdırma, qrafik dizayn, UI/UX dizayn, SEO, SEM, və bir çox başqa həllər həyata keçirən peşəkar rəqəmsal agentlikdir.",
    //   category: "Komputerləşmə və İKT",
    //   obligations: "Proqram təminatının inkişafı üçün dizayner, proqramçı, layihə rəhbərləri və digər aidiyyəti şöbələr ilə işləmək:",
    //   workingConditions: "7 saatlıq iş qrafiki",
    //   viewCount: 0
    // },
  ],
  favorite: [],
  viewCount: 0,
  vacancyCount: 0,
  companyCount: 0
};

export const dataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    setMainData: (state, action) => {
      state.data = action.payload;
    },

    addFavorite: (state, action) => {
      state.favorite = [...state.favorite, action.payload]
    },

    removeFavorite: (state, action) => {
      state.favorite = action.payload
    },
    viewCountIncrement: (state, action) => {
      state.data = action.payload;
    },
    vacancyCountIncrement: (state, action) => {
      const newAdCategory = action.payload.category;

      const existingAd = state.data.find(ad => ad.category === newAdCategory);

      if (existingAd) {
        existingAd.vacancyCount = existingAd.vacancyCount + 1;
      } else {
        state.data = [...state.data, action.payload];
      }
    },
    companyCountIncrement: (state, action) => {
      const newCompany = action.payload.companyName;
      const newAdCategory = action.payload.category;

      const isCategoryUnique = state.data.find(item => item.category === newAdCategory && item.companyName === newCompany)

      if(isCategoryUnique) {

        state.data.map(el => {
          if (el.companyName !== newCompany && el.category !== newAdCategory) {
            el.companyCount += 1;
            } else {
              el.companyCount = 1
            }
            return el;
        })



      }

    },
    

  },
});

export const { setMainData, addFavorite, removeFavorite, viewCountIncrement, vacancyCountIncrement, companyCountIncrement } = dataSlice.actions;

export default dataSlice.reducer;
