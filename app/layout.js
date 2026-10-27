import { Amiri, Aref_Ruqaa } from 'next/font/google';
import './globals.css';

// الخطوط العربي (Amiri للنص العادي / Aref Ruqaa للآية والأسماء)
const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'], variable: '--f-body' });
const ruqaa = Aref_Ruqaa({ subsets: ['arabic'], weight: ['400', '700'], variable: '--f-title' });

export const metadata = { title: 'دعوة كتب كتاب', description: 'يسعدنا حضوركم' };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${amiri.variable} ${ruqaa.variable}`}>{children}</body>
    </html>
  );
}
