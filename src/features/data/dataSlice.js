import { createSlice } from "@reduxjs/toolkit";
// import { format } from "date-fns";

const initialState = {
  data: [
    {
      id: 999,
      vacancyName: "Front-end Developer",
      companyName: "Webcoder",
      categoryName: "Komputerləşmə və İKT",
      image: "https://www.webcoder.az/siteassets/img/logo_webcoder.png",
      require:
        "HTML5, CSS/CSS3, SASS/LESS,JavaScript, React, jQuery,Responsive dizayn bacarıqları",
      companyDescription:
        "2015-ci ildə fəaliyyətə başlayan WebCoder şirkəti proqramlaşdırma, qrafik dizayn, UI/UX dizayn, SEO, SEM, və bir çox başqa həllər həyata keçirən peşəkar rəqəmsal agentlikdir.İş prinsiplərimiz nələrBizim iş fəaliyyətimiz 6 önəmli prinsip əsasında formalaşıb. Bu prinsiplər yarandığımız ilk gündən təyin olunub və komandaya qoşulan hər bir üzvə aşılanıb.Prinsip 1. Bizi nəyin birləşdirdiyini anlamaq.Prinsip 2. Ortaq məqsəd uğrunda birlikdə çalışmaq.Prinsip 3. Komanda üzvlərinin gücünü ortaya qoymaq.Prinsip 4. Vəzifə və öhdəlikləri tam anlamaq.Prinsip 5. Daim öyrənmək və bildiklərini öyrətmək.Prinsip 6. Sərbəstlik, bərabərlik və birlik.ÜNVAN :  NƏSİMİ RAY., AZADLIQ PR. 192E",
      categoryID: 1,
      obligations:
        "Proqram təminatının inkişafı üçün dizayner, proqramçı, layihə rəhbərləri və digər aidiyyəti şöbələr ilə işləmək:",
      workingConditions: "7 saatlıq iş qrafiki",
      viewCount: 0,
      vacancyCount: 1,
      companyCount: 1,
    },
    {
      id: 998,
      vacancyName: "Satış üzrə Mütəxəssis",
      companyName: "Bonamed",
      categoryName: "Maliyyə xidmətləri",
      image: "https://storage.jobsearch.az/storage/pages/11294/bonamed-0.svg",
      require:
        "Ali təhsil üstünlükdür Aktivlik, çeviklik, ünsiyyətçillik və məsuliyyətlilik; Effektiv kommunikasiya və təqdimat bacarığı; Komandada işləmək bacarığı;Azərbaycan dilində səlis yazmaq və oxumaq bacarığı",
      companyDescription: "",
      categoryID: 3,
      obligations:
        "Ofis daxilidir Potensial müştərilər ilə əlaqə yaradaraq, onların şirkətə müştəri kimi cəlb edilməsini təmin etmək üçün,  şirkət tərəfindən keçirilən təlimdə tam şəkildə öyrədilən məhsul və xidmətlər haqqında məlumatın verilməsi Rəhbərlik tərəfindən hər ay təqdim edilmiş fərdi qaydada əks etdirilmiş hədəflərə çatması ",
      workingConditions:
        "Azərbaycan Respublikasının Əmək Məcəlləsinə əsasən işə alınma; İş rejimi: 09:00-dan 18:00-dək; Həftənin 6 günü (Şənbə günü yarım iş günü); Bayramlar qeyri iş günü; Telefon danışıq xərclərinin şirkət tərəfindən ödənişi; Əmək haqqı 600 AZN + premiya (satış həcminə görə 1000-5000 azn);",
      viewCount: 0,
      vacancyCount: 1,
      companyCount: 1,
    },
    {
      id: 997,
      vacancyName: "Müştəri məmnuniyyəti üzrə təmsilçi",
      companyName: "Baku Electronics",
      image:
        "https://storage.jobsearch.az/storage/pages/2738/baku-electronics-mini.svg",
      require:
        "Müştəriyönümlü olmaq; Şifahi və yazılı olaraq ünsiyyətqurma bacarığı; Azərbaycan dilini səlis bilmək (rus və ingilis dili arzuolunandır); Microsoft Office proqramlarında işləmək bacarığı; Komanda ilə birgə işləmə bacarığı; Problem həll etmə bacarığı; Stresə davamlı olmaq;",
      companyDescription:
        "1994-cü ildə Türkiyədə yerləşən “NAB Holdinq”-in bir parçası olaraq Azərbaycanda fəaliyyətə başladıq. “NAB Holdinq” başda pərakəndə satış olmaqla yanaşı, avtomobil və maliyyə sahələrində də fəaliyyət göstərir. Hazırda Respublika üzrə 24 mağazada 60-dan çox rəsmi distribütoru olduğumuz brendlərin satışını həyata keçiririk.Müasir dünyanı, yenilikləri həyatınıza qatmaq üçün çıxdığımız bu yolda satışın sadəcə məhsul satmaqla məhdudlaşmadığını öyrəndik. Telefonlar, smarfonlar, qadjetlər, noutbuklar, kompüterlər, televizorlar, ev kinoteatrları, kiçik və böyük məişət texnikası, iqlim texnikası, oyun konsolları, velosiped və siqveylər, eləcə də tekstil, qab-qacaq, mebel, ev dekorları kimi 15.000-dən çox məhsul çeşidi ilə həyatınızın bir parçası olduq. İşinizi asanlaşdırıb, yenilikləri əlçatan etdiyimiz üçün qürurluyuq!Ünvan: Ajami Nakhchivani, Baku Əlaqə nömrəsi* 143Vebsayt: www.bakuelectronics.az",
      categoryID: 3,
      categoryName: "Maliyyə xidmətləri",
      obligations:
        "Müştəri müraciətlərini, şikayət və təkliflərini araşdırmaq; Müştəri müraciətlərini, şikayət və təkliflərini aidiyyatı üzrə yönləndirmək; Müştəriləri sorğuları üzrə düzgün məlumatlandırmaq; Məhsulun geri qaytarılmasına və ya dəyişdirilməsinə dair müraciətlər ünvanlandığı zaman müvafiq əməliyyatların icrasını təmin etmək; Şirkətin müştəri xidmətləri siyasətini tətbiq etmək; Müştərilərə yüksək səviyyəli xidmət göstərərək müştəri məmnuniyyətinin qorunmasını təmin etmək; Şirkət və müştəri arasındakı qarşılıqlı münasibətlərin müsbət yöndə inkişaf etdirilməsini təmin etmək;",
      workingConditions: "7 saatlıq iş qrafiki",
      viewCount: 0,
      vacancyCount: 1,
      companyCount: 1,
    },
    {
      id: 996,
      vacancyName: "Receptionist",
      companyName: "Pro Laundry",
      categoryName: "Inzibati, Biznes və İdarəetmə",
      image: "https://storage.jobsearch.az/storage/pages/52743/pro-laundry.svg",
      require:
        "Yaş həddi: 20-30 İş təcrübəsi: Resepşnist vəzifəsində ən az 1 il təcrübə tələb olunur Əmək haqqı: 600 AZN əlavə olaraq şəxsi təşəbüssü ilə həyata keçirdiyi satışdan bonus Namizədlər: Xanım  Dil Tələbləri: Azərbaycan dilində sərbəst ünsiyyət və yazı bacarığı olmalıdır. Rus dili biliyi arzu olunandır. ",
      companyDescription:
        "Ünvan:  Nərimanov Rayonu, Məsud Əlizadə küçəsi, 40 A.",
      categoryID: 2,
      obligations:
        "Geyimlərin, tekstillərin quru təmizləməyə və ya çamaşırxanaya qəbulu və təhvili Malların təhvili zamanı təmizliyin keyfiyyətindən əmin olmaq Hazır mallar haqqında müştərilərə məlumatın verilməsi Kassa əməliyyatlarının həyata keçirilməsi İşçi heyəti arasında kordinasiyanın həyata keçirilməsi  Müəssisə daxili qaydalara, etik normala riayət etmək, Müştəri ilə şirkət arasında əlaqələri və iş axışını koordinasiya etmək; Sosial media üçün şəkil və videoroliklərin hazırlanmasına yardımçı olmaq",
      workingConditions:
        "İş qrafiki: 09:00-20:00 (Həftədə 1 gün istirahət günü)",
      viewCount: 0,
      vacancyCount: 1,
      companyCount: 1,
    },
    {
      id: 995,
      vacancyName: "Administrative Assistant",
      companyName: "Afea Group",
      image: "https://storage.jobsearch.az/storage/pages/1928/afea-group.svg",
      require:
        "Experience in the organization of administrative and office manager is an advantage Proficiency in Azerbaijani and a good level of proficiency in English Ability to work with office programs Responsibility, precision, and attention to detail",
      companyDescription:
        "AFEA Group is part of Specialdaydeal Ltd specializing in data analysis and ad budget analyzation. Here at the AFEA Group, we operate, build, create & execute data analysis for our clients, while functioning according to our principle 'We earn when you earn'. This means we do not just provide services; we do business together. We help our clients skyrocket their conversions. Over the years we've built strong relationships with many famous influencers, bloggers and social media stars. We connect them with our customers to accelerate their growth and increase sales. Along with strong relationships with reputable blogs, pages & channels, we own some of the biggest blogs, channels, and pages on social media and videosharing platforms. Our main partners include Broker/FX companies, SaaS, B2B software and some international gaming companies.",
      categoryID: 2,
      categoryName: "Inzibati, Biznes və İdarəetmə",
      obligations:
        "We're looking for a new team member! The Administrative Assistant provides administrative support for tasks including office management, coordination, report, document preparation, and communication/telephone calls. Qualified candidates should provide comprehensive administrative support to leadership, as well as having a great attention to detail.",
      workingConditions:
        "Working hours: We work 4 days a week from 10 am to 7 pm in our office, Fridays are flexible. (13:00-14:00 lunch time)",
      viewCount: 0,
      vacancyCount: 1,
      companyCount: 1,
    },
    {
      id: 994,
      vacancyName: "Senior Procurement Specialist",
      companyName: "A2Z Technologies",
      image:
        "https://storage.jobsearch.az/storage/pages/11556/a2z-technology.svg",
      require:
        "Bachelor's degree in Business, IT, Supply Chain Management, or a related field. At least 3 years’ experience in procurement, vendor management, and at least a year of experience in IT procurement Strong understanding of IT products and services Excellent analytical and negotiation skills Knowledge of relevant laws, regulations, and industry best practices Exceptional communication and interpersonal skills Detail-oriented with strong organizational abilities Proficiency in Microsoft Office Suite Proficiency in 1 C (8.3)",
      companyDescription:
        "Interested candidates can send their CVs by mentioning “Senior Procurement Specialist” in the subject line.",
      categoryID: 2,
      categoryName: "Inzibati, Biznes və İdarəetmə",
      obligations:
        "Identify, evaluate, and select reliable vendors Negotiate contracts and agreements to ensure favorable terms and conditions Maintain positive and collaborative relationships with existing vendors Develop and implement procurement strategies for IT products and services Collaborate with internal stakeholders to understand requirements and specifications Conduct market research to stay updated on industry trends, prices, and emerging technologies Analyze and optimize costs associated with procurement without compromising quality",
      workingConditions:
        "Full-time job Salary will be discussed upon interview Five-day working week Professional growth  ",
      viewCount: 0,
      vacancyCount: 1,
      companyCount: 1,
    },
    {
      id: 993,
      vacancyName: "Xarici turlar üzrə Tur meneceri",
      companyName: "Selfie Travel",
      image:
        "	https://storage.jobsearch.az/storage/pages/38103/selfie-travel.svg",
      require:
        "Tur menecer kimi turizm sahəsində ən azı 1 il iş təcrübəsinə malik olmaq,(Təcrübəsi olmayanlara işi öyrədirik ) Azərbaycan və rus dillərini yüksək səviyyədə bilmək (ingilis dili arzuolunandır) Kompüterdə işləmək, internetdən aktiv istifadə və sürətli axtarış bacarığı, Səlis və işgüzar danışıq bacarığına malik olmaq(yalniz xanimlar) İşgüzar yazışmaların aparılması,",
      companyDescription:
        "Ünvan: Caspian plaza ,Cəfər Cabbarlı 44  Əlaqə nömrəsi: +994 55 570 32 34",
      categoryID: 6,
      categoryName: "Otel, İaşə, Turizm",
      obligations:
        "Müxtəlif istiqamətlər üzrə fərdi və qrup turlarının hazırlanması, Müştərilərdən gələn sorğuların vaxtında və işgüzar formada cavablandırılması, Otellərin bronlaşdırılması, Sığorta yazılması, Viza dəstəyi xidmətinin göstərilməsi, Sosial şəbəkələr üzərindən sorğuların cavablandırılması,",
      workingConditions:
        "İş saatları: Bazar ertəsi – şənbə günü 10:00-dan 19:00-dək; Əmək haqqı şəxsin təcrübə və bacarıqlarına görə müəyyənləşdiriləcəkdir, (600-1500 azn ) + bonus (namizədin təcrübəsinə görə maaşa individual baxıla bilər).",
      viewCount: 0,
      vacancyCount: 1,
      companyCount: 1,
    },
    {
      id: 992,
      vacancyName: "İnspektor",
      companyName: "Azersun Holding",
      image:
        "https://storage.jobsearch.az/storage/pages/2519/azersun-new-logo.svg",
      require:
        "Sənaye, kimya, qida və ya maşınqayırma mühəndisi ixtisasları üzrə ali təhsilli olmalı; MS Office proqramlarını bilməli; ISO 9001, ISO 22000 standartları üzrə sertifikat (arzuolunandır) Proses və laboratoriya sahəsində təcrübəsi olanlara üstünlük verilir. Rus dili və ingilis dili biliyi üstünlükdür",
      companyDescription:
        "1991-ci ildə Azərbaycanda fəaliyyətə başlayan 'Azərsun Holdinq' MMC ölkənin qida istehsalı, pərakəndə satış və kənd təsərrüfatı sahəsində fəaliyyət göstərən qabaqcıl şirkətidir. Qida sektorunda  Azərbaycanın istehsalçı və ixracatçı ölkə halına gəlməsində böyük rol oynayan 'Azərsun Holdinq' tərkibində fəaliyyət göstərən zavodların güclü istehsal potensialı ilə yanaşı geniş ixracat şəbəkəsinə sahibdir. Sahib olduğu şirkət idarəçilik prinsipləri, müştəri məmnuniyyəti, keyfiyyət təminatı, sosial məsuliyyət layihələri və ətraf mühiti qoruma prinsipləri ilə xalqa xidmət etməkdədir.",
      categoryID: 2,
      categoryName: "Inzibati, Biznes və İdarəetmə",
      obligations:
        "Qida təhlükəsizliyi və gigiyena ilə əlaqədar prosedurların (ISO 22000/2015- 9001) tələb etdiyi qaydalara riayət edilməsinə nəzarət etməli; Depoda meyvə-tərəvəz məhsullarının qəbulu zamanı saxlanma şəraiti, satışa yararlılığına nəzarət etməli; Xam yağların kimyəvi, fiziki, mikrobioloji tərkibinin və orqanoleptik parametrlərinə görə yoxlanılmalı;",
      workingConditions:
        "Növbəli iş qrafiki Digər bölgələrdən işçi alınacağı təqdirdə yaşayış yeri və gün ərzində 3 dəfə qidalanma şirkət tərəfindən qarşılanacaqdır",
      viewCount: 0,
      vacancyCount: 1,
      companyCount: 1,
    },
    {
      id: 991,
      vacancyName: "İngilis dili müəllimi",
      companyName: "Star Colleges",
      image:
        "https://storage.jobsearch.az/storage/pages/11758/star-colleges-new.svg",
      require:
        "4-5 ildən çox peşəkar təcrübə Məsuliyyətlilik, punktuallıq, operativlik və çeviklik Yüksək məntiqi təfəkkür İngilis dili müəllimliyi, tərcümə ixtisasının və ya digər ingilis dilli ixtisasdan məzun olmalı İngilis dili bilik səviyyəsi minimum Upper-Intermediate IELTS dərəcəsi minimum 7. (“Speaking” minimum 7.5) Müxtəlif yaş qruplarına ingilis dilinin tədrisində təcrübəli olmalı Digər beynəlxalq sertifikatların olması üstünlükdür (TKT, TEFL, TESOL və s) Qrup və fərdi qaydada tədris etmə bacarığı Təyin olunan proqram üzrə maksimum effektivliklə tədris etmək",
      companyDescription:
        "Ünvan: Üzeyir Hacıbəyov 57, Giriş - Kövkəb Səfərəliyeva 12a; Əlaqə nömrəsi: +994 50 201 46 67 , +994 12 526 24 36/46; Vebsayt: www.star.edu.az",
      categoryID: 5,
      categoryName: "Təlim və tədris",
      obligations:
        "Proqram təminatının inkişafı üçün dizayner, proqramçı, layihə rəhbərləri və digər aidiyyəti şöbələr ilə işləmək:",
      workingConditions:
        "İş qrafiki: Bazarertəsi-Şənbə İş saatı: 10:00-19:00 Əmək haqqı: Yüksək Rəsmi əmək müqaviləsi ilə əməkdaşlıq",
      viewCount: 0,
      vacancyCount: 1,
      companyCount: 1,
    },
  ],
  categories: [
    {
      id: 1,
      categoryName: "Komputerləşmə və İKT",
      company: ["Webcoder"],
    },
    {
      id: 2,
      categoryName: "Inzibati, Biznes və İdarəetmə",
      company: [
        "Pro Laundry",
        "Afea Group",
        "A2Z Technologies",
        "Azersun Holding",
      ],
    },
    {
      id: 3,
      categoryName: "Maliyyə xidmətləri",
      company: ["Bonamed", "Baku Electronics"],
    },
    {
      id: 4,
      categoryName: "Mühəndislik",
      company: [],
    },
    {
      id: 5,
      categoryName: "Təlim və tədris",
      company: ["Star Colleges"],
    },
    {
      id: 6,
      categoryName: "Otel, İaşə, Turizm",
      company: ["Selfie Travel"],
    },
    {
      id: 7,
      categoryName: "Nəqliyyat, paylama və logistika",
      company: [],
    },
    {
      id: 8,
      categoryName: "Dizayn, incəsənət və sənətkarlıq",
      company: [],
    },
    {
      id: 9,
      categoryName: "Səhiyyə",
      company: [],
    },
    {
      id: 10,
      categoryName: "Marketinq, reklam, çap və nəşriyyat",
      company: [],
    },
  ],
  favorite: [],
  viewCount: 0,
  vacancyCount: 0,
  companyCount: 0,
  statistic: {
    daily: 2,
    weekly: 3,
    monthly: 9,
  },
  categoryID: 0,
  companyID:0
};

export const dataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    setMainData: (state, action) => {
      state.data = action.payload;
    },

    addFavorite: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
    },

    removeFavorite: (state, action) => {
      state.favorite = action.payload;
    },
    viewCountIncrement: (state, action) => {
      state.data = action.payload;
    },
    vacancyCountIncrement: (state, action) => {

    },
    companyCountIncrement: (state, action) => {
      state.categories = action.payload;
    },
    vacancyStatisticIncrement: (state) => {
      state.statistic.daily++;
      state.statistic.weekly++;
      state.statistic.monthly++;
    },
    setCategoryID: (state, action) => {
      state.categoryID = action.payload
    },
    setCompanyID: (state, action) => {
      state.companyID = action.payload
    },
  },
});

export const {
  setMainData,
  addFavorite,
  removeFavorite,
  viewCountIncrement,
  vacancyCountIncrement,
  companyCountIncrement,
  vacancyStatisticIncrement,
  categoryClick,
  setCategoryID,
  setCompanyID
} = dataSlice.actions;

export default dataSlice.reducer;
