#pragma strict

var anim : Animator;
var arm : GameObject;

function Start ()
{
	anim = GetComponent("Animator");
}

function Update ()
{
}

function OnTriggerEnter(col : Collider)
{
    arm.GetComponent.<Animation>().Play('jump');
}