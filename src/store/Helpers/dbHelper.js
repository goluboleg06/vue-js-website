// src/store/Helpers/dbHelper.js
import { db } from '@/store/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';

const carListCollection = collection(db, 'carListData');

export const fetchCarListData = async () => {
  const carListSnapshot = await getDocs(carListCollection);
  return carListSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addCarToFirebase = async (car) => {
  await addDoc(carListCollection, car);
};

export const deleteCarFromFirebase = async (carId) => {
  const carDoc = doc(db, 'carListData', carId);
  await deleteDoc(carDoc);
};
