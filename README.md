# Serverless Chat App - Real-Time Messaging

## 📌 Project Overview
The **Serverless Chat App** is a real-time messaging platform built using **AWS Amplify, WebSockets, React.js, and AWS Lambda**. It enables seamless, low-latency communication for college societies by leveraging AWS serverless architecture for scalability and cost-efficiency.

## 🚀 Features
- **Real-Time Messaging**: WebSocket-based communication for instant message delivery.
- **Scalable & Serverless**: AWS Lambda and DynamoDB handle backend processing dynamically.
- **Secure Authentication**: AWS Cognito ensures role-based access control.

## 🏗️ Tech Stack
### **Frontend**
- React.js (User Interface)
- AWS Amplify (Integration & Deployment)

### **Backend**
- AWS Lambda (Serverless API Processing)
- AWS API Gateway (WebSocket API Management)
- AWS DynamoDB (Database for Messages & Users)
- AWS Cognito (Authentication & User Management)

## 🔬 How the Chat Feature Works
1. **User Authentication:** AWS Cognito handles sign-in and token-based authorization.
2. **WebSocket Connection:** API Gateway establishes persistent WebSocket communication.
3. **Message Processing:** AWS Lambda receives, processes, and stores messages in DynamoDB.
4. **Real-Time Updates:** DynamoDB streams & AWS SNS trigger notifications for new messages.

## 📌 Challenges & Solutions
### **1️⃣ WebSocket Connection Management**
- **Issue:** Handling disconnections and reconnections.
- **Solution:** Implemented retry logic & persistent WebSocket connections.

### **2️⃣Secure Access & Authentication**
- **Issue:** Restricting unauthorized users from accessing chats.
- **Solution:** Integrated **AWS Cognito** with JWT-based authentication.

## 📜 License
This project is licensed under the MIT License.

---

