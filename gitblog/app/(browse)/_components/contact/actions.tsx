import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Inter } from "next/font/google"
import 'react-toastify/dist/ReactToastify.css';
import styles from "./contact.module.css";
import Head from "next/head";
 const inter = Inter({ subsets: ["latin"] });
export const Actions = () => {
  const form = useRef(null);
  
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
try{
	if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
        form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ).then(
        (result) => {
          alert('이메일이 성공적으로 전송되었습니다!');
        },
        (error) => {
          alert('이메일 전송에 실패했습니다: ' + error.text);
        })
      
	}
		}catch(error: any){
			alert('이메일 전송에 실패했습니다: ' + error.text);
		}

    }


  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Contact us to get in touch with us" />
        <meta name="keywords" content="contact, email, message" />
        <meta name="author" content="ali" />
      </Head>
      <div className={`flex flex-col place-content-evenly items-center p-6 min-w-full ${inter.className}`}>
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
          <div className={styles.formGroup}>
            <label className="block font-bold" htmlFor="from_name">
              Name
            </label>
            <input className='inline border-solid border-rose-200' type="text" id="from_name" name="from_name" required />
          </div>
          <div className={styles.formGroup}>
            <label className="block font-bold" htmlFor="email">
              Email
            </label>
            <input className='inline border-solid border-rose-200' type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label className="block font-bold" htmlFor="message">
              Message
            </label>
            <textarea className='inline border-solid border-rose-200 resize-y'rows={8} id="message" name="message" required />
          </div>
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Actions;


// import emailjs from '@emailjs/browser';
// import Head from "next/head";
// import { Inter } from "next/font/google";
// import styles from "./contact.module.css";
// const inter = Inter({ subsets: ["latin"] });

// export const Actions = () => {
//   const form = useRef(null);

//   const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
//         process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
//         form.current) {
//       emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//         form.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       ).then(
//         (result) => {
//           alert('Email successfully sent!');
//         },
//         (error) => {
//           alert('Failed to send email. Error: ' + error.text);
//         }
//       );
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Contact Us</title>
//         <link rel="icon" href="/favicon.ico" />
//         <meta name="description" content="Contact us to get in touch with us" />
//         <meta name="keywords" content="contact, email, message" />
//         <meta name="author" content="ali" />
//       </Head>
//       <div className={`${styles.main} ${inter.className}`}>
//         <h1>Contact Us</h1>
//         <form ref={form} onSubmit={sendEmail} className={styles.form}>
//           <div className={styles.formGroup}>
//             <label className={styles.label} htmlFor="user_name">
//               Name
//             </label>
//             <input type="text" id="user_name" name="user_name" required />
//           </div>
//           <div className={styles.formGroup}>
//             <label className={styles.label} htmlFor="user_email">
//               Email
//             </label>
//             <input type="email" id="user_email" name="user_email" required />
//           </div>
//           <div className={styles.formGroup}>
//             <label className={styles.label} htmlFor="message">
//               Message
//             </label>
//             <textarea rows={8} id="message" name="message" required />
//           </div>
//           <button className={styles.button} type="submit">
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Actions;