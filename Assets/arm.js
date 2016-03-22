#pragma strict

var planeSpeed = 2;

function Start () {

}

function Update ()
{
	transform.Rotate(0, -planeSpeed+Time.deltaTime, 0);
}