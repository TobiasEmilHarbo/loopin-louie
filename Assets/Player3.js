#pragma strict

private var hasBumped = false;

function Start () {

}

function Update () {
	if (Input.GetKeyDown("l") && !hasBumped) {
		bump();
	}
}

function bump() {
	hasBumped = true;

	transform.position += new Vector3(0,1,0);
	yield WaitForSeconds(.20);
	transform.position += new Vector3(0,-1,0);

	hasBumped = false;
}