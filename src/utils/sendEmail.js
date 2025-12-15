// src/utils/sendEmail.js

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (options) => {
  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_PORT:', process.env.SMTP_PORT);

  return await transporter.sendMail(options);
};
// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: false, // для 587
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });

// // 🔍 Перевірка SMTP при старті сервера
// transporter.verify((error, success) => {
//   if (error) {
//     console.error('❌ SMTP connection error:', error.message);
//   } else {
//     console.log('✅ SMTP ready');
//   }
// });

// export const sendEmail = async (options) => {
//   return transporter.sendMail(options);
// };
