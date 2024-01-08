import React from "react";
import "./About.scss";

function About() {
  return (
    <>
    <div className="about">
      <h2 className="about__title">Haqqımızda</h2>
      <div className="about__content">
        <h3>JobSearch.az</h3>
        <p>
          Azərbaycanda iş axtarışı üçün <br /> nəzərdə tutulmuş onlayn <br /> platformadır.
        </p>
      </div>
      <div className="about__text">
        <p>
          Yarandığı, 2005-ci ildən bu günədək sayt illər boyu reytinq üzrə
          Azərbaycanda ən populyar iş axtarışı saytı olaraq qalır.{" "}
        </p>
        <p>
          Biz ilk növbədə iş axtarışında olanlara dəstək olmağa çalışırıq,
          onlara iş axtarışı və şirkətləri tədqiq etmək üçün təmənnasız imkanlar
          yaradırıq. Hər gün minlərlə iş axtarışında olan insanlar üçün yeni iş
          imkanları yaradırılır.{" "}
        </p>
        <p>
          Dəyərli müştərilərimiz olan şirkətlər haqqında da daima düşünürük və
          onların əmək bazarında daha da yaxşı tanıdılmasında və ən yaxşı
          namizədlərin tapılmasında dəstək oluruq. Müştərilərimiz arasında
          beynəlxalq və yerli neft və qeyri-neft şirkətləri, dövlət qurumlarını,
          maliyyə institutlarını, qeyri-hökümət təşkilatlarını, orta və kiçik
          sahibkarları və s. yer tutur.
        </p>
        <p>
          Saytın istifadəçilərini minlərlə müştərilər və on minlərlə iş
          axtarışında olan istifadəçilər təşkil edir.
        </p>
      </div>
    </div>
    </>
  );
}

export default About;
