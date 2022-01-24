// Import React
import React, { FC } from "react";

// Import Components
import Header from "./Header";
import Footer from "./Footer";

const Contant: FC = () => {
  return (
    <div className="contant">
        <Header/>
      <div className="container">
        <section className="contant-section">
          <h2>مصمم الموقع :</h2>
          <p>
            اسمي محمد كالو , مطوّر ومصمم واجهات امامية(فرونت اند) مهتم بالتعليم
            والتطوير الذاتي , اقوم بانشاء العديد من المواقع بغرض فهم التقنيات
            البرمجية او بغرض الربح , موقعي الشخصي وحسابي على القيتهب :
            <ul>
              <li><a href="https://github.com/kalumian"> Github</a></li>
              <li><a href="https://kalumian-personal.netlify.app/"> My Website</a></li>
            </ul>
          </p>
        </section>
        <section className="contant-section">
          <h2>عن الموقع :</h2>
          <p>
            تم بناء هذا الموقع لغرض تعليمي بحت بالأخص تجربة التايبسكريب الحرص على بناء مشروع منظّم ومرتّب بدقة عالية لذلك لا توجد اي نواية لتطوير هذا الموقع الى
            تطبيق ويب احترافي , هذا ما يفسر ضعف الاداء التفاعلي بين البرنامج
            والمستخدم هذا وبغض النظر عن عدم اكمال نظام الحسابات وتخصيص المهامات
            لكل حساب مستخدم , تم تطوير هذا الموقع باستخدام التقنيات التالية :
            <ul>
              <li>SASS</li>
              <li>TypeScript</li>
              <li>FireBase</li>
            </ul>
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Contant;
