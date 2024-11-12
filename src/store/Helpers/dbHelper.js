import { db } from '@/store/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';

const consultationsCollection = collection(db, 'consultations');
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

export const fetchConsultations = async () => {
  const consultationsSnapshot = await getDocs(consultationsCollection);
  return consultationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addConsultationToFirebase = async (consultation) => {
  await addDoc(consultationsCollection, consultation);
};












