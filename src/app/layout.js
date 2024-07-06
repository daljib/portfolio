import "./globals.css";
import Head from 'next/head'
 
export const metadata = {
  title: "Website Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
<link rel="icon" type="image/jpg" href="./imgs/cartoon.png"/> 
      </Head>
      <body>{children}</body>
    </html>
  );
}
