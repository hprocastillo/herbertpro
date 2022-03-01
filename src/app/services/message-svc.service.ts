import {Injectable} from '@angular/core';
import firebase from "firebase/compat";
import {addDoc, collection, Firestore} from "@angular/fire/firestore";
import Timestamp = firebase.firestore.Timestamp;

interface Message {
  id?: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  createdAt: Timestamp;
}

@Injectable({
  providedIn: 'root'
})
export class MessageSvcService {

  constructor(private db: Firestore) {

  }

  saveMessage(message: Message) {
    const messageRef = collection(this.db, 'messages');
    return addDoc(messageRef, message);
  }
}
