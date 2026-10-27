'use client';
import { useState, useEffect } from 'react';

// ✏️ عدّلي كل بيانات الدعوة من هنا بس
const INVITE = {
  verse: 'وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
  groom: 'تْْسْْنْْيْْمْْ',
  bride: 'مْْحْْمْْدْْ',
  date: 'الجمعة 3 ديسمبر 2026',
  time: 'الساعة 4:00 مساءً',
  schedule: [
    { t: '3:30', title: 'استقبال الضيوف', desc: 'وصول المدعوين والتجمّع' },
    { t: '4:00', title: 'عقد القران', desc: 'كتب الكتاب' },
    // { t: '٧:٠٠ م', title: 'التهاني والتصوير', desc: 'صور تذكارية مع العروسين' },
    { t: '5:00', title: 'الضيافة', desc: 'عشاء وحلويات' },
  ],
  place: 'مسجد العلي العظيم',
  address: 'العنوان بالتفصيل هنا',
  mapUrl: 'https://maps.app.goo.gl/ckoK1AFUvJvEn3Bn6', // حطي لينك لوكيشن جوجل ماب
};

export default function Home() {
  const [opened, setOpened] = useState(false); // الظرف اتفتح ولا لسه
  const [gone, setGone] = useState(false);     // نشيل الظرف من الصفحة بعد الأنيميشن

  // نقفل السكرول لحد ما الظرف يتفتح
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden';
  }, [opened]);

  // بعد ما الأنيميشن يخلص نشيل الظرف خالص
  useEffect(() => {
    if (!opened) return;
    const id = setTimeout(() => setGone(true), 2400);
    return () => clearTimeout(id);
  }, [opened]);

  return (
    <main className="wrap">
      {/* ===== الصفحات (تحت الظرف) ===== */}
      <div className={`content ${opened ? 'show' : ''}`}>
        {/* صفحة ١: الآية + الأسماء */}
        <section className="page">
          <p className="verse">{INVITE.verse}</p>
          <p className="small">صدق الله العظيم</p>
          <div className="orn">✦</div>
          <p className="small">يتشرف بدعوتكم لحضور عقد قران</p>
          <h1 className="name">{INVITE.groom}</h1>
          <span className="and">و</span>
          <h1 className="name">{INVITE.bride}</h1>
        </section>

        {/* صفحة ٢: التاريخ والميعاد */}
        <section className="page">
          <h2 className="title">موعد كتب الكتاب</h2>
          <div className="orn">✦</div>
          <p className="big">{INVITE.date}</p>
          <p className="big">{INVITE.time}</p>
        </section>

        {/* صفحة ٣: نظام اليوم */}
        <section className="page">
          <h2 className="title">نظام الحفل</h2>
          <div className="orn">✦</div>
          <ul className="plan">
            {INVITE.schedule.map((s) => (
              <li key={s.t}>
                <b>{s.t}</b>
                <div><strong>{s.title}</strong><span>{s.desc}</span></div>
              </li>
            ))}
          </ul>
        </section>

        {/* صفحة ٤: اللوكيشن */}
        <section className="page">
          <h2 className="title">المكان</h2>
          <div className="orn">✦</div>
          <p className="big">{INVITE.place}</p>
          <p className="small">{INVITE.address}</p>
          <a className="btn" href={INVITE.mapUrl} target="_blank" rel="noreferrer">
            افتحي الموقع على الخريطة
          </a>
        </section>
      </div>

      {/* ===== الظرف (صورة الختم) ===== */}
      {!gone && (
        <div className={`envelope ${opened ? 'open' : ''}`}>
          <div className="half left" />
          <div className="half right" />
          <button className="seal" onClick={() => setOpened(true)} aria-label="افتح الدعوة" />
          <p className="hint">اضغطي على الختم لفتح الدعوة</p>
        </div>
      )}
    </main>
  );
}
