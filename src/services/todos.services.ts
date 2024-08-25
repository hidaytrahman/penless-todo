import { firebaseApp } from "config/firebase.config";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { TodoAPIType } from "hooks/useFireStore";

// Not in used 
export const fetchTodoList = async () => {
	// Initialize Cloud Firestore and get a reference to the service
	const db = getFirestore(firebaseApp);

	//  need to check auth here
	if (true) {
		const querySnapshot = await getDocs(collection(db, "todos"));
		const todos: TodoAPIType[] = [];

		// iterate all data in the object format for the array and transform with the expected format for frontend
		querySnapshot.forEach((doc) => {
			todos.push({
				id: doc.id,
				...doc.data()
			} as TodoAPIType)

		});

		console.log({ todos })
		return todos;
	} else {
		console.log("You are not authorized")
		return {error: {
			message: "You are not authorized"
		}}
	}

}