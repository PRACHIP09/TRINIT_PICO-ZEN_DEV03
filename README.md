# 🌾 PICO-ZEN: AgriTech Platform (TRI-NIT Hackathon 2023)

Built at **TRI-NIT Hackathon 2023 (NIT Trichy)**. It's an end-to-end platform for **farmers and agriculture enthusiasts** that combines ML-based farming advice, a marketplace, government schemes and expert help.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![Node](https://img.shields.io/badge/Node-Express-339933?logo=node.js) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-ML-000000?logo=flask) ![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white)

## 📂 Branches
| Branch | Contents |
|---|---|
| [`Frontend`](https://github.com/PRACHIP09/TRINIT_PICO-ZEN_DEV03/tree/Frontend) | React app with farmer and enthusiast portals and multi-language support (i18next) |
| [`backend`](https://github.com/PRACHIP09/TRINIT_PICO-ZEN_DEV03/tree/backend) | Express + MongoDB API: users, Q&A, products, cart, schemes, progress |
| [`ml`](https://github.com/PRACHIP09/TRINIT_PICO-ZEN_DEV03/tree/ml) | Flask ML service: crop and fertilizer recommendation, plant-disease detection |
| [`razorpay_backend`](https://github.com/PRACHIP09/TRINIT_PICO-ZEN_DEV03/tree/razorpay_backend) | Payment service (Razorpay) |
| [`video_chat`](https://github.com/PRACHIP09/TRINIT_PICO-ZEN_DEV03/tree/video_chat) | Video calls with experts (Socket.io + PeerJS) |

## ✨ Features
- 🌱 **Crop recommendation** (Random Forest) from soil nutrients and live weather
- 🧪 **Fertilizer recommendation** based on soil NPK values
- 🍃 **Plant-disease detection** from leaf images (PyTorch CNN)
- 🛒 Marketplace with cart and **Razorpay** checkout
- 🏛️ Government schemes, plus Q&A between farmers and experts
- 🎥 **Video consultations**, YouTube learning resources and a chatbot
- 🌐 **Multilingual** UI for farmers in different regions
- 🔐 JWT auth, email notifications and scheduled cron jobs

## 🛠️ Tech
React, Material UI, i18next · Node.js, Express, MongoDB, JWT, Nodemailer · Flask, scikit-learn, PyTorch · Razorpay · Socket.io, PeerJS
