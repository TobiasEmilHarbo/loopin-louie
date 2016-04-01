#pragma strict

var arm : GameObject;
var henDownP1 = 0;
var henDownP3 = 0;

function Start ()
{
}

function Update ()
{
}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.name == "Player 1" || col.gameObject.name == "Player 3")
	{
    	arm.GetComponent.<Animation>().Play('jump');
	}
	else if(col.gameObject.name == "Hen p1")
	{
		henDownP1++;
	}
	else if(col.gameObject.name == "Hen p3")
	{
		henDownP3++;
	}

	// if()

	print(henDownP3);
}