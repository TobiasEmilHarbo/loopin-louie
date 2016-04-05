#pragma strict

var planeSpeed = 2;
public var tmpVar = 1;

function Start () {

}

function Update ()
{
	transform.Rotate(0, (-planeSpeed+Time.deltaTime)*tmpVar, 0);
}