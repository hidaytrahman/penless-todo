import { firebaseApp } from 'config/firebase.config';
import { getDocs, getFirestore } from 'firebase/firestore';

import { collection, addDoc } from "firebase/firestore";

export type TodoAPIType = {
	id: string;
	title: string;
	completed: boolean;
}

export default function useFireStore() {
	// Initialize Cloud Firestore and get a reference to the service
	const db = getFirestore(firebaseApp);

	// create user collection in the database - not in used
	const addUserData = async () => {
		try {
			const docRef = await addDoc(collection(db, "users"), {
				first: "Ada",
				last: "Lovelace",
				born: 1815
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	// create todo collection in the database
	const addTodoInDb = async (title: string, completed?: boolean) => {
		try {
			const docRef = await addDoc(collection(db, "todos"), {
				title,
				completed: completed || false
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	// fetch todo collection form the database
	const fetchTodos = async () => {
		const querySnapshot = await getDocs(collection(db, "todos"));
		const todos:TodoAPIType[] = [];

		// iterate all data in the object format for the array and transform with the expected format for frontend
		querySnapshot.forEach((doc) => {
		  todos.push({
			id: doc.id,
			...doc.data()
		  } as TodoAPIType)
	
		});

		console.log({todos})
		return todos;
	}



	return {
		addUserData,
		addTodoInDb,
		fetchTodos
	}
}
