#pragma strict

var planeSpeed = 50;

function Start () {

}

function Update ()
{
	transform.Rotate(0, planeSpeed+Time.deltaTime, 0);
}