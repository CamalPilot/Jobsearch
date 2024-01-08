import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 999,
      vacancyName : "Front-end Developer",
      companyName : "Webcoder",
      image : "https://www.webcoder.az/siteassets/img/logo_webcoder.png",
      require : "HTML5, CSS/CSS3, SASS/LESS,JavaScript, React, jQuery,Responsive dizayn bacarıqları",
      companyDescription : "2015-ci ildə fəaliyyətə başlayan WebCoder şirkəti proqramlaşdırma, qrafik dizayn, UI/UX dizayn, SEO, SEM, və bir çox başqa həllər həyata keçirən peşəkar rəqəmsal agentlikdir.",
      category : "Komputerləşmə və İKT",
      obligations :"Proqram təminatının inkişafı üçün dizayner, proqramçı, layihə rəhbərləri və digər aidiyyəti şöbələr ilə işləmək:",
      workingConditions :"7 saatlıq iş qrafiki"
    },
  ],
  favorite: [],
};

export const dataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    setMainData: (state, action) => {
      state.data = action.payload;
    },

    addFavorite: (state, action) => {
      state.favorite = [...state.favorite, action.payload ]
    },

    removeFavorite: (state, action) => {
      state.favorite = action.payload
    }
  },
});

export const { setMainData, addFavorite, removeFavorite } = dataSlice.actions; 

export default dataSlice.reducer;
