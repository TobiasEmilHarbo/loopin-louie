#pragma strict

var propellerSpeed = 50;

function Start () {

}

function Update ()
{
	transform.Rotate(0, propellerSpeed+Time.deltaTime, 0);
}