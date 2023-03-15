import LineDivider from "../../../common/lineDivider";

function About() {
  return (
    <div className="about">
      <div className="about__header">
        <h5 className="about__title">SABABU ZA KUTUMIA WEBSITE YETU </h5>
        <LineDivider />
      </div>
      <div className="about__body">
        <div className="about__sections">
          <div className="about__section about__section-1">
            <h5 className="about__subtitle">Bure</h5>
            <p className="about__text">
              Nyumba za Kupanga Online Inatoa usaidizi katika mchakato wa
              upangishaji na upangaji bila malipo yoyote. Hivyo Itapunguza
              ghalama zisizo za msingi.
            </p>
          </div>
          <div className="about__section about__section-2">
            <h5 className="about__subtitle">Haraka</h5>
            <p className="about__text">
              Nyumba za Kupanga Online itakusaidia mpangaji kupata
              chumba(nyumba) na mpangishaji kupata wapangaji kwa haraka zaidi.
              Hivyo kuokoa muda wa kutafuta chumba au wateja.
            </p>
          </div>
          <div className="about__section about__section-3">
            <h5 className="about__subtitle">Raisi</h5>
            <p className="about__text">
              Nyumba za Kupanga Online ni raisi sana kuitumia. Hivyo hai itaji
              ujuzi wowote ili kuitumia pia tumetumia lugha ya kiswahili ambayo
              inaeleweka na kila mtanzania.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
