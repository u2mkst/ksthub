importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDa50OQMq30K_6IcA-fm0IAUO8S8UYXe3E",
  projectId: "ksthub-4840e",
  messagingSenderId: "688445578736",
  appId: "1:688445578736:web:6f1e29e1f3bae31c215135"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});
