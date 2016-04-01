#pragma strict

var anim : Animator;
var arm : GameObject;

function Start ()
{
	anim = GetComponent("Animator");
}

function Update () {
	
	// if (collision.gameObject.tag == "Plane")
	// {
	// 	collision.animation.Play("jump"); 
	// 	// we want the player's animation to play, not the trigger's.
	// }
}

function OnTriggerEnter(col : Collider)
{
	print('collision');

    // if(col.gameObject.name == "Plane")
    // {
        // Destroy(col.gameObject);
        // col.animation.Play("jump");
        arm.GetComponent.<Animation>().Play('jump');
    // }
}