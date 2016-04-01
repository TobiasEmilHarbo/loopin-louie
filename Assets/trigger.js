#pragma strict

function Start () {

}

function Update () {
	
	if (collision.gameObject.tag == "Plane")
	{
		collision.animation.Play ("airplane"); 
		// we want the player's animation to play, not the trigger's.
	}
}