import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  Phone, Mail, Globe, MessageCircle, CheckCircle2, ArrowUpRight,
  Sparkles, ShieldCheck, Clock, Paintbrush, Ruler, Sofa, Hammer
} from "lucide-react";
import "./style.css";

const services = [
  { icon: Paintbrush, title: "تشطيبات داخلية", text: "تنفيذ راقي بتفاصيل دقيقة وخامات مختارة بعناية." },
  { icon: Ruler, title: "تصميم وتنفيذ", text: "تحويل المساحات لأفكار عملية وفخمة تناسب أسلوب حياتك." },
  { icon: Sofa, title: "ديكور مودرن", text: "تنسيق ألوان وإضاءة وفرش بروح premium متكاملة." },
  { icon: Hammer, title: "إشراف كامل", text: "متابعة مراحل التنفيذ من البداية حتى التسليم النهائي." },
];

const features = ["جودة في التنفيذ", "التزام بالمواعيد", "إتقان في التفاصيل", "خامات وتشطيبات فاخرة"];

function Monogram() {
  return (
    <div className="monogramBox">
      <div className="monogramFrame"></div>
      <div className="letterM">M</div>
      <div className="letterH">H</div>
      <div className="homeMark"></div>
    </div>
  );
}

function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="glow glowLeft"></div>
        <div className="goldLineBg"></div>

        <nav className="nav">
          <div className="brand">
            <div className="brandIcon">MH</div>
            <div>
              <p className="brandName">MERAA HOME</p>
              <p className="brandSub">Finishing Your Dreams</p>
            </div>
          </div>
          <a href="https://wa.me/201555544285" className="navCta">تواصل واتساب</a>
        </nav>

        <div className="heroGrid">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="badge"><Sparkles size={16} /> تشطيبات فاخرة بتفاصيل محسوبة</div>
            <h1>بيتك يستاهل تشطيب <span>راقي</span> يليق بيك</h1>
            <p className="heroText">
              MERAA HOME تقدم حلول التشطيب والتصميم الداخلي بأسلوب حديث وفاخر، بداية من الفكرة حتى التسليم، مع اهتمام حقيقي بالجودة والوقت والتفاصيل.
            </p>
            <div className="actions">
              <a href="https://wa.me/201555544285" className="primaryBtn">اطلب معاينة الآن <MessageCircle size={19} /></a>
              <a href="#services" className="secondaryBtn">خدماتنا <ArrowUpRight size={19} /></a>
            </div>
            <div className="features">
              {features.map((item) => (
                <div className="feature" key={item}><CheckCircle2 size={18} />{item}</div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="logoCardWrap">
            <div className="logoCard">
              <Monogram />
              <h2>MERAA HOME</h2>
              <p className="logoSub">FINISHING YOUR DREAMS</p>
              <div className="separator"></div>
              <p className="arabicTag">جودة في التنفيذ، إتقان في التفاصيل</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionHead">
          <div>
            <p className="goldText">خدمات MERAA HOME</p>
            <h2>تشطيب كامل بهوية فاخرة</h2>
          </div>
          <p>موقع بسيط وسريع وواضح، هدفه يخلي العميل يثق ويتواصل معاك مباشرة من واتساب.</p>
        </div>
        <div className="services">
          {services.map(({ icon: Icon, title, text }) => (
            <motion.div whileHover={{ y: -8 }} className="serviceCard" key={title}>
              <div className="serviceIcon"><Icon size={26} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="proof">
        <div><ShieldCheck size={34} /><h3>ضمان جودة</h3><p>متابعة دقيقة في كل مرحلة</p></div>
        <div><Clock size={34} /><h3>تسليم في الموعد</h3><p>جدول واضح وتنفيذ منظم</p></div>
        <div><Phone size={34} /><h3>تواصل مباشر</h3><p>01555544285، 01222261937</p></div>
      </section>

      <footer>
        <div>
          <p className="footerBrand">MERAA HOME</p>
          <p>Finishing Your Dreams</p>
        </div>
        <div className="footerContact">
          <span><Phone size={16} />01555544285</span>
          <span><Mail size={16} />info@meraahome.com</span>
          <span><Globe size={16} />meraahome.com</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
