#pragma strict

var anim : Animator;

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

function OnCollisionEnter(col : Collision)
{
	print('collision');
    if(col.gameObject.name == "Plane")
    {
        // Destroy(col.gameObject);
        // col.animation.Play("jump");
        anim.SetTrigger('jumpHash');
    }
}