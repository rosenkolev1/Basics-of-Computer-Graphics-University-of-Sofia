//Function to rotate an object around a pivot
function rotateAroundPivot(mesh, pivotPoint, axis, angle){
	let pivotPointCopy = pivotPoint.clone();
	let pivotDiff = mesh.position.clone().add(pivotPointCopy.multiplyScalar(-1));

	//Change the current object pos to the pivotPoint
	mesh.position.set(pivotPoint.x, pivotPoint.y, pivotPoint.z);

	//Rotate the object
	mesh.rotateOnAxis(axis, angle);

	//Rotate the pivotDiff
	pivotDiff.applyAxisAngle(axis, angle);

	//Move the object back by the pivotDiff
	let distanceToPivot = pivotDiff.length();
	let pivotDiffNormalized = pivotDiff.normalize();
	mesh.position.add(pivotDiffNormalized.multiplyScalar(distanceToPivot));
}